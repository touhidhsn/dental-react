import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from '../common/navbar';
import MainTitle from '../common/main-title';

import NewsLetter from '../common/news-letter';
import Footer from '../common/footer/footer';
import Service from './service';

const OurServices = () => {
  return (
    <Grid
      templateAreas={`'nav nav' 'mainTitle mainTitle' 'service service'  'newsletter newsletter' 'footer footer'`}>
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      <GridItem area={'mainTitle'}>
        <MainTitle
          heading='Our Services'
          content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula'
        />
      </GridItem>
      <GridItem area={'service'}>
        <Service />
      </GridItem>
      <GridItem area={'newsletter'}>
        <NewsLetter />
      </GridItem>
      <GridItem area={'footer'}>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default OurServices;
