import React from "react";

const Input = ({ name, label, errors, ...rest }) => {

	return (
		<div className="row">
			<div className="input-field">
				<label htmlFor={name}>{label}</label>
				<input {...rest} name={name} id={name} />
				{ errors[name] && <i className="error-tooltip">{ errors[name] }</i> }
			</div>
		</div>
	);
};

export default Input;
