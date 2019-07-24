import React from "react";

const EmployeeHeader = (props) => {

	const { employee } = props;

	return (
		<div className="row employee-profile__header">
			<div className="col avatar avatar--big">
				<img src={employee.avatar} alt={`avatar-${employee.name}-${employee.surname}`} />
			</div>
			<div className="col">
				<h4 className="employee-profile__name">{employee.name} {employee.surname}</h4>
				<h5 className="employee-profile__title">{employee.title}</h5>
				<p className="employee-profile__address">{employee.email}</p>
			</div>
		</div>
	);
}

export default EmployeeHeader;
