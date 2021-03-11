import { Component } from "react";
import GoogleMap from "../google-map/GoogleMap";

class Weather extends Component {
  state = {
    // Your required states here
    zipcode: "",
    errorMessage: "",
    name: "",
    temp: "",
    description: "",
  };

  handleChange = (event) => {
    this.setState({ zipcode: event.target.value }, () => {
      console.log("Your zip code is", this.state.zipcode);
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    // Your fetch call here
    let url = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipcode},us&appid=75368d6b1d2ac84a89a42ae13988cbfc&units=imperial`;
    // Your state updates go under function(json)
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    if (json.cod === 200) {
      this.setState({
        name: json.name,
        description: json.weather[0].description,
        temp: json.main.temp,
      });
    } else {
      this.setState({
        errorMessage: json.message,
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <GoogleMap />
          <label htmlFor="zipcode"></label>
          <br />
          <input
            id="zipcode"
            type="text"
            value={this.state.zipcode}
            onChange={this.handleChange}
            placeholder={"zip code"}
          />
          <input type="submit" value="Get my forecast!" />
        </form>
        <p>{this.state.errorMessage}</p>
        <div id="weather">
          <h2>{this.state.name}</h2>
          <p>{this.state.description}</p>
          <h1>{this.state.temp}</h1>
        </div>
      </div>
    );
  }
}

export default Weather;
