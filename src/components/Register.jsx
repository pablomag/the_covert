import React from "react";
import RegisterForm from './RegisterForm';

const Register = (props) => {

	const { handleSaveEmployee, ...rest } = props;

	return (
		<div className="s6 register">
			<div className="row">
				<h2>Register employee</h2>
			</div>
			<div className="s6 register-form">
				<RegisterForm {...rest} saveEmployee={handleSaveEmployee} />
			</div>
		</div>
	);
}

export default Register;
