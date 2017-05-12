import React, {Component} from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component{
	//setting up states
	constructor(props){
		super(props);
		this.state ={
			deadline: 'October 11, 2017',
			newDeadline:''
		}
	}

	//updates deadline 
	changeDeadline(){
		this.setState({deadline: this.state.newDeadline});
	}


	render(){
		return(
		<div className='App'>
		<div className="App-title">
		Countdown to {this.state.deadline}
		</div>
		<Clock 
		deadline={this.state.deadline}
		/>
		<div>
			<input 
			placeholder='new date'
			onChange={event => this.setState({newDeadline: event.target.value})}
			/>

			<button onClick={() => this.changeDeadline()}>
				Calculate
			</button>
		</div>
		</div>
		)
	}
}

export default App;