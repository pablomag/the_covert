import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const Carousel = (props) => {

	const { data, settings } = props;

	return (
		<Slider {...settings}>
			{data.map(item =>
				<Link to={item.link} key={item._id}>
					<img src={item.image} alt={item.title}  className="slick-slide"/>
					<h1 className="slick-slide__overlay slick-slide__overlay__title">{item.title}</h1>
					<h3 className="slick-slide__overlay slick-slide__overlay__subtitle">{item.subtitle}</h3>
				</Link>
			)}
		</Slider>
	);
}

export default Carousel;
