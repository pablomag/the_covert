import React, { Component } from "react";

class TableHeader extends Component {

	raiseSort = path => {

		const { onSort, sortColumn } = this.props;

		if (sortColumn.path === path) {

			sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
		} else {

			sortColumn.path = path;
			sortColumn.order = "asc";
		}

		onSort(sortColumn);
	}

	renderColumn = column => {

		const { sortColumn } = this.props;

		let className = "table-label";

		if (column.sortable) {

			className += " table-label--clickable";

			if (sortColumn.path === column.path)
				className += " table-label--order--" + sortColumn.order;

			return <th key={column.path} scope="col" onClick={() => this.raiseSort(column.path)}
						className={className}>{column.label}</th>
		}

		return <th key={column.path || column.key} scope="col" className={className}>{column.label}</th>
	}

	render() {

		const { columns } = this.props;

		return (
			<thead>
				<tr>{ columns.map(column => this.renderColumn(column))}</tr>
			</thead>
		);
	}
}

export default TableHeader;
