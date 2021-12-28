import styled from "styled-components/native";
import { Video } from "expo-av";

export const Container = styled.View`
	width: auto;
	height: auto;
	margin: 15px 5px;
`;

export const Content = styled.View``;

export const VideoContainer = styled.View``;

export const VideoItem = styled(Video)`
	width: 100%;
	height: 225px;
`;
