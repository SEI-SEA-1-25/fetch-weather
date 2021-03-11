import { Component } from "react";

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
    let url = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipcode},us&appid=052f26926ae9784c2d677ca7bc5dec98&units=imperial`;
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
          <label htmlFor="zipcode">
            Please enter your zip code for the weather:
          </label>
          <br />
          <input
            id="zipcode"
            type="text"
            value={this.state.zipcode}
            onChange={this.handleChange}
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
