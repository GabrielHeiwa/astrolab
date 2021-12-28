import * as React from "react";
import sol1 from "../assets/images/Sol_1.jpg";
import sol2 from "../assets/images/Sol_2.jpg";
import sol3 from "../assets/images/Sol_3.jpg";
import sol4 from "../assets/images/Sol_4.jpg";
import jupiter1 from "../assets/images/Jupiter_1.jpg";
import jupiter2 from "../assets/images/Jupiter_2.jpg";
import jupiter3 from "../assets/images/Jupiter_3.jpg";
import jupiter4 from "../assets/images/Jupiter_4.jpg";
import marte1 from "../assets/images/Marte_1.jpg";
import marte2 from "../assets/images/Marte_2.jpg";
import marte3 from "../assets/images/Marte_3.jpeg";
import marte4 from "../assets/images/Marte_4.jpg";
import terra1 from "../assets/images/Terra_1.jpg";
import terra2 from "../assets/images/Terra_2.jpg";
import terra3 from "../assets/images/Terra_3.jpg";
import terra4 from "../assets/images/Terra_4.jpg";
import urano1 from "../assets/images/Urano_1.jpg";
import urano2 from "../assets/images/Urano_2.jpg";
import urano3 from "../assets/images/Urano_3.jpg";
import urano4 from "../assets/images/Urano_4.jpg";
import venus1 from "../assets/images/Venus_1.jpg";
import venus2 from "../assets/images/Venus_2.jpg";
import venus3 from "../assets/images/Venus_3.jpg";
import venus4 from "../assets/images/Venus_4.jpg";
import saturno1 from "../assets/images/Saturno_1.jpg";
import saturno2 from "../assets/images/Saturno_2.jpg";
import saturno3 from "../assets/images/Saturno_3.jpeg";
import saturno4 from "../assets/images/Saturno_4.jpg";
import netuno1 from "../assets/images/Netuno_1.jpg";
import netuno2 from "../assets/images/Netuno_2.jpg";
import netuno3 from "../assets/images/Netuno_3.jpg";
import netuno4 from "../assets/images/Netuno_4.jpg";
import mercurio1 from "../assets/images/Mercurio_1.jpg";
import mercurio2 from "../assets/images/Mercurio_2.jpg";
import mercurio3 from "../assets/images/Mercurio_3.jpg";
import mercurio4 from "../assets/images/Mercurio_4.jpg";

import { FontAwesome, Ionicons } from "@expo/vector-icons";

export const dataSolarSystem = [
	{
		img: "https://uploaddeimagens.com.br/images/003/144/592/full/Sol.png?1616441155",
		name: "Sol",
		nameId: "Sol",
		force: 9.4
	},

	{
		img: "https://uploaddeimagens.com.br/images/003/144/600/full/Merc%C3%BArio.png?1616441262",
		name: "Mercúrio",
		nameId: "Mercurio",
		force: 3.6
	},

	{
		img: "https://uploaddeimagens.com.br/images/003/144/604/full/Venus.png?1616441335",
		name: "Vênus",
		nameId: "Venus",
		force: 4.3
	},

	{
		img: "https://uploaddeimagens.com.br/images/003/145/263/full/Terra.png?1616462109",
		name: "Terra",
		nameId: "Terra",
		force: 5.2
	},

	{
		img: "https://uploaddeimagens.com.br/images/003/145/267/full/Marte.png?1616462154",
		name: "Marte",
		nameId: "Marte",
		force: 6.8
	},

	{
		img: "https://uploaddeimagens.com.br/images/003/145/269/full/J%C3%BApiter.png?1616462187",
		name: "Júpiter",
		nameId: "Jupiter",
		force: 7.9
	},

	{
		img: "https://uploaddeimagens.com.br/images/003/145/273/full/Saturno.png?1616462458",
		name: "Saturno",
		nameId: "Saturno",
		force: 8.1
	},

	{
		img: "https://uploaddeimagens.com.br/images/003/145/275/full/Urano.png?1616462509",
		name: "Urano",
		nameId: "Urano",
		force: 9.9
	},

	{
		img: "https://uploaddeimagens.com.br/images/003/145/276/full/Netuno.png?1616462546",
		name: "Netuno",
		nameId: "Netuno",
		force: 10.2
	},
];

export const icons = {
	Astrolab: (color, size) => (
		<FontAwesome name="home" size={size} color={color} />
	),
	"Sistema Solar": (color, size) => (
		<Ionicons name="planet" size={size} color={color} />
	),
	Videos: (color, size) => (
		<FontAwesome name="video-camera" size={size} color={color} />
	),
	"Sobre nós": (color, size) => (
		<FontAwesome name="info" size={size} color={color} />
	),
	Close: (color, size) => (
		<FontAwesome name="close" size={size} color={color} />
	),
};

export const pagesData = [
	// Sol data
	{
		screenname: "Sol",
		description: [
			"Composição: Hidrogênio (aproximadamente 90%) e Hélio (9%).",
			"Tamanho: 109 vezes maior que a Terra.",
			"Localização: Via Láctea/ estrela central/ Distância da Terra: 149.600.000 km.",
			"Temperatura: 5504,85 ºC.",
		],
		images: [
			{
				img: sol1,
				label: "Sol 1",
			},

			{
				img: sol2,
				label: "Sol 2",
			},

			{
				img: sol3,
				label: "Sol 3",
			},

			{
				img: sol4,
				label: "Sol 4",
			},
		],
	},



	// Jupiter data
	{
		screenname: "Jupiter",
		description: [
			"Composição: por gases, como hidrogênio, hélio e metano.",
			"Tamanho: o maior do Sistema Solar, 11 vezes maior que a terra.",
			"Localização: 778.330.000 km do Sol.",
			"Temperatura: -100°C.",
			"Presença ou não de Satélites: Possui seis satélites naturais.",
		],
		images: [
			{
				img: jupiter1,
				label: "Júpiter 1",
			},

			{
				img: jupiter2,
				label: "Júpiter 2",
			},

			{
				img: jupiter3,
				label: "Júpiter 3",
			},

			{
				img: jupiter4,
				label: "Júpiter 4",
			},
		],
		moons: [{
			img: "https://uploaddeimagens.com.br/images/003/173/344/full/Europa.png?1617119970",
			label: "Europa",
		},
		{
			img: "https://uploaddeimagens.com.br/images/003/173/366/full/Calisto.png?1617120134",
			label: "Calisto",
		}],
	},
	// Jupiter moons
	// Europa
	{
		screenname: "Europa",
		description: [],
		images: [
			{
				img: "https://uploaddeimagens.com.br/images/003/173/344/full/Europa.png?1617119970",
				label: "Europa",
			},
		],
	},
	// Calisto
	{
		screenname: "Calisto",
		description: [],
		images: [
			{
				img: "https://uploaddeimagens.com.br/images/003/173/366/full/Calisto.png?1617120134",
				label: "Calisto",
			}
		]
	},



	// Marte data
	{
		screenname: "Marte",
		description: [
			"Composição: silicatos e basaltos e a atmosfera composta por gás carbônico, nitrogênio, monóxido de carbono e vestígios de oxigênio.",
			"Tamanho: maior que a metade do nosso planeta.",
			"Localização: 227.940.000 km de distância do Sol.",
			"Temperatura: entre -76°C e -10°C.",
			"Presença ou não de Satélites: Possui dois satélites naturais.",
		],
		images: [
			{
				img: marte1,
				label: "Marte 1",
			},

			{
				img: marte2,
				label: "Marte 2",
			},

			{
				img: marte3,
				label: "Marte 3",
			},

			{
				img: marte4,
				label: "Marte 4",
			},
		],
		moons: [],
	},
	// Marte moons



	// Mercurio data
	{
		screenname: "Mercurio",
		description: [
			"Composição: Basaltos e silicatos e a atmosfera por hidrogênio e hélio.",
			"Tamanho: Menor planeta.",
			"Localização: 57.910.000 km de distância do sol.",
			"Temperatura: 550 °C.",
			"Presença ou não de Satélites: Não possui satélites.",
		],
		images: [
			{
				img: mercurio1,
				label: "Mercúrio 1",
			},

			{
				img: mercurio2,
				label: "Mercúrio 2",
			},

			{
				img: mercurio3,
				label: "Mercúrio 3",
			},

			{
				img: mercurio4,
				label: "Mercúrio 4",
			},
		],
		moons: [],
	},
	// Mercurio moons



	// Netuno data
	{
		screenname: "Netuno",
		description: [
			"Composição: por gases, como hidrogênio, hélio e metano.",
			"Tamanho: 4 vezes maior que Terra.",
			"Localização: 4.504.300.000 km do Sol.",
			"Temperatura: -218°C.",
			"Presença ou não de Satélites: Possui cerca de 13 satélites naturais.",
		],
		images: [
			{
				img: netuno1,
				label: "Netuno 1",
			},

			{
				img: netuno2,
				label: "Netuno 2",
			},

			{
				img: netuno3,
				label: "Netuno 3",
			},

			{
				img: netuno4,
				label: "Netuno 4",
			},
		],
		moons: [{

			img: "https://uploaddeimagens.com.br/images/003/183/526/full/Nereida.png?1617715473",
			label: "Nereida"
		}, {
			img: "https://uploaddeimagens.com.br/images/003/183/531/full/Larissa.png?1617715520",
			label: "Larissa"
		}],
	},
	// Netuno moons
	// Nereida
	{
		screenname: "Nereida",
		description: [],
		images: [{

			img: "https://uploaddeimagens.com.br/images/003/183/526/full/Nereida.png?1617715473",
			label: "Nereida"
		}
		]
	},
	// Larissa
	{
		screenname: "Larissa",
		description: [],
		images: [{
			img: "https://uploaddeimagens.com.br/images/003/183/531/full/Larissa.png?1617715520",
			label: "Larissa"
		}]
	},



	// Saturno data
	{
		screenname: "Saturno",
		description: [
			"Composição: por gases como hidrogênio, hélio e metano.",
			"Tamanho: Segundo maior planeta um pouco menor do que Júpiter.",
			"Localização: 1.429.400.000 km do Sol.",
			"Temperatura: -140°C.",
			"Presença ou não de Satélites: Possui 18 satélites naturais.",
		],
		images: [
			{
				img: saturno1,
				label: "Saturno 1",
			},

			{
				img: saturno2,
				label: "Saturno 2",
			},

			{
				img: saturno3,
				label: "Saturno 3",
			},

			{
				img: saturno4,
				label: "Saturno 4",
			},
		],
		moons: [{
			img: "https://uploaddeimagens.com.br/images/003/175/573/full/Tit%C3%A3.png?1617141538",
			label: "Titã",
		}, {
			img: "https://uploaddeimagens.com.br/images/003/175/575/full/Enc%C3%A9lado.png?1617141580",
			label: "Encélado",
		}]
	},
	// Saturno moons
	// Titã
	{
		screenname: "Titã",
		description: [],
		images: [{
			img: "https://uploaddeimagens.com.br/images/003/175/573/full/Tit%C3%A3.png?1617141538",
			label: "Titã",
		}]

	},
	// Encélado
	{
		screenname: "Encélado",
		description: [],
		images: [{
			img: "https://uploaddeimagens.com.br/images/003/175/575/full/Enc%C3%A9lado.png?1617141580",
			label: "Encélado",

		}]
	},



	// Terra data
	{
		screenname: "Terra",
		description: [
			"Composição: silicatos e basaltos e a atmosfera composta por nitrogênio, oxigênio, vapor d'água e outros gases. ",
			"Tamanho: 6378 km.",
			"Localização: 149.600.000 km do Sol.",
			"Temperatura: 14°C.",
			"Presença ou não de Satélites: Possui um a Lua.",
		],
		images: [
			{
				img: terra1,
				label: "Terra 1",
			},

			{
				img: terra2,
				label: "Terra 2",
			},

			{
				img: terra3,
				label: "Terra 3",
			},

			{
				img: terra4,
				label: "Terra 4",
			},
		],
		moons: [{
			img: "https://uploaddeimagens.com.br/images/003/151/937/full/Lua.png?1616732793",
			label: "Lua",
		}],
	},
	// Terra moons
	// Moon
	{
		screenname: "Lua",
		description: [],
		images: [{
			img: "https://uploaddeimagens.com.br/images/003/151/937/full/Lua.png?1616732793",
			label: "Lua",
		}]
	},



	// Urano data
	{
		screenname: "Urano",
		description: [
			"Composição: por gases como hidrogênio, hélio e metano. ",
			"Tamanho: 4 vezes maior que Terra.",
			"Localização: 2.880.990.000 km do Sol.",
			"Temperatura: -200°C.",
			"Presença ou não de Satélites: 27 satélites naturais.",
		],
		images: [
			{
				key: String(Math.random()),
				img: urano1,
				label: "Urano 1",
			},

			{
				key: String(Math.random()),
				img: urano2,
				label: "Urano 2",
			},

			{
				key: String(Math.random()),
				img: urano3,
				label: "Urano 3",
			},

			{
				key: String(Math.random()),
				img: urano4,
				label: "Urano 4",
			},
		]
	},
	// Urano moons
	// Umbriel
	{
		screenname: "Umbriel",
		description: [],
		images: [
			{
				img: "https://uploaddeimagens.com.br/images/003/175/643/full/Umbriel.png?1617145876",
				name: "Umbriel",
				nameId: "Umbriel",
			}
		]
	},
	// Titânia
	{
		screenname: "Titânia",
		description: [],
		image: [
			{
				img: "https://uploaddeimagens.com.br/images/003/175/646/full/Tit%C3%A2nia.png?1617145985",
				name: "Titânia",
				nameId: "Titania",
			}
		]

	},



	// Venus data
	{
		screenname: "Venus",
		description: [
			"Composição: silicatos e basaltos e sua atmosfera composta por nitrogênio, gás carbônico e vapor d'água.",
			"Tamanho: Parecido com o da Terra.",
			"Localização: 108.200.000 km de distância do Sol.",
			"Temperatura: 460 ºC.",
			"Presença ou não de Satélites: Não possui satélites.",
		],
		images: [
			{
				img: venus1,
				label: "Vênus 1",
			},

			{
				img: venus2,
				label: "Vênus 2",
			},

			{
				img: venus3,
				label: "Vênus 3",
			},

			{
				img: venus4,
				label: "Vênus 4",
			},
		],
		moons: [],
	},
	// Venus moons
];

export const videosData = [
	{
		id: 0,
		url:
			'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
		poster:
			'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
	},
	{
		id: 1,
		url:
			'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
		poster:
			'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
	},
	{
		id: 2,
		url:
			'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
		poster:
			'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
	},
]
