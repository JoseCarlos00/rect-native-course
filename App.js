import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AlertComponent from './component/Alert';

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hello word!</Text>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1f1f1f',
		color: '#9cdcfe',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#9cdcfe',
		fontSize: 20,
	},
});
