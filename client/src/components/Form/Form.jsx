import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { createActivity } from '../../redux/actions/actions';
import { Link, Route } from 'react-router-dom'



export default function Form(props) {

    const [state, setState]= useState({
        name:'',
        difficulty: 0,
        duration: 0,
        season:'',
    })

    const changeHandler=(event)=>{
        const property = event.target.name
        const value = event.target.value;

        setState({
            ...state,
            [property]:value
        })
    }

    const dispatch = useDispatch

    const submitHandler=(event)=>{
        event.preventDefault();
        props.createUser(state);
        dispatch(createActivity(state))
        axios.post('http://localhost:3001/activities', )
        setState({
            name:'',
        difficulty: 0,
        duration: 0,
        season:'',
        })
    }

    return (
        <>
            <div>
                <form onSubmit={submitHandler}>
                <label htmlFor="name">Activity:</label>
                <input type="text" name="name" value={state.name} onChange={changeHandler}></input>
                <br/><br/>
                <label htmlFor="difficulty">Difficulty:</label>
                <select name="difficulty" onChange={changeHandler} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br/><br/>
                <label htmlFor="duration">Duration: </label>
                <select name="duration" onChange={changeHandler}>
                    <option value="1">1 Hs.</option>
                    <option value="2">2 Hs.</option>
                    <option value="3">3 Hs.</option>
                    <option value="4">4 Hs.</option>
                    <option value="5">5 Hs.</option>
                    <option value="6">6 Hs.</option>
                    <option value="7">7 Hs.</option>
                    <option value="8">8 Hs.</option>
                    <option value="9">9 Hs.</option>
                </select>
                <br/><br/>
                <label htmlFor="season">Season: </label>
                <select name="season" onChange={changeHandler}>
                    <option value="spring">Spring</option>
                    <option value="summer">Summer</option>
                    <option value="autumn">Autumn</option>
                    <option value="winter">Winter</option>
                </select>
                <br/><br/>
                <label htmlFor="country">Country</label>
                <br/><br/>
                <button type="submit">CREATE</button>
                </form>
            </div>
        </>
    )
}