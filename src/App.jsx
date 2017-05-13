import React, {Component} from 'react';
import Clock from './Clock';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';

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
		<Form inLine>
			<FormControl
				className='Deadline-input'
				placeholder='new date'
				onChange={event => this.setState({newDeadline: event.target.value})}
			/>

			<Button onClick={() => this.changeDeadline()}>
				Calculate
			</Button>
		</Form>
		</div>
		)
	}
}

export default App;