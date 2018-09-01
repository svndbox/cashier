import React from 'react';
import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';
import PlaidAuthenticator from 'react-native-plaid-link'

export default class HomeScreen extends React.Component {
	onMessage = (data) => {
		this.setState({data})
	}
	render() {
		return <PlaidAuthenticator
			onMessage={this.onMessage}
			publicKey="a29ea56e57913cfcc818011b31c617"
			env="sandbox"
			product="auth,transactions"
			clientName="Ryan"
		/>
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	}

});
