import React, { Component } from "react";
import _ from 'lodash';

import Table from '../common/Table';

class EmployeesTable extends Component {

	sortEmployees() {

		const { employees, sortColumn } = this.props;

		return _.orderBy(employees, [sortColumn.path], [sortColumn.order]);
	}

	render() {

		const { sortColumn, onSort, ...rest } = this.props;
		const sorted = this.sortEmployees();

		const columns = [
			{ path: 'avatar', label: 'Avatar', sortable: false,
				link: employee => `/employee/${employee.name}+${employee.surname}`,
				content: employee =>
					<div className="avatar"><img src={employee.avatar} alt={`avatar-${employee.name}-${employee.surname}`} /></div> },
			{ path: 'name', label: 'Name', sortable: true },
			{ path: 'surname', label: 'Surname', sortable: true },
			{ path: 'title', label: 'Title', sortable: true }
		];

		return (
			<div className="employees-list">
				<div className="s6 employees-list__header">
					<h2>Employees</h2>
				</div>
				<div className="s6 employees-list__content">
					<Table {...rest} data={sorted} columns={columns} sortColumn={sortColumn} onSort={onSort} />
				</div>
			</div>
		);
	}
}

export default EmployeesTable;
