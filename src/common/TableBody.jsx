import React, { Component } from "react";
import _ from 'lodash';

class TableBody extends Component {

	renderContent = (item, column) => {

		if (column.content) return column.content(item);

		return _.get(item, column.path);
	};

	handleLink = (item, columns) => {

		if (!columns[0].link) return;

		const { history } = this.props;
		const link = columns[0].link ? columns[0].link(item) : ''; 

		history.push(link)
	}

	render() {

		const { data, columns } = this.props;

		return (
			<tbody>
			{ data.map(item => 
				<tr key={item._id} onClick={() => this.handleLink(item, columns)} className={columns[0].link ? "table-row__link" : "table-row__item"}>
					{ columns.map(column =>
						<td key={column.path || column.key} className="table-row__item">
							{ this.renderContent(item, column) }</td>
					)}
				</tr>
			)}
			</tbody>
		);
	}
}

export default TableBody;
