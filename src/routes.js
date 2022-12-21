import withPageTitle from "./components/PageTitle";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/Profile/Profile";

const routes = [
	{
		path: "/",
		component: <Home />,
		title: "Home Page",
	},
	{
		path: "/dashboard",
		component: (
			<PrivateRoute>
				<Dashboard />
			</PrivateRoute>
		),
		title: "Dashboard",
	},
	{
		path: "/profile/:username",
		component: <Profile />,
		title: `GitHub Profile | {username}`,
	},
	{
		path: "*",
		component: <NotFound />,
		title: "Page Not Found | GitHub Profile",
	},
];

const routesWithPageTitle = routes.map((route) => {
	const wrappedComponent = withPageTitle(route.title, route.component);
	console.log(wrappedComponent);
	return {
		...route,
		element: wrappedComponent,
		isValid: true,
	};
});

export default routesWithPageTitle;
