import React from 'react';
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";

const Auth: React.FC = () => {
	return (
		<div>
			<LoginForm />
			<RegistrationForm />
		</div>
	);
};

export default Auth;