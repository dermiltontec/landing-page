import React, { useEffect } from 'react';
import { Container, Section } from '../../globalStyles';
import one from '../../lottie/107925-doctor.json';
import two from '../../lottie/77192-search-doctor.json';
import {
	ContentRow,
	TextWrapper,
	TopLine,
	Heading,
	ContentButton,
	Subtitle,
	ImgWrapper,
	Img,
	ContentColumn,
} from './ContentStyles.js';

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import Lottie from 'react-lottie';

export const Content = ({
	primary,
	topLine,
	headline,
	description,
	buttonLabel,
	img,
	alt,
	inverse,
	reverse,
	me,
	id,
	lottie
}) => {
	const initial = { opacity: 0, y: 30 };
	const animation = useAnimation();

	const { ref, inView } = useInView({ threshold: 0.2 });

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});
		}
	}, [inView, animation]);

	const defaultOptionsLoading = {
    loop: true,
    autoplay: true,
    animationData: lottie === 1 ? one : two,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      speed: 2
    },
  };

	return (
		<Section id={`${id}`} padding={me && '0px'} inverse={inverse} ref={ref}>
			<Container>
				<ContentRow reverse={reverse}>
					<ContentColumn>
						<TextWrapper>
							<TopLine
								initial={initial}
								transition={{ delay: 0.3, duration: 0.6 }}
								animate={animation}
							>
								{topLine.text}
							</TopLine>
							<Heading
								initial={initial}
								transition={{ delay: 0.5, duration: 0.6 }}
								animate={animation}
								inverse={inverse}
							>
								{headline}
							</Heading>
							<Subtitle
								initial={initial}
								transition={{ delay: 0.7, duration: 0.6 }}
								animate={animation}
								inverse={inverse}
							>
								{description}
							</Subtitle>
							<ContentButton
								initial={initial}
								transition={{ delay: 1, duration: 0.6 }}
								animate={animation}
								inverse={inverse}
								primary={primary}
							>
								{buttonLabel}
							</ContentButton>
						</TextWrapper>
					</ContentColumn>
					<ContentColumn
						initial={initial}
						transition={{ delay: 0.5, duration: 0.6 }}
						animate={animation}
					>
						<ImgWrapper>
						{
							lottie ? (
								<Lottie
								style={{ width: 450, height: 400, }}
								options={defaultOptionsLoading}></Lottie>
							) : (
								<Img
								style={ me && {
									height: 2000,
									marginTop: '0.8rem',
									zIndex: -1
								}}
								src={img}
								alt={alt}
								whileHover={{ rotate: 2, scale: 1.02 }}
								transition={{ duration: 0.5 }}
							/>
							)
						}
						</ImgWrapper>
					</ContentColumn>
				</ContentRow>
			</Container>
		</Section>
	);
};
