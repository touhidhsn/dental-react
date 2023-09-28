import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from '../common/navbar';
import { AppointmentForm } from './appointment-form';
import NewsLetter from '../common/news-letter';
import Footer from '../common/footer/footer';
import MainTitle from '../common/main-title';

const Appointment = () => {
  return (
    <Grid
      templateAreas={`'nav nav' 'mainTitle mainTitle' 'form form' 'newsletter newsletter' 'footer footer'`}>
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      <GridItem area={'mainTitle'}>
        <MainTitle
          heading='Appointment'
          content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula'
        />
      </GridItem>
      <GridItem area={'form'}>
        <AppointmentForm />
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

export default Appointment;
