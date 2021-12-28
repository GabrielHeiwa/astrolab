import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	Image,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import Background from "../../assets/images/background.jpg";

export default function Orbita({ navigation }) {
	const [userData] = useState();

	return (
		<View style={styles.container}>
			<View style={{ position: "absolute" }}>
				<Image source={Background} />
			</View>

			<SwipeListView
				data={userData}
				keyExtractor={(item, index) => index.toString()}
				renderItem={(data, rowMap) => (
					<TouchableWithoutFeedback
						onPress={() => navigation.navigate(data.item.nameId)}
					>
						<View
							style={{
								borderColor: "#fff",
								borderWidth: 1,
								paddingVertical: 10,
								paddingHorizontal: 10,
								marginVertical: 4,
								borderRadius: 8,
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							<Image
								style={{
									width: 90,
									height: 90,
								}}
								source={{ uri: data.item.img }}
							/>
							<Text
								style={{
									marginLeft: 10,
									fontWeight: "700",
									fontSize: 18,
									color: "#fff",
								}}
							>
								{data.item.name}
							</Text>
						</View>
					</TouchableWithoutFeedback>
				)}
				leftOpenValue={75}
				rightOpenValue={-75}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: "red",
		paddingHorizontal: 10,
	},
});
