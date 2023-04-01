import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	const scrollTo = (id) => {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};
	return (
		<HeroSection>
			<HeroVideo src="./assets/clients.jpg" autoPlay muted />
			<Container>
				<MainHeading>
							Mentoria: 10 passo para uma agenda lotada</MainHeading>
				<HeroText>
					Estrategias para todos os profisionais de saúde
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>Começar agora!</Button>
					</Link>
					<HeroButton onClick={() => scrollTo("leia-mais-3")} >Leia mais!</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
