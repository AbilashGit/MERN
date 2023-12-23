import UserData from './UserData'

export default class UserApi {
	static getAllUsers() {
        return UserData.users;
	}
}