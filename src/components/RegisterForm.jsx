import React from 'react';
import Joi from 'joi-browser';
import { toast } from 'react-toastify';

import { createRandomEmployee } from '../services/employeeService';

import Form from '../common/Form';

class RegisterForm extends Form {

	state = {
		data: { _id: 0, name: '', surname: '', title: '', avatar: '' },
		errors: {}
	};

	schema = {
		_id: Joi.number(),
		name: Joi.string().max(64).required().label('Name'),
		surname: Joi.string().max(64).required().label('Surname'),
		title: Joi.string().min(5).max(80).required().label('Title'),
		avatar: Joi.optional()
	};

	registerEmployee = async employee => {

		const { saveEmployee, history } = this.props;

		const { data } = await createRandomEmployee();

		const avatar = data.results[0].picture.medium;

		employee._id = Math.random(999);
		employee.avatar = avatar;

		saveEmployee(employee);

		toast.success(`${employee.name} ${employee.surname} registered!`);
		history.push('/employees');
	}

	doSubmit() {

		const { data: employee } = this.state;

		this.registerEmployee(employee);
		this.resetForm();
	}

	resetForm() {

		this.setState({ data: { _id: 0, name: '', surname: '', title: '' } });
	}

	render() {

		const fields = [
			{ label: 'Name', type: 'text', name: 'name' },
			{ label: 'Surname', type: 'text', name: 'surname' },
			{ label: 'Title', type: 'text', name: 'title' }
		];

		const buttonTitle = "Register";

		return (
			<div className="card-panel grey lighten-4">
				<form onSubmit={this.handleSubmit}>
					{fields.map(field => this.renderInput(field))}
				</form>
				{this.renderButton(buttonTitle)}
			</div>
		);
	}
}

export default RegisterForm;
