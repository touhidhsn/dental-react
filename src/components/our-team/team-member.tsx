import { Box, SimpleGrid } from '@chakra-ui/react';
import DoctorCard from './doctor-card/doctor-card';
import { DOCTORS_INFO } from '../../utils/constants/doctors-constant';

const TeamMember = () => {
  return (
    <Box maxW='7xl' mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
        {DOCTORS_INFO.map((doctor) => (
          <DoctorCard
            name={doctor.name}
            designation={doctor.designation}
            degree={doctor.degree}
            location={doctor.location}
            image={doctor.image}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TeamMember;
