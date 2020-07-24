import axios from 'axios';

// build a module that create a new "instance" of the axios object, but with added functionality
// 1. define the base url for our API
// 2. Include auth token in headers object

export const axiosWithAuth = () => {
	const token = localStorage.getItem('token');
	return axios.create({
		baseURL: 'http://localhost:5000/api',
		headers: {
			Authorization: token,
		},
	});
};
