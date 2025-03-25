import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';
import ImagePickerExample from './component/ImagePickerExample';

export default function App() {
	const handleOnPress = () => {
		Alert.alert('Users', 'This is an alert message');
	};

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hello word</Text>

			<Image
				source={{ uri: 'https://picsum.photos/200/300' }}
				style={styles.image}
			/>

			<TouchableOpacity
				style={styles.button}
				onPress={handleOnPress}
			>
				<Text style={styles.text}>Click me</Text>
			</TouchableOpacity>

			<ImagePickerExample />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0d1117',
		color: '#f0f6fc',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#f0f6fc',
		fontSize: 20,
	},
	image: {
		width: 200,
		height: 200,
	},
	batmanLogo: {
		width: 200,
		height: 100,
		marginTop: 50,
	},
	button: {
		backgroundColor: '#238636',
		padding: 10,
		borderRadius: 10,
		marginTop: 20,
		width: 200,
		height: 50,
		color: '#f0f6fc',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const calculate = StyleSheet.create({
	resultimc: {
		marginTop: 50,
		// background: url('/sites/all/statics/salud/imc/barraimc.png')no-repeat,
		width: 534,
		height: 101,
		margin: 'auto',
		textAlign: 'left',
	},
	resultimcImg: {
		marginTop: -3,
		marginLeft: 0,
	},
});
