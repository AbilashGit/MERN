import axios from 'axios';

export default class UserApi {
	static getAllUsers() {
		return axios.get('http://localhost:4000/users')  // async request
			.then(response => response.data)
			.catch(error => console.log(error));
	}

	static saveUser(user) {
		return axios.post("http://localhost:4000/users", user)
				.then(response => response.data)
				.catch(error => console.log(error));
	}
}
