// Libs
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Pages
import { icons, pagesData } from "../constants/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Pages
import Home from "./screens/Home/index";
import SolarSystem from "./screens/SolarSystem";
import Videos from "./screens/Videos";
import TabBarButton from "../components/tarBarButton";
import AboutUs from "./screens/About/index";
import Page from "../components/page";

// Navigation types
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack({ setTitle }) {
	return (
		<Tab.Navigator
			screenOptions={({ route, navigation }) => ({
				
				tabBarIcon: ({ color, size }) =>
					icons[route.name] ? icons[route.name](color, size) : null,
				tabBarButton: (props) => (
					<TabBarButton
						{...props}
						navigation={navigation}
						route={route}
						setTitle={setTitle}
					/>
				),
				title: route.name,
			})}
		>
			<Tab.Screen name="Astrolab" component={Home} />
			<Tab.Screen name="Sistema Solar">
				{(props) => <SolarSystem {...props} setTitle={setTitle} />}
			</Tab.Screen>
			<Tab.Screen name="Videos" component={Videos} />
			<Tab.Screen
				name="Sobre nós"
				component={AboutUs}
				options={{ title: "Sobre nós" }}
			/>
		</Tab.Navigator>
	);
}

function Routes() {
	const [title, setTitle] = React.useState("Astrolab");
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ title, headerLeft: null }}>
				<Stack.Screen name="Home">
					{(props) => <HomeStack setTitle={setTitle} />}
				</Stack.Screen>

				{pagesData.map((page, index) => (
					<Stack.Screen name={page.screenname} key={String(index)}>
						{() => (
							<Page
								screenname={page.screenname}
								description={page.description}
								images={page.images}
								moons={page.moons}
								setTitle={setTitle}
							/>
						)}
					</Stack.Screen>
				))}

				{/*
				<Stack.Screen name="Mercurio">
					{(props) => <Mercurio {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Venus">
					{(props) => <Venus {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Terra">
					{(props) => <Terra {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Marte">
					{(props) => <Marte {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Jupiter">
					{(props) => <Jupiter {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Saturno">
					{(props) => <Saturno {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Urano">
					{(props) => <Urano {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Netuno">
					{(props) => <Netuno {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Calisto">
					{(props) => <Calisto {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Deimos">
					{(props) => <Deimos {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Encelado">
					{(props) => <Encelado {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Europa">
					{(props) => <Europa {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Fobos">
					{(props) => <Fobos {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Larissa">
					{(props) => <Larissa {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Lua">
					{(props) => <Lua {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Nereida">
					{(props) => <Nereida {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Tita">
					{(props) => <Tita {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Titania">
					{(props) => <Titania {...props} setTitle={setTitle} />}
				</Stack.Screen>

				<Stack.Screen name="Umbriel">
					{(props) => <Umbriel {...props} setTitle={setTitle} />}
				</Stack.Screen> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Routes;
