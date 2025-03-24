import React from 'react';
import { StyleSheet, Button, Alert } from 'react-native';

const AlertComponent = () => {
	const createTwoButtonAlert = () =>
		Alert.alert('Alert Title', 'My Alert Msg', [
			{
				text: 'Cancel',
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{ text: 'OK', onPress: () => console.log('OK Pressed') },
		]);

	const createThreeButtonAlert = () =>
		Alert.alert('Alert Title', 'My Alert Msg', [
			{
				text: 'Ask me later',
				onPress: () => console.log('Ask me later pressed'),
			},
			{
				text: 'Cancel',
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{ text: 'OK', onPress: () => console.log('OK Pressed') },
		]);

	return (
		<>
			<Button
				title={'2-Button Alert'}
				onPress={createTwoButtonAlert}
			/>
			<Button
				title={'3-Button Alert'}
				onPress={createThreeButtonAlert}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
	},
});

export default AlertComponent;
