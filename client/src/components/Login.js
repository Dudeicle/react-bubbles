import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
	// make a post request to retrieve a token from the api
	// when you have handled the token, navigate to the BubblePage route

	let initialState = {
		credentials: {
			username: '',
			password: '',
		},
	};

	const [state, setState] = useState(initialState);
	const { push } = useHistory();

	const handleChanges = (e) => {
		setState({
			credentials: {
				...state.credentials,
				[e.target.name]: e.target.value,
			},
		});
	};

	const loginSubmit = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:5000/api/login', state.credentials)
			.then((res) => {
				console.log(res);
				localStorage.setItem('token', res.data.payload);
				push('/login/bubblepage/protected');
			})
			.catch((err) => console.log({ err }));
	};

	return (
		<>
			<h1>Welcome to the Bubble App!</h1>
			<br></br>
			<h3>Please login below!</h3>

			<form onSubmit={loginSubmit}>
				<label>
					Username-:-
					<input
						type='text'
						name='username'
						value={state.credentials.username}
						onChange={handleChanges}
					/>
				</label>
				<br></br>

				<label>
					Password-:-
					<input
						type='text'
						name='password'
						value={state.credentials.password}
						onChange={handleChanges}
					/>
				</label>
				<br></br>
				<button path='/login/bubblepage/protected'>Login!</button>
			</form>
		</>
	);
};

export default Login;
