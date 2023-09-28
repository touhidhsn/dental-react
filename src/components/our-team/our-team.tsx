import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from '../common/navbar';
import MainTitle from '../common/main-title';
import NewsLetter from '../common/news-letter';
import Footer from '../common/footer/footer';
import TeamMember from './team-member';

const OurTeam = () => {
  return (
    <Grid
      templateAreas={`'nav nav' 'mainTitle mainTitle' 'teammembers teammembers'  'newsletter newsletter' 'footer footer'`}>
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      <GridItem area={'mainTitle'}>
        <MainTitle
          heading='Our Team'
          content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula'
        />
      </GridItem>
      <GridItem area={'teammembers'}>
        <TeamMember />
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

export default OurTeam;
