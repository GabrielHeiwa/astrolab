import * as React from "react";

import { icons } from "../../constants/index";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../views/screens/Home/index";
import SolarSystem from "../../views/screens/SolarSystem";
import Videos from "../../views/screens/Videos";
import TabBarButton from "../tarBarButton";
import AboutUs from "../../views/screens/About";

const Tab = createBottomTabNavigator();

function PageStack({ screenname, Screen, setTitle }) {
	return (
		<Tab.Navigator
			screenOptions={({ route, navigation }) => ({
				tabBarIcon: ({ color, size }) => 
					icons[route.name] ? icons[route.name](color, size) : <></>
				,
				tabBarButton: (props) => (
					<TabBarButton
						{...props}
						navigation={navigation}
						route={route}
						setTitle={setTitle}
					/>
				
				),
			})}
		>
			<Tab.Screen
				options={{ tabBarButton: () => <></> }}
				name={screenname}
				component={Screen}
			/>
			<Tab.Screen name="Astrolab" component={Home} />
			<Tab.Screen name="Sistema Solar" component={SolarSystem} />
			<Tab.Screen name="Videos" component={Videos} />
			<Tab.Screen name="Sobre nós" component={AboutUs} />
		</Tab.Navigator>
	);
}

export { PageStack };
