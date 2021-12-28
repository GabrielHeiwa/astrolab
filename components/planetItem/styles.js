import { Animated } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View``;

export const PlanetItem = styled.View`
    width: auto;
    height: 90px;
    margin: 8px 8px;
    flex-direction: row;
    align-items: center;
`; 

export const Planet = styled(Animated.View)`
    width: 200px;
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