import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hello word</Text>

			<Image
				source={{ uri: 'https://picsum.photos/200/300' }}
				style={styles.image}
			/>

			<Button
				title='Click me'
				onPress={() => console.log('Button clicked')}
			/>
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
	image: {
		width: 200,
		height: 300,
	},
	batmanLogo: {
		width: 200,
		height: 100,
		marginTop: 50,
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
