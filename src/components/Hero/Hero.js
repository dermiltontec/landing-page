import React from 'react';
import { Button, Container } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';
import { TypeAnimation } from "react-type-animation";

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
			<TypeAnimation
						sequence={[`Mentoria: 10 passo para uma agenda lotada`, 1300]}
						wrapper={"h1"}
						className="hero_message"
					/>
				<HeroText>
					Estrategias para todos os profisionais de saúde
				</HeroText>
				<ButtonWrapper>
						<Button
							onClick={() => alert("Redireciona para o wats")}
						>Começar agora!</Button>
					<HeroButton onClick={() => scrollTo("leia-mais-3")} >Leia mais!</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
