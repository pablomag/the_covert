import React from 'react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = ({ columns, data, sortColumn, onSort, ...rest }) => {

	return (
		<table className="striped">
			<TableHeader {...rest} columns={columns} sortColumn={sortColumn} onSort={onSort} />
			<TableBody {...rest} data={data} columns={columns} />
		</table>
	);
}

export default Table;
