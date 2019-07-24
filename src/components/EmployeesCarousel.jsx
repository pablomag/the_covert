import React, { Component } from 'react';

import Carousel from '../common/Carousel';

class EmployeesCarousel extends Component {

	getEmployeesData () {

		const { employees } = this.props;

		let data = [];

		employees.map(employee =>
			data.push({
				_id: employee._id,
				image: employee.avatar,
				title: `${employee.name} ${employee.surname}`,
				subtitle: `<${employee.title}>`,
				link: `/employee/${employee.name}+${employee.surname}`
			})
		);

		return data;
	}

	render () {

		const settings = {
			autoplay: true,
			autoplaySpeed: 2500,
			lazyLoad: 'ondemand',
			centerPadding: '100px',
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};

		return (
			<div className="employees-carousel">
				<Carousel data={this.getEmployeesData()} settings={settings} />
			</div>
		);
	};
}

export default EmployeesCarousel;
