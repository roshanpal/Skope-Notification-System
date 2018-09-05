import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

	state = {
		title: '',
		message: ''
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit() {
		let { title, message } = this.state;
		
		if (title && message) {
			axios.post('/api/notification', { title, message })
				.then(res => { alert("Success"); this.setState({ title: '', message: '' }); })
				.catch(ex => { alert("Something went wrong. Check console for the stack trace."); console.log(ex); });
		} else {
			alert("Please enter title and message");
		}
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Notification System</h1>
				</header>
				<div className="container" style={{ maxWidth: 500, marginTop: 100 }}>
					<div className="row">
						<form role="form" id="contact-form" className="contact-form">
							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<input onChange={ (e) => this.onChange(e) } value={this.state.title} type="text" className="form-control" name="title" autocomplete="off" id="Name" placeholder="Title" />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<textarea onChange={ (e) => this.onChange(e) } value={this.state.message} className="form-control textarea" rows="3" name="message" id="Message" placeholder="Message"></textarea>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<button type="button" onClick={ () => this.onSubmit() } className="btn main-btn btn-success pull-right">Send Notification</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
