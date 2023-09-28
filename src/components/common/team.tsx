import TeamDoc1 from '../../assets/images/TeamDoc1.jpg';
import TeamDoc2 from '../../assets/images/TeamDoc2.jpg';
import TeamDoc3 from '../../assets/images/TeamDoc3.jpg';
import { Box, chakra, SimpleGrid } from '@chakra-ui/react';
import DoctorCard from '../our-team/doctor-card/doctor-card';

export default function BasicStatistics() {
  return (
    <Box maxW='7xl' mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        Meet our team
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
        <DoctorCard
          name={'Dr Fiona'}
          designation={'Dental Surgery'}
          degree='MBBS'
          location='HS Medical'
          image={TeamDoc1}
        />
        <DoctorCard
          name={'Dr Justin'}
          designation={'Dental Surgery'}
          degree='MBBS'
          location='TS Medical'
          image={TeamDoc2}
        />
        <DoctorCard
          name={'Dr Tim'}
          designation={'Dental Specialist'}
          degree='MBBS'
          location='DS Medical'
          image={TeamDoc3}
        />
        <DoctorCard
          name={'Dr Jake'}
          designation={'Dental Specialist'}
          degree='Futangi'
          location='HX Medical'
          image={TeamDoc3}
        />
      </SimpleGrid>
    </Box>
  );
}
