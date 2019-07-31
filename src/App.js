import React from 'react';
import './App.css';
import Login from './components/Login.js';
import { GoogleLogout } from 'react-google-login';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			authenticated: false,
			token: localStorage.getItem("token") || ""
		}
	}
	componentWillMount = () => {
		if(this.state.token)
			this.setState({authenticated: true});
		else
			this.setState({authenticated: false});
	}
	loginSuccess = (res) => {
		console.log("Logged In:" , res);
		this.setState({token: res.googleId, authenticated: true});
		localStorage.setItem("token", res.googleId);
	}
	loginFailure = (res) => {
		console.log("Failed to login: ", res);
		this.setState({token: "", authenticated: false});
		localStorage.setItem("token", "");
	}
	logout = () => {
		this.setState({authenticated: false, token: ""});
		localStorage.setItem("token", "");
	}
	render() {
		var login = <GoogleLogout
						clientId={this.state.token}
						buttonText="Logout"
						onLogoutSuccess={this.logout}>
					</GoogleLogout>;

		if(!this.state.authenticated) {
			login = <Login token={this.state.token} success={this.loginSuccess} fail={this.loginFailure}/>
		}

		return (
			<div className="App">
				<header className="App-header">
					<h1>Bustle</h1>
					{login}
				</header>
				<p>Authenticated: {this.state.authenticated ? "true" : "false"}</p>
				<p>{this.state.token}</p>
			</div>
		);
	}
}

export default App;
