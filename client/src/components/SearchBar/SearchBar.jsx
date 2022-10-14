import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryName } from "../../redux/actions/actions";

export default function SearchBar(props) {
	const [countryName, setCountryName] = useState('');
	const dispatch = useDispatch();

	const handlerChange = (e) => {
		setCountryName(e.target.value);
	};

	const handlerSubmit = (e) => {
		e.preventDefault();
		dispatch(getCountryName(countryName));
		setCountryName('');
	};

	return (
		<>
			<div>
				<form onSubmit={handlerSubmit}>
					<input
						type='text'
						name='country'
						id='country'
						value={countryName}
						placeholder='Search...'
						onChange={handlerChange}
					/>
					<button type='submit'>Search Country</button>
				</form>
			</div>
		</>
	);
}
