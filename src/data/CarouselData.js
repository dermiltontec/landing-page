export const data = [
	{
		title: 'depoimento 1',
		description:
			'Exemplo 1',
		image: './assets/clients.jpg',
		link: "",
	},
	{
		title: 'Depoimento ',
		description: 'Exemplo 4',
		image: './assets/teamwork.jpg',
		link: "",
	},
	{
		title: 'Depoimento 2',
		description: 'Excemplo 2',
		image: './assets/dermiton.png',
		link: "",
	},
	{
		title: 'Depoimento 3',
		description: 'Exemplo 3',
		image: './assets/teamwork.jpg',
		link: "",
	},
	{
		title: 'Depoimento 4',
		description: 'Exemplo 4',
		image: './assets/teamwork.jpg',
		link: "",
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
