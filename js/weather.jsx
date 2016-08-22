import React from 'react';


class Weather extends React.Component {
  constructor(){
    super();
    this.state = {temperature: 0, city: "none", latitude: 0, longitude: 0};
  }

  getWeather(){
    let self = this;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
              let response = JSON.parse(xmlhttp.responseText);
              console.log(response);
              self.setState({temperature: response.main.temp, city: response.name});
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };
    xmlhttp.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=645c5d39c7603f17e23fcaffcea1a3c1`, true);
    xmlhttp.send();
  }

  componentDidMount () {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      var crd = pos.coords;
      this.setState({latitude: crd.latitude});
      this.setState({longitude: crd.longitude});
      this.getWeather();
    }

    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    }

    navigator.geolocation.getCurrentPosition(success.bind(this), error, options);
  }

  render (){
    return (
      <div>
        <h1>Weather</h1>
        <p>Temperature in K: {this.state.temperature}</p>
        <p>City: {this.state.city}</p>
      </div>
    );
  }
}

export default Weather;
