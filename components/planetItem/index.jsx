import * as React from "react";
import * as Components from "./styles";

import { Animated, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

function PlanetItem({ force, name, uri }) {
    const animatedForceValue = React.useRef(new Animated.Value(10)).current;
    
    const animation = () => {
        Animated.timing(animatedForceValue, {
            toValue: windowWidth - 200,
            duration: 1000 * force,
            useNativeDriver: true
        }).start();

        setTimeout(() => {
            Animated.timing(animatedForceValue, {
                toValue: 0,
                duration: 1000 * force,
                useNativeDriver: true,
            }).start()

            setTimeout(() => animation(), 1300 * force);

        }, 1000 * force);
    };

    React.useEffect(() => animation(), [])


    return <Components.Container>
        <Components.PlanetItem>
            <Components.Planet style={{ transform: [{ translateX: animatedForceValue }] }}>
                <Components.PlanetImage source={{ uri: uri }} />
                <Components.PlanetTitle>{name}</Components.PlanetTitle>
            </Components.Planet>
        </Components.PlanetItem>
    </Components.Container>
};

export { PlanetItem };