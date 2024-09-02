import React from 'react'

export default function Form(props) {
  return (
    <form  onSubmit={ props.getWeather}>
    <input   placeholder='City...'  name='city'/> <br/>
    <input placeholder='Country...'  name='country'/><br/>
    <button>Get Weather</button>


</form>
  )
}

