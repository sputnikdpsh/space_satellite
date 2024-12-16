import React, {FC, useContext, useState} from 'react';
import {Context} from "../App";
import {observer} from "mobx-react-lite";

const LoginForm = () => {
	const [login, setLogin] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const {store} = useContext(Context);

	return (
		<div>
			<input
				onChange={e => setLogin(e.target.value)}
				value={login}
				type="text"
				placeholder={'login'}
			/>
			<input
				onChange={e => setPassword(e.target.value)}
				value={password}
				type="password"
				placeholder={'password'}
			/>
			<button onClick={() => store.login(login, password)}>
				Login
			</button>
		</div>
	);
};

export default observer(LoginForm);