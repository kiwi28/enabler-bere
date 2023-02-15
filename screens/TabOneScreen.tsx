import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Image, Platform, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
	navigation,
}: RootTabScreenProps<"TabOne">) {
	const [imgUrl, setImgUrl] = useState<string>("");

	useEffect(() => {
		axios("https://dog.ceo/api/breeds/image/random")
			.then((res) => {
				console.log(res.data.message);
				setImgUrl(res.data.message);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setImgUrl;
				console.log("finally");
			});
	}, []);

	const handleGetNewDoggo = () => {
		console.log(Platform);
		axios("https://dog.ceo/api/breeds/image/random")
			.then((res) => {
				console.log(res.data.message);
				setImgUrl(res.data.message);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Tab One</Text>
			<Text>kiwi 123</Text>
			<Text>kiwi 123</Text>
			<Text>kiwi 123</Text>
			<Text>kiwi 123</Text>
			<Text>kiwi 123</Text>
			<Text>kiwi 123</Text>
			<Image
				style={styles.image}
				source={
					imgUrl ? { uri: imgUrl } : require("../assets/images/dog_shadow.jpg")
				}
			/>
			<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
			<Button title="Get new Doggo!" onPress={handleGetNewDoggo} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
	image: {
		width: 300,
		height: 300,
	},
});
