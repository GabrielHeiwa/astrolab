// Libs
import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContext } from "@react-navigation/core";

// Data and assets
import { icons } from "../../constants/index";
import Background from "../../assets/images/background.jpg";

// Pages and libs for PageStack Component
import AboutUs from "../../views/screens/About";
import Home from "../../views/screens/Home";
import SolarSystem from "../../views/screens/SolarSystem";
import Videos from "../../views/screens/Videos";

// Components
import * as Components from "./styles";
import TabBarButton from "../tarBarButton";
import { Animated, View } from "react-native";


function Page({ description, images, moons, setTitle, screenname }) {
	const [visible, setVisible] = React.useState(false);
	const [image, setImage] = React.useState({});

	const [indexImage, setIndexImage] = React.useState(0);

	const navigation = React.useContext(NavigationContext);

	const animatedScale = React.useRef(new Animated.Value(1)).current;

	const handleClickModalOpen = (index) => {
		console.log(index);
		setIndexImage(index);
		// setVisible(true);
		// setImage(image);
		// setVisible(true);
	};
	const handleGestureEvent = Animated.event(
		[{ nativeEvent: { scale: animatedScale } }],
		{ useNativeDriver: true }
	);
	const parseTextDescription = (text, index) => {
		const data = text.substring(text.search(":") + 2, text.length);
		const propriety = text.substring(0, text.search(":"));
		return <View key={index}>
			<Components.Description style={{ color: "lightblue" }}>
				{propriety}
			</Components.Description>
			<Components.Description>
				{data}
			</Components.Description>
		</View>

	};
	const handleClickPlanet = (label) => {
		navigation.navigate(label);
	};

	React.useEffect(() => {
		setTitle(screenname);
		navigation.addListener('beforeRemove', e => e.preventDefault());
	}, [])


	if (visible) {
		return (
			<Components.Modal>
					<Components.BackgroundImage source={Background} />
				<Components.ModalContent>

					<Components.ModalCloseButtonModal
						children={icons.Close("white", 32)}
						onPress={() => setVisible(false)}
					/>
					<Components.ModalGestureHandlerRootView>
						<Components.ModalPinchGestureHandler
							onGestureEvent={handleGestureEvent}
						>
							<Components.ModalImage
								style={{
									transform: [{ scale: animatedScale }],
								}}
								source={
									typeof image === "string"
										? { uri: image }
										: image
								}
							/>
						</Components.ModalPinchGestureHandler>
					</Components.ModalGestureHandlerRootView>
				</Components.ModalContent>
			</Components.Modal>
		);
	}

	return (
		<Components.Container contentContainerStyle={{ flexGrow: 1 }}>
			<Components.Background source={Background} />
			<Components.Content>
				<Components.HeaderScrollView vertical>
					<Components.Header>
						{description.map((desc, index) => parseTextDescription(desc, index))}
					</Components.Header>
				</Components.HeaderScrollView>

				<Components.ListImages
					data={images}
					horizontal
					showsHorizontalScrollIndicator={false}
					keyExtractor={(_, index) => String(index)}
					renderItem={({ item, index }) =>{
						(
						<Components.ImageContainer
							onPress={() => handleClickModalOpen(index)}
						>
							<Components.Image source={item.img} />
						</Components.ImageContainer>
					)}}
				/>

				{moons.length > 0 && <View>
					<Components.Header>
						<Components.Description>{moons.length == 1 ? "Satélite natural" : "Satélites naturais"}</Components.Description>
					</Components.Header>

					<Components.ListImages
						data={moons}
						horizontal
						showsHorizontalScrollIndicator={false}
						keyExtractor={(_, index) => String(index)}
						renderItem={({ item }) => (
							<Components.ImageContainer
								onPress={() => handleClickPlanet(item.label)}
							>
								<Components.Image source={typeof (item.img) === String ? item.img : { uri: item.img }} />
								<Components.ImageTitle numberOfLines={1}>
									{item.label}
								</Components.ImageTitle>
							</Components.ImageContainer>
						)}
					/>
				</View>
				}
			</Components.Content>
		</Components.Container>
	);
}

const Tab = createBottomTabNavigator();
function PageStack({ children, screenname, setTitle }) {
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
			})}
		>
			<Tab.Screen
				name={screenname}
				options={{ tabBarButton: () => <></> }}
			>
				{(props) => children}
			</Tab.Screen>
			<Tab.Screen name="Astrolab" component={Home} />
			<Tab.Screen name="Sistema Solar" component={SolarSystem} />
			<Tab.Screen name="Videos" component={Videos} />
			<Tab.Screen name="Sobre nós" component={AboutUs} />
		</Tab.Navigator>
	);
}

export default function ({ screenname, description, images, moons, setTitle }) {
	return (
		<PageStack screenname={screenname} setTitle={setTitle}>
			<Page
				title={screenname}
				description={description}
				images={images}
				moons={moons}
				setTitle={setTitle} />
		</PageStack>
	);
}
