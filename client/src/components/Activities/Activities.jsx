// import React, { useEffect, useParams } from "react";

export default function Activities({id,name,difficulty,duration,season}) {
 
  return (
    <>
      <div>
        
        
          <div>
            <h4>Activities: {name}</h4>
            {/* <p>difficulty: {ac.difficulty}</p>
            <p>duration: {ac.duration}</p>
            <p>season: {ac.season}</p> */}
          </div>
        
      </div>
    </>
  );
}


// export default function Card({id, name, flag, region}) {

//     return (
//         <>
//             <div>
//                 <Link to={`/detail/${id}`}>
//                 <img src={flag} alt='acá va la imagen'/>
//                 <h3>{name}</h3>
//                 </Link>
//                 <h4>continent: {region}</h4>   
//                 <br/>
//             </div>               
//         </>
//     )
// }