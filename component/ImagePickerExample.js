import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function ImagePickerExample() {
	const [image, setImage] = useState('');

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ['images', 'videos'],
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	return (
		<View style={styles.container}>
			<Button
				title='Pick an image from camera roll'
				onPress={pickImage}
			/>
			{image && (
				<Image
					source={{ uri: image }}
					style={styles.image}
				/>
			)}
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
});
