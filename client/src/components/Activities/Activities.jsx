import React from 'react';
import Activity from '../Activity/Activity.jsx'
import { getAllActivities } from '../../redux/actions/actions.js';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import style from './Activities.module.css'


export default function Activities({props, id,name,difficulty,duration,season}) {
  const dispatch = useDispatch()
  const allActivities = useSelector((state) => state.activities);
  

  useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);
  
  return (
    <>
      <div className={style.activities}>
        
        {
          allActivities?.map((a)=>(
            <Activity 
              key={a.id}
              name={a.name}
              difficulty={a.difficulty}
              duration={a.duration}
              season={a.season}
              countries={a.countries}
               
            />
          ))
        } 
      </div>
    </>
  );
}
