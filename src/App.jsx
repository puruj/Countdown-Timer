import React, {Component} from 'react';
import './App.css';

class App extends Component{
	render(){
		return(
		<div className='App'>
		<div className='App-titl className=""e'>Countdown to October 11, 2017</div>
		<div>
			<div className="Clock-days">14 Days</div>
			<div className="Clock-hours">13 Hours</div>
			<div className="Clock-minutes">34 Minutes</div>
			<div className="Clock-seconds">45 Seconds</div>
		</div>
		<div>
			<input placeholder='new date'/>
			<button>Calculate</button>
		</div>
		</div>
		)
	}
}

export default App;