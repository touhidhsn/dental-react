import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from '../common/navbar';
import MainTitle from '../common/main-title';
import NewsLetter from '../common/news-letter';
import Footer from '../common/footer/footer';
import Reviews from './reviews';

const Review = () => {
  return (
    <Grid
      templateAreas={`'nav nav' 'mainTitle mainTitle' 'review review'  'newsletter newsletter' 'footer footer'`}>
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      <GridItem area={'mainTitle'}>
        <MainTitle
          heading='Paitent Reviews'
          content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula'
        />
      </GridItem>
      <GridItem area={'review'}>
        <Reviews />
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

export default Review;
