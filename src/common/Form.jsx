import React, { Component } from 'react';
import Joi from 'joi-browser';

import Input from './Input';
import Textarea from './Textarea';

class Form extends Component {

	state = {
		data: {},
		errors: {}
	};

	handleChange = ({ currentTarget: input }) => {

		const data = { ...this.state.data };
		data[input.name] = input.value;
		this.setState({ data });

		const errors = this.validateProperty(input);

		this.setState({ errors });
	};

	handleSubmit = event => {

		event.preventDefault();

		const errors = this.validate();
		this.setState({ errors: errors || {} });

		if (errors) return;

		this.doSubmit();
	};

	renderInput(field) {

		const { errors } = this.state;

		if (field.type === 'textarea')
			return <Textarea key={field.name} errors={errors} onChange={this.handleChange} maxlength={field.maxlength}
				name={field.name} label={field.label} type={field.type} value={this.state.data[field.name]} />;

		return <Input key={field.name} errors={errors} onChange={this.handleChange} onBlur={this.validate}
						name={field.name} label={field.label} type={field.type} value={this.state.data[field.name]} />;
	}

	renderButton(label) {

		return <button className="btn waves-effect waves-light" disabled={this.validate()} onClick={this.handleSubmit}>{label}</button>;
	}

	validate = () => {

		const options = { abortEarly: false };
		const { error } = Joi.validate(this.state.data, this.schema, options);

		if (error) {

			const errors = {};

			for (let item of error.details)
				errors[item.path[0]] = item.message;

			return errors;
		}

		return null;
	}

	validateProperty = ({ name, value }) => {

		if (this.schema[name])
		{
			const field = { [name]: value };
			const schema = { [name]: this.schema[name] }

			const { error } = Joi.validate(field, schema);

			return error ? { [name]: error.details[0].message } : {};
		}

		return {};
	}
}

export default Form;
