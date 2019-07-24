import React from "react";

import TimeAgo from 'react-timeago';

const LatestComments = (props) => {

	const { comments, commentCount } = props;

	return (
		<React.Fragment>
			<div className="row">
				<h5>Last { commentCount } comments:</h5>
			</div>
			<div className="row collection">
			{ comments.map(comment =>
				<div key={comment.id} className="collection-item">
					<div className="table-item comment">
						<span className="badge badge-sm"><TimeAgo date={comment.timestamp*1000} /></span>
						<span><b>{comment.title}</b>. - "{ comment.text }"</span>
					</div>
				</div>
			)}
			</div>
		</React.Fragment>
	);
}

export default LatestComments;
