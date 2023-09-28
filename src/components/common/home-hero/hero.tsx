import { Container, Stack } from '@chakra-ui/react';

import HeroImg from './hero-img';
import HeroStatistics from './hero-statistics';
import HeroContents from './hero-contents';
import {
  HOME_HERO_BODY,
  HOME_HERO_HEADER,
} from '../../../utils/constants/home-hero';

function Hero() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <HeroContents
          heading={HOME_HERO_HEADER}
          body={HOME_HERO_BODY}
        />
        <HeroImg />
      </Stack>
      <HeroStatistics />
    </Container>
  );
}

export default Hero;
