import './App.css';
import React, { useState } from 'react';

let bmr = 0;
let calories = 0;
let loss = 0;
let gain = 0;
function App() {
  const [calculated, setCalculated] = useState(false);
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [activity, setActivity] = useState("");



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
    setCalculated(!calculated);
    bmrCount(bmr);
    calories = (bmr * 1.375).toFixed(0);

    const diff = 200;
    loss = (parseInt(calories) - parseInt(diff));
    gain = (parseInt(calories) + parseInt(diff));

    const maintenance = document.querySelector("#maintenance");
    maintenance.textContent = `Maintenance calorie intake: ${calories}`;
    const weightloss = document.querySelector("#loss");
    weightloss.textContent = `Weight loss calorie intake: ${loss}`;
    const weightgain = document.querySelector("#gain");
    weightgain.textContent = `Weight gain calorie intake: ${gain}`;
  }

  return (
    <div className="App">
      <h1>Calorie calculator</h1>

      <div className='inputs'>
        <form>
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
          <input type="number" placeholder='Age (15-80)' min="15" max="80" required
            onChange={(e) => setAge(e.target.value)}></input>
          <input type="number" placeholder='Enter height in cm' min="150" required
            onChange={(e) => setHeight(e.target.value)}></input>
          <input type="number" placeholder='Enter weight in kg' required
            onChange={(e) => setWeight(e.target.value)}></input>

          <label htmlFor="activity">Activity level</label>
          <select id="activity" required>
            <option value="little">Little: little or no exercise</option>
            <option value="light">Light: exercise 1-3 times/week</option>
            <option value="moderate" selected>Moderate: exercise 4-5 times/week</option>
            <option value="active">Active: daily exercise or intense exercise 3-4 times/week</option>
            <option value="very-active">Very active: intense exercise 6-7 times/week</option>
            <option value="extra-active">Extra active: intense exercise daily or physical job</option>
          </select>
          <button onClick={calculate}>Calculate</button>
        </form>
      </div>

      <div className={calculated ? 'calculations' : 'hidden'}>
        <p id="maintenance">Maintenance calorie intake: {calories}</p>
        <p id="loss">Weight loss calorie intake: {loss}</p>
        <p id="gain">Weight gain calorie intake: {gain}</p>
      </div>
    </div>
  );
}

export default App;
