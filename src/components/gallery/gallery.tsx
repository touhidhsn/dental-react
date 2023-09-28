import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from '../common/navbar';
import MainTitle from '../common/main-title';
import GalleryImg from './gallery-img';
import NewsLetter from '../common/news-letter';
import Footer from '../common/footer/footer';

const Gallery = () => {
  return (
    <Grid
      templateAreas={`'nav nav' 'mainTitle mainTitle' 'gallery gallery'  'newsletter newsletter' 'footer footer'`}>
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      <GridItem area={'mainTitle'}>
        <MainTitle
          heading='Gallery'
          content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula'
        />
      </GridItem>
      <GridItem area={'gallery'}>
        <GalleryImg />
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

export default Gallery;
