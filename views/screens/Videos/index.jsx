import * as React from "react";
import * as Components from "./styles";
import { videosData } from "../../../constants";
import VideoItem from "../../../components/videoItem";
import Background from "../../../assets/images/background.jpg";

function Videos() {
	const renderItem = ({ item }) => <VideoItem uri={item.url} />;
	const keyExtractor = (_, index) => String(index);

	return (
		<Components.Container>
			
			<Components.Content>
				<Components.VideoList
					data={videosData}
					keyExtractor={keyExtractor}
					renderItem={renderItem}
				/>
			</Components.Content>

			<Components.BackgroundContainer>
				<Components.backgroundImage source={Background} resizeMode="contain" />
			</Components.BackgroundContainer>
		</Components.Container>
	);
}

export default Videos;
