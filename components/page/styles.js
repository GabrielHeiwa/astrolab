import { Animated } from "react-native";
import {
	GestureHandlerRootView,
	PinchGestureHandler,
} from "react-native-gesture-handler";
import styled from "styled-components/native";


export const Container = styled.ScrollView`
	width: 100%;
	height: 100%;
	background-color: #fff;
`;

export const Background = styled(Animated.Image)`
    width: 100%;
    height: 100%;
    z-index: 1;
    position: absolute;
`

export const BackgroundImage = styled.Image`
	width: 100%;
	height: 100%;
	z-index: 1;
	position: absolute;
`;

export const Content = styled.View`
    z-index: 2;
`;

export const HeaderScrollView = styled.ScrollView`
	height: 300px;
	width: 100%;
	background-color: black;
	margin: 8px 4px;
	padding: 10px 0px;
	border-radius: 4px;
`;

export const Header = styled.View`
	width: auto;
	height: auto;
	padding: 10px 0px;
	background-color: black;
`;

export const Description = styled.Text`
	padding: 7px 15px;
	color: #fff;
	font-size: 18px;
	font-weight: 700;
`;

export const ListImages = styled.FlatList`
	width: auto;
	height: auto;
`;

export const ImageContainer = styled.TouchableOpacity`
	width: auto;
	height: auto;
	justify-content: center;
	align-items: center;
`;

export const Image = styled.Image.attrs(({ resizeMode }) => {
	resizeMode;
})`
	width: 150px;
	height: 150px;
	margin: 10px;
`;

export const ImageTitle = styled.Text`
	margin: 10px;
	font-weight: bold;
	font-size: 24px;
	color: #fff;
`;

export const Modal = styled.View`
	width: 100%;
	height: 100%;

	position: absolute;
	background-color: #333;
`;

export const ModalCloseButtonModal = styled.TouchableOpacity.attrs(
	({ children }) => {
		children;
	}
)`
	width: 100%;
	height: 50px;
	align-items: flex-end;
	justify-content: center;
	padding: 15px;
`;

export const ModalContent = styled.View`
    width: 100%;
    height: 100%;

	position: absolute;
	z-index: 2;
`;

export const ModalGestureHandlerRootView = styled(GestureHandlerRootView)`
	width: 100%;
	height: 100%;
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const ModalPinchGestureHandler = styled(PinchGestureHandler)``;

export const ModalImage = styled(Animated.Image)`
	width: 300px;
	height: 300px;
`;
