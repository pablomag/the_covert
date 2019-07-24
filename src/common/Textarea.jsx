import React from "react";

const Textarea = ({ name, label, maxlength, errors, ...rest }) => {

	return (
		<div className="row">
			<div className="input-field">
				<label htmlFor={name}>{label}</label>
				<textarea {...rest} name={name} id={name} className="materialize-textarea" maxLength={maxlength}></textarea>
				{ errors[name] && <i className="error-tooltip">{ errors[name] }</i> }
			</div>
		</div>
	);
};

export default Textarea;
