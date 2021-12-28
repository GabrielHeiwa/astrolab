import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	background-color: #F0FFFF;
`;

export const Content = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #F0FFFF;
`;

export const BackgroundContainer = styled.View`
    z-index: 1;
    position: absolute;
`;

export const HomeImageContainer = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
`;

export const RocketImage = styled.Image`
    width: 500px;
    height: 500px;
    top: 125px;
    left: 80px;
`;

export const AnaImage = styled.Image`
    width: 250px;
    height: 250px;
    top: -133px;
    left: -110px;
`;

export const Image = styled.Image``;

