import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResposne} from "../models/response/AuthResposne";

export default class AuthService {
	static async login(login: string, password: string): Promise<AxiosResponse<AuthResposne>> {
		return $api.post<AuthResposne>('/login', {login, password});
	}

	static async registration(
		login: string,
		fullName: string,
		password: string,
		email: string,
		role: string
	): Promise<AxiosResponse<AuthResposne>> {
		return $api.post<AuthResposne>('/registration',
			{
				login,
				fullName,
				password,
				email,
				role
			});
	}

	static async logout(): Promise<void> {
		return $api.post('/logout');
	}
}