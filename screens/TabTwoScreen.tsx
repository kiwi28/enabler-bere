import { Button, Image, Platform, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
// TODO: needs typing
export default function TabTwoScreen({ navigation }: any) {
	const chance = Math.random();
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Platform: {Platform.OS}</Text>
			<Button title="Go BACK" onPress={() => navigation.goBack()} />
			<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
			<Text>Sometimes u get kiwi, sometimes u get cat</Text>
			<Text>this time u got: {chance < 0.5 ? "cat" : "kiwi"}</Text>

			{chance < 0.5 ? (
				<Image
					style={styles.imageCat}
					source={{ uri: "https://cataas.com/cat" }}
				/>
			) : (
				<Image
					style={styles.imageCat}
					source={require("../assets/images/kiwi.jpg")}
				/>
			)}
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
	imageCat: {
		width: 300,
		height: 300,
	},
});
