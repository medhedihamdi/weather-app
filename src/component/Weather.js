
import React from 'react';

export default function Weather(props) {
 /* {props.tempreature && <p>Tempreature: <span>{props.tempreature}</span> <br/></p>}
  {props.city && <p>City: <span>{props.city}</span> <br/></p>}
  {props.country && <p>Country: <span>{props.country}</span> <br/></p>}
  {props.humidity && <p>Humidity: <span>{props.humidity}</span> <br/></p>} 
  {props.description }*/

  /*{props.tempreatur}
  {props.city}
  {props.country }
  {props.humidity} */

  return (
    <div className='info'>
      {props.tempreature && <p>Tempreature: <span>{props.tempreature-273.15}°c</span> <br/></p>}
  {props.city && <p>City: <span>{props.city}</span> <br/></p>}
  {props.country && <p>Country: <span>{props.country}</span> <br/></p>}
  {props.humidity && <p>Humidity: <span>{props.humidity}</span> <br/></p>} 
  {props.description }
   
    </div>
  );
}