import * as React from "react";
import * as Components from "./styles";
import Background from "../../../assets/images/background.jpg";
import Rocket from "../../../assets/images/Foguete.png";
import Aninha from "../../../assets/images/Astronauta_Aninha.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

function Home() {
	const handleThanksUserClick = () => Alert.alert("Obrigado e volte sempre!");
	const handleSugestionUserClick = () =>
		Alert.alert(
			"Então que tal experimentar algumas de nossas funcionalidades?"
		);
	const handleWelcomeMessageClick = async () => {
		console.log("oie")
		await AsyncStorage.setItem("@app-state", 'already-open');

		Alert.alert(
			"Bem vindo(a)!",
			"Já usufrui de todos os nossos recursos?",
			[
				{ onPress: handleSugestionUserClick, text: "Ainda não" },
				{ onPress: handleThanksUserClick, text: "Sim" },
			]
		);
	};

	React.useEffect(() => {
		(async () => {
			try {
				const appState = await AsyncStorage.getItem("@app-state");
				if (appState === null) handleWelcomeMessageClick();
			} catch (err) {
				console.log(err)
			}
			
		})();
	}, []);

	return (
		<Components.Container>
			<Components.Content>
				<Components.BackgroundContainer>
					<Components.Image source={Background} />
				</Components.BackgroundContainer>

				<Components.HomeImageContainer>
					<Components.RocketImage source={Rocket} />
					<Components.AnaImage source={Aninha} />
				</Components.HomeImageContainer>
			</Components.Content>
		</Components.Container>
	);
}

export default Home;
