import * as React from "react";
import * as Components from "./styles";
import { dataSolarSystem } from "../../../constants";

import Background from "../../../assets/images/background.jpg";
import { PlanetItem } from "../../../components/planetItem";

function SolarSystem({ navigation }) {

	const [solarSystemData, setSolarSystemData] = React.useState([]);

	const handleClickPlanet = (name) => {
		navigation.navigate(name);
	};


	React.useEffect(() => {
		setSolarSystemData(dataSolarSystem);
	});

	return (
		<Components.Container>
			<Components.Content>
				<Components.BackgroundContainer>
					<Components.BackgroundImage source={Background} />
				</Components.BackgroundContainer>

				<Components.PlanetLists
					data={solarSystemData}
					keyExtractor={(_, index) => String(index)}
					renderItem={({ item }) => (
						<Components.PlanetItemContainer onPress={() => handleClickPlanet(item.nameId)}>
							<PlanetItem uri={item.img} name={item.name} force={item.force} />
						</Components.PlanetItemContainer>
					)}
				></Components.PlanetLists>
			</Components.Content>
		</Components.Container>
	);
}

export default SolarSystem;
