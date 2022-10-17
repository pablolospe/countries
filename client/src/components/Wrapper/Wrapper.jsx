import React, {useEffect} from "react";
import { getAllCountries } from '../../redux/actions/actions';
import Card from '../Card/Card';
import { useDispatch, useSelector } from "react-redux";


const Wrapper = (props)=>{
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries)

    useEffect(()=>{
        dispatch(getAllCountries()
        )}, [dispatch])

    const items = allCountries?.map((c,index)=>{
        return <li key={c.id}><Card
        key={c.id}
        id={c.id}
        flag={c.flag}
        name={c.name}
        region={c.region}                       
        /> </li>
    })


    return <div>
        <h3>Página: {props.currentPage}</h3>

        <button onClick={props.prevHandler}>Prev</button>
        <button onClick={props.nextHandler}>Next</button>

        <h4>Items: </h4>

        <ul>
            {items}        
        </ul>


    </div>
}



export default Wrapper;