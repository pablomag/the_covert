import React from 'react';
import Joi from 'joi-browser';

import Form from '../common/Form';

const regex = /^((\+7|7|8)+([0-9]){10})$/gm;

class CommentForm extends Form {

	state = {
		data: { id: 0, title: '', text: '', phone: '' },
		errors: {}
	};

	schema = {
		id: Joi.number(),
		title: Joi.string().min(5).max(80).required().label('Title'),
		text: Joi.string().max(128).required().label('Text'),
		phone: Joi.string().regex(regex, 'required').min(10).max(24).required().label('Phone'),
		timestamp: Joi.optional()
	};

	doSubmit() {

		const { postComment } = this.props;
		const { data: comment } = this.state;

		postComment(comment);
		this.resetForm();
	}

	resetForm() {

		this.setState({ data: { id: 0, title: '', text: '', phone: '' } });
	}

	render() {

		const fields = [
			{ label: 'Title', type: 'text', name: 'title' },
			{ label: 'Text', type: 'textarea', name: 'text', maxlength: 128 },
			{ label: 'Phone', type: 'text', name: 'phone' }
		];

		const buttonTitle = "Post comment";

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

export default CommentForm;
