import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, SignIn, SignUp } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export default function App() {
	const { user } = useAuthListener();

	return (
		<Router>
			<Switch>
				<IsUserRedirect exact path={ROUTES.SIGN_IN} loggedInPath={ROUTES.BROWSE} user={user}>
					<SignIn />
				</IsUserRedirect>
				<IsUserRedirect exact path={ROUTES.SIGN_UP} loggedInPath={ROUTES.BROWSE} user={user}>
					<SignUp />
				</IsUserRedirect>
				<ProtectedRoute exact path={ROUTES.BROWSE} user={user}>
					<Browse />
				</ProtectedRoute>
				<IsUserRedirect exact path={ROUTES.HOME} user={user} loggedInPath={ROUTES.BROWSE}>
					<Home />
				</IsUserRedirect>
			</Switch>
		</Router>
	);
}
