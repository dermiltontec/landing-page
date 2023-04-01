import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiBook } from 'react-icons/bi';
import { GrGroup, GrHostMaintenance } from 'react-icons/gr';
import { SocialIcon } from '../components/Footer/FooterStyles';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Mentorias online',
		description: 'Formato da mentoria: - 2 meses - 1 hr de duração cada',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: 'E-Books',
		description:
			`Tenha acesso a conteúdos e E-Books exclusivos
			- Mentoria Zero Enxaqueca`,
		icon: iconStyle(BiBook),
		imgClass: 'six',
	},
	{
		name: 'Suporte',
		description: 'Nossa equipe está disponível o tempo todo, caso você precise de nós',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Experiencia',
		description:
			'Aprenda técnicas para no seu aplicar no seu dia a dia como profisional',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
	{
		name: 'Grupos exclusivos',
		description:
			`Tenha acesso a grupos exclusivos para membros`,
		icon: iconStyle(GrGroup),
		imgClass: 'six',
	},
];
