import React from 'react';
import GoogleLogin from 'react-google-login';

class Login extends React.Component {
	render() {
		return (
			<GoogleLogin
				clientId="261102715139-9h7mjot4o007ramf9v6qhu1jevekui6m.apps.googleusercontent.com"
				buttonText="Login"
				onSuccess={this.props.success}
				onFailure={this.props.fail}
				cookiePolicy={'single_host_origin'}
			/>
		);
	}
}

export default Login;
