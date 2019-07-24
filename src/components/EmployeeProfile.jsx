import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import EmployeeHeader from './EmployeeHeader';
import EmployeesCarousel from './EmployeesCarousel';
import CommentForm from './CommentForm';
import LatestComments from './LatestComments';

import { getEmployeeProfile, getLatestComments } from '../services/employeeService';

class EmployeeProfile extends Component {

	state = {
		employee: {},
		comments: [],
		commentCount: 5,
		loading: true
	}

	async componentDidMount() {

		const { match } = this.props;
		const fullname = match.params.fullname;

		await this.getEmployeeData(fullname);
	}

	componentWillReceiveProps(nextProps) {

		const { match } = this.props;

		if (match.params.fullname !== nextProps.match.params.fullname)
			this.getEmployeeData(nextProps.match.params.fullname);
	}

	async getEmployeeData(fullname) {

		const employee = await getEmployeeProfile(fullname);
		const comments = await getLatestComments(fullname);

		this.setState({ employee, comments, loading: false });
	}

	handlePostComment = comment => {

		comment.id = Math.random(0, 999);
		comment.timestamp = Math.floor(Date.now() / 1000);
		
		const comments = [comment, ...this.state.comments];

		this.setState({ comments });
		toast.success('New comment added!');
	}

	render () {

		const { employees } = this.props;
		const { loading, employee, comments, commentCount } = this.state;

		const filtered = comments.slice(0, commentCount);

		if (loading) return <div className="employee-profile"><h4>loading...</h4></div>

		if (!employee) return <Redirect replace to='/ProfileNotFound' />

		return (
			<div className="employee-profile">
				<div className="row">
					<div className="col m12">
						<EmployeeHeader employee={employee} />
					</div>
				</div>
				<div className="row">
					<div className="col m12">
						<LatestComments comments={filtered} commentCount={this.state.commentCount} />
					</div>
				</div>
				<div className="row">
					<div className="col l6 m12">
						<CommentForm postComment={this.handlePostComment} />
					</div>
					<div className="col l6 m12">
						<EmployeesCarousel employees={employees} />
					</div>
				</div>
			</div>
		);
	};
}

export default EmployeeProfile;
