## ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Fetch the Weather

Let's use our new-found react skills to create a weather app!

**You will need:**

* Fetch (built-in to JavaScript) or axios (3rd party, remember to `npm install axios`)
* Create forms that store data with local state

## Implement the Fetch API

**Resources**:

* [OpenWeather API](http://openweathermap.org/current)

* [OpenWeather API Documentation](http://openweathermap.org/current)

* [Info on `fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)

Time to show off! You're going to display the weather on your app.

You'll use the OpenWeather API to fetch weather information from a certain zip code and update your blog to display the current weather.

## Solution

At the end of this exercise, your solution will look something like what's shown here.

<img src="https://res.cloudinary.com/briezh/image/upload/v1556235234/weather_gi72z2.png" class="responsive" />

---

## Requirements

Make a new component called `Weather`.

On your `Weather` page, ask the user to input a zip code.

* You can learn more about forms [here](https://facebook.github.io/react/docs/forms.html).
  * When this event fires, take the `event.target.value` and `fetch()` from the OpenWeather API.

* Use the response from the API to display the current temperature, the high and low temperatures, the current weather description, and the name of the city.
  * Note: Our solution uses Fahrenheit. You're free to use Celsius or Kelvins if you'd like.

**Important Notes**:

* Because the OpenWeather API is not an open API, every request must end with this API key:  `&appid=052f26926ae9784c2d677ca7bc5dec98`.

* As an example, this is a URL to which you might send a `fetch()` request: `http://api.openweathermap.org/data/2.5/weather?zip=60614,us&appid=052f26926ae9784c2d677ca7bc5dec98`.

### Skeleton Code (Starter)

Here is a functional Weather component starter:

```js
import { Component } from 'react';

class Weather extends Component {
  state = {
    // Your required states here
  }

  handleChange = (event) => {
    this.setState({ zipcode: event.target.value }, () => {
      console.log('Your zip code is', this.state.zipcode);
    });
  }

  handleSubmit = (event) => {
    // Your fetch call here
    // Your state updates go under function(json)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="zipcode">Please enter your zip code for the weather:</label>
          <input 
            id="zipcode" 
            type="text" 
            onChange={this.handleChange} 
          />
          <input type="submit" value="Get my forecast!" />
        </form>
        <div>
          { /* Display weather information here */}
        </div>
      </div>
    )
  }
}


export default Weather;
```

**Need a Hint or Two?**

<details>
    <summary>Hint 1</summary>
    <br />
    You'll only need to create and implement the `Weather` component.
</details>
<details>
  <summary>Hint 2</summary>
  <br />
  The `value` of your text fields need to be 'controlled' in your components state
</details>
<details>
  <summary>Hint 3</summary>
  <br />
  The temperature reading comes in units of Kelvin by default - check the API for the `units` parameter to get the reading in Farenheit or Celcius
</details>

## Bonus

Here are some extra ideas to challenge yourself if you have time:

* Icons make every weather app come to life! There's a good way to do this - hunt around in the returned JSON for a recommended icon.
* Spend a little time styling the page. Try to get it close to the example image above!
* Make your current weather into a 5-day forecast
* Make a `Use current location` button so the user can click that instead of providing the location.
