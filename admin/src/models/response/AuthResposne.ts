import {IUser} from '../IUser';

export interface AuthResposne {
	accessToken: string,
	refreshToken: string,
	user: IUser
}