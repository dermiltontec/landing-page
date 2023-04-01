export const data = [
	{
		title: 'depoimento 1',
		description:
			'Exemplo 1',
		image: './assets/clients.jpg',
	},
	{
		title: 'Depoimento 2',
		description: 'Excemplo 2',
		image: './assets/dermiton.png',
	},
	{
		title: 'Depoimento 3',
		description: 'Exemplo 3',
		image: './assets/teamwork.jpg',
	},
	{
		title: 'Depoimento 4',
		description: 'Exemplo 4',
		image: './assets/teamwork.jpg',
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
