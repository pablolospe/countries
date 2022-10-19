import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountryName } from "../../redux/actions/actions.js";

export default function SearchBar(props) {
	const [countryName, setCountryName] = useState('');
	const dispatch = useDispatch();

	const handlerChange = (e) => {
		// e.preventDefault()
		
		setCountryName(e.target.value);
	};

	const handlerSubmit = (e) => {
		e.preventDefault();
		dispatch(getCountryName(countryName));
		setCountryName('');
		// console.log('anda?'+ countryName);
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
					<button type='submit' >Search Country</button>
				</form>
			</div>
		</>
	);
}
