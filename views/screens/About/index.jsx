import * as React from "react";

import * as Components from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { Alert, Linking, TouchableOpacity, View } from "react-native";

import Background from "../../../assets/images/background.jpg";
import LogoPET from "../../../assets/images/LogoPET.webp";
import LogoFNDE from "../../../assets/images/LogoFNDE.webp";
import LogoIFC from "../../../assets/images/LogoIFC.webp";

const icons = [
	{
		title: "Instagram",
		Icon: () => <FontAwesome name="instagram" color="red" size={24} />,
		link: "https://www.instagram.com/pet.ifc/",
	},
	{
		title: "Facebook",
		Icon: () => <FontAwesome name="facebook" color="blue" size={24} />,
		link: "https://www.facebook.com/petifccam",
	},
	{
		title: "Site",
		Icon: () => <FontAwesome name="desktop" color="green" size={24} />,
		link: "https://www.pet.ifc-camboriu.edu.br",
	},
	{
		title: "Youtube",
		Icon: () => <FontAwesome name="youtube" color="red" size={24} />,
		link: "https://www.youtube.com/c/PETIFCCamboriú",
	},
];
const logos = [LogoFNDE, LogoIFC, LogoPET];

function About() {
	const handleClickLink = async (link) => await Linking.openURL(link);

	return (
		<View>
			<Components.BackgroundContainer>
				<Components.Image source={Background} />
			</Components.BackgroundContainer>

			<Components.Content>
				<Components.LogoContainer>
                    {logos.map((logo, index) => (
                        <Components.LogoImage key={index} resizeMode="contain" source={logo} />
                    ))}
                </Components.LogoContainer>

				<Components.Title>MATHEUS ESCREVE O TITULO</Components.Title>

				{icons.map((icon, index) => (
					<Components.LinksContent
						key={String(index)}
						onPress={() => handleClickLink(icon.link)}
					>
						<Components.Icon children={icon.Icon()} />
						<Components.LinkText>{icon.title}</Components.LinkText>
					</Components.LinksContent>
				))}
			</Components.Content>
		</View>
	);
}

export default About;
