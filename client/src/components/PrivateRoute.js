import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

// Private Routes requirements
// 1. It has the same API as <Route />
// 2. It renders a <Route /> and passses all the props to it
// 3. It checks if the user is authenticated. If they are then render the component passing in as a prop. Otherwise, redirect to /login page

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (localStorage.getItem('token')) {
					// if the token is in localStorage, render the given component
					return <Component {...props} />;
				} else {
					// redirect to login page
					return <Redirect to='/login' />;
				}
			}}
		/>
	);
};
export default PrivateRoute;
