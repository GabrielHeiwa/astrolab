import styled from "styled-components/native";

export const Container = styled.View`
	width: 100%;
	height: 100%;
`;

export const Content = styled.View``;

export const BackgroundContainer = styled.View`
    position: absolute;
    z-index: 1;
`;

export const BackgroundImage = styled.Image``;

export const PlanetLists = styled.FlatList`
    z-index: 2;
    width: 100%;
    height: auto;
`;

export const PlanetItemContainer = styled.TouchableOpacity`
    width: 100%;
    height: auto;
`;

export const PlanetItem = styled.View`
    width: auto;
    height: 90px;
    /* border-radius: 8px;
    border-width: 2px;
    border-color: #fff; */
    margin: 8px 8px;
    flex-direction: row;
    align-items: center;
`;

export const PlanetImage = styled.Image`
    width: 90px;
    height: 90px;
`;

export const PlanetTitle = styled.Text`
    color: #fff;
    font-size: 24px;
    font-weight: bold;
`;
