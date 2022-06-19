import './App.css';
import React, { useState } from 'react';

let bmr = 0;
let calories = 0;
let loss = 0;
let gain = 0;
function App() {
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const bmrCount = () => {
    const male = document.querySelector("#male");
    const female = document.querySelector("#female");

    if (male.checked) {
      bmr = (66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age));
    }

    if (female.checked) {
      bmr = (655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age));
    }

  }

  const calculate = (e) => {
    e.preventDefault();
    bmrCount(bmr);

    const activity = document.querySelector("#activity").value;
    calories = (bmr * activity).toFixed(0);

    const diff = 200;
    loss = (parseInt(calories) - parseInt(diff));
    gain = (parseInt(calories) + parseInt(diff));

    const weightloss = document.querySelector("#loss");
    weightloss.textContent = `Weight loss: ${loss} kcal`;
    const maintenance = document.querySelector("#maintenance");
    maintenance.textContent = `Maintenance calorie intake: ${calories} kcal`;
    const weightgain = document.querySelector("#gain");
    weightgain.textContent = `Weight gain: ${gain} kcal`;

    const info = document.querySelector("#info");
    info.classList.remove("hidden");
  }

  return (
    <div className="App">
      <h1>Daily calorie calculator</h1>

      <div className='inputs'>
        <form onSubmit={calculate}>
          <div className='gender'>
            <div className='male'>
              <input type="radio" id="male" name="gender" value="male"></input>
              <label htmlFor="male">Male</label>
            </div>
            <div className='female'>
              <input type="radio" id="female" name="gender" value="female"></input>
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div className='wrapper'>
            <input type="number" placeholder='Age (15-80)' min="15" max="80" required
              onChange={(e) => setAge(e.target.value)}></input>
            <p>years</p>
          </div>
          <div className='wrapper'>
            <input type="number" placeholder='Enter height' min="150" max="200" required
              onChange={(e) => setHeight(e.target.value)}></input>
            <p>cm</p>
          </div>
          <div className='wrapper'>
            <input type="number" placeholder='Enter weight' required
              onChange={(e) => setWeight(e.target.value)}></input>
            <p>kg</p>
          </div>

          <div className='activity'>
            <label htmlFor="activity">Activity level</label>
            <select id="activity" required>
              <option value="1.2">Little: little or no exercise</option>
              <option value="1.375">Light: exercise 1-3 times/week</option>
              <option value="1.55" selected>Moderate: exercise 3-5 times/week</option>
              <option value="1.55">Active: daily exercise or intense exercise 3-4 times/week</option>
              <option value="1.725">Very active: intense exercise 6-7 times/week</option>
              <option value="1.9">Extra active: intense exercise daily or physical job</option>
            </select>
          </div>
          <button type="submit" onSubmit={calculate}>Calculate</button>
        </form>
      </div>

      <div className='calculations'>
        <p id="loss"></p>
        <p id="maintenance"></p>
        <p id="gain"></p>
      </div>

      <div className='info'>
        <i id="info" className='hidden'>These calculations are made by your basal metabolic rate (BMR),
          the amount of energy that your body needs to function if it were to rest for 24 hours, and the
          Harris-Benedict equation.</i>
      </div>
    </div>
  );
}

export default App;
