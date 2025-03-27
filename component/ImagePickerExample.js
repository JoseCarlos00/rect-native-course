import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

import { useState } from 'react';
import { StyleSheet, View, Button, Image, TouchableOpacity, Platform } from 'react-native';

export default function ImagePickerExample() {
	const [image, setImage] = useState({ uri: null });

	const openShareDialog = async () => {
		const isSharing = await Sharing.isAvailableAsync();

		console.log({ isSharing });

		if (!isSharing) {
			alert('Sharing is not available on this platform.');
			return;
		}

		Sharing.shareAsync(image.uri, { dialogTitle: 'Share image' });
	};

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
			aspect: [4, 3],
			quality: 1,
		});

		if (result.canceled) {
			return;
		}

		if (Platform.OS === 'web') {
			return;
		}

		setImage({ uri: result.assets[0].uri, width: result.assets[0].width, height: result.assets[0].height });
	};

	return (
		<View style={styles.container}>
			<Button
				title={image.uri ? 'Compartir' : 'Open Image'}
				onPress={image.uri ? openShareDialog : pickImage}
			/>

			<TouchableOpacity onPress={pickImage}>
				{image.uri && (
					<Image
						source={{ uri: image.uri }}
						style={styles.image}
					/>
				)}
			</TouchableOpacity>
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
		marginTop: 20,
		width: 200,
		height: 200,
	},
});
