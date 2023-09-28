import { Grid, GridItem } from '@chakra-ui/react';
import '../App.css';
import NavBar from './common/navbar';

import Testimonial from './common/home-testimonial.ts/testimonial';
import Footer from './common/footer/footer';
import NewsLetter from './common/news-letter';
import Team from './common/team';
import Feature from './common/home-feature/feature';
import Hero from './common/home-hero/hero';
import WhyUs from './common/home-why-us';
import Services from './common/home-services';
function Home() {
  return (
    <Grid
      templateAreas={`'nav nav' 'hero hero' 'feature feature' 'whyus whyus' 'services services' 'testimonial testimonial' 'newsletter newsletter' 'team team'  'footer footer'`}>
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      <GridItem area={'hero'}>
        <Hero />
      </GridItem>
      <GridItem area={'feature'}>
        <Feature />
      </GridItem>
      <GridItem area={'whyus'}>
        <WhyUs />
      </GridItem>
      <GridItem area={'services'}>
        <Services />
      </GridItem>
      <GridItem area={'testimonial'}>
        <Testimonial />
      </GridItem>
      <GridItem area={'newsletter'}>
        <NewsLetter />
      </GridItem>
      <GridItem area={'team'}>
        <Team />
      </GridItem>
      <GridItem area={'footer'}>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default Home;
