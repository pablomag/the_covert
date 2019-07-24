import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Employees from './components/Employees';
import EmployeeProfile from './components/EmployeeProfile';
import NavBar from './components/NavBar';
import Register from './components/Register';
import ProfileNotFound from './components/ProfileNotFound';
import Error404 from './components/Error404';

import { getEmployees } from './services/employeeService';

import './App.css';

class App extends Component {

	state = {
		employees: [],
		sortColumn: { path: 'name', order: 'asc' }
	};

	async componentDidMount() {

		const { data: employees } = await getEmployees();
		this.setState({ employees });
	}

	handleSort = sortColumn => {

		this.setState({ sortColumn: { path: sortColumn.path, order: sortColumn.order } });
	}

	handleSaveEmployee = employee => {

		const employees = [employee, ...this.state.employees];
		this.setState({ employees });
	}

	render() {

		return (
			<React.Fragment>
				<main className="container">
					<div className="row">
						<ToastContainer />
					</div>
					<NavBar />
					<Switch>
						<Route path="/register" exact render={(props) =>
							<Register {...props} handleSaveEmployee={this.handleSaveEmployee} /> }/>
						<Route path="/employee/:fullname" exact render={(props) =>
							<EmployeeProfile {...props}	employees={this.state.employees} />} />
						<Route path="/employees" exact render={(props) =>
							<Employees {...props} employees={this.state.employees}
												onSort={this.handleSort} sortColumn={this.state.sortColumn} />} />
						<Route path="/ProfileNotFound" exact component={ProfileNotFound} />
						<Route path="/404" exact component={Error404} />
						<Redirect from="/register" to="/register" />
						<Redirect from="/employees" to="/employees" />
						<Redirect from="/" to="/employees" exact />
						<Redirect to="/404" />
					</Switch>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
