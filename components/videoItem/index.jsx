import * as React from "react";
import * as Components from "./styles";

function VideoItem({ uri }) {
	const videoRef = React.useRef(null);

	return (
		<Components.Container>
			<Components.Content>
				<Components.VideoContainer>
					<Components.VideoItem
						resizeMode="contain"
						useRef={videoRef}
						source={{ uri: uri }}
					/>
				</Components.VideoContainer>
			</Components.Content>
		</Components.Container>
	);
}

export default VideoItem;
