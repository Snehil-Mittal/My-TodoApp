import React from 'react';

const Rainbow = (WrappedComponent) => {
	const colours = ['red', 'green', 'blue', 'orange', 'pink'];
	const randomcolor = colours[Math.floor(Math.random() * 5)];
	const classname = randomcolor + '-text';

	return (props) => {
		return (
			<div className={classname}>
				<WrappedComponent {...props} />
			</div>
		);
	};
};

export default Rainbow;
