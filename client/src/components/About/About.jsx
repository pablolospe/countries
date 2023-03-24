import React from 'react';
import style from '../About/About.module.css'
import { useHistory } from "react-router-dom";


export default function About() {
    const history = useHistory();
    return (
        <>
            <div>
                <br />
                <br />
               {/* <h3 className={style.title}>About</h3> */}
                <br/>
               <p className='p'>This project was developed during the Soy Henry bootcamp.</p>
                <br/>

               <p className='p'>It features a database and filters that allow users to navigate through different countries around the world and their main characteristics.</p>
                <br/>

               <p className='p'>Furthermore, it enables the creation of tourist activities related to these countries.</p>
               <br />
               
               <p className='p'>This web app was developed by Pablo Xavier Lospennato in October 2022.</p>
                <br />
               <button className={style.button} onClick={()=>history.goBack()}>BACK</button>
            </div>
        </>
    )
}