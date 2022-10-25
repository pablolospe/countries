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
               <h3 className={style.title}>About</h3>
              
               <p>Este proyecto fue realizado en el bootcamp de Soy HENRY</p>        
               
               <p>Posee una base de datos y filtros para navegar los diferentes paises del mundo y sus principales características</p>        
               
               <p>También permite crear actividades turísticas relacionadas con los países </p>
               <br />
               <br />
               <p>Fue desarrollado por Pablo X. Lospennato en el mes de ocutbre de 2022</p>
                <br />
               <button className={style.button} onClick={()=>history.goBack()}>BACK</button>
            </div>
        </>
    )
}