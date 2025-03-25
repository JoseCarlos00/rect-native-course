import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';

export default function ImagePickerExample() {
	const [image, setImage] = useState({});

	const pickImage = async () => {
		const permissions = await ImagePicker.requestMediaLibraryPermissionsAsync();

		console.log({ permissions });
		if (!permissions.granted) {
			alert('Permission to access camera roll is required for this feature.');
			return;
		}

		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ['images', 'videos'],
			allowsEditing: true,
			// aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (result.canceled) {
			return;
		}

		setImage({ uri: result.assets[0].uri, width: result.assets[0].width, height: result.assets[0].height });
	};

	return (
		<View style={styles.container}>
			<Button
				title='Open Image'
				onPress={pickImage}
			/>
			{image.uri && (
				<Image
					source={{ uri: image.uri }}
					style={image}
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
