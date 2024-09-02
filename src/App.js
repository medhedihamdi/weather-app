import React, { Component } from "react";
import Form from "./component/Form";
import Weather from "./component/Weather";
import "./App.css";

const APIKEY = "a4b412951ae3a6819d0931f4d485ac24";

export default class App extends Component {
  state = {
    tempreature: "",
    city: "",
    country: "",
    humidity: "",
    desciption: "",
    error: ''
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    console.log(city, country);
    const api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${APIKEY}`
    );
    const data = await api.json();
    console.log(data);

    if (city && country) {
      this.setState({
        tempreature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      });
    } else {
      this.setState({
        tempreature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: 'Please enter data'
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
        <Form getWeather={this.getWeather} />
        <Weather 
              tempreature= {this.state.tempreature}
              city= {this.state.city}
              country= {this.state.country}
              humidity= {this.state.humidity}
              desciption= {this.state.desciption}
              error={this.state.error} />
      </div>
      </div>
    );
  }
}