import axios from 'axios';
import { useState } from 'react';

export default ({ url, method, body, onSuccess }) => {
	const [errors, setErrors] = useState(null);

	const doRequest = async (props = {}) => {
		try {
			setErrors(null);
			const response = await axios[method](url, { ...body, ...props });

			if (onSuccess) {
				onSuccess(response.data);
			}

			return response.data;
		} catch (err) {
			setErrors(
				<div className="alert alert-danger" role="alert" style={{width:'30%'}}>
					<h4>Oops!</h4>
				 	{err.response.data.errors[0].message}
				</div>
			);
		}
	};

	return { doRequest, errors };
};
