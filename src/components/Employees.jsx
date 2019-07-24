import React, { Component } from 'react';

import EmployeesTable from './EmployeesTable';

class Employees extends Component {

	render () {

		const { employees, sortColumn, onSort, ...rest } = this.props;

		return (
			<EmployeesTable {...rest} employees={employees} onSort={onSort} sortColumn={sortColumn} />
		);
	};
}

export default Employees;
