import {
  Stat,
  useColorModeValue,
  StatLabel,
  StatNumber,
  Image,
} from '@chakra-ui/react';

interface StatsCardProps {
  image: string;
  name: string;
  designation: string;
  degree: string;
  location: string;
}

function DoctorCard(props: StatsCardProps) {
  const { image, name, designation, degree, location } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      textAlign={'center'}
      alignItems={'center'}
      py={'5'}
      shadow={'xl'}
      borderColor={useColorModeValue('blue.200', 'gray.500')}
      rounded={'lg'}
      boxShadow={'lg'}>
      <Image w={52} h={52} mb={5} boxShadow={'sm'} src={image} />

      <StatLabel fontSize={'2xl'} fontWeight={'bold'} isTruncated>
        {name}
      </StatLabel>
      <StatNumber fontSize={'xl'} fontWeight={'normal'}>
        {designation}
      </StatNumber>
      <StatNumber fontSize={'lg'} fontWeight={'normal'}>
        {degree}
      </StatNumber>
      <StatNumber fontSize={'lg'} fontWeight={'normal'}>
        {location}
      </StatNumber>
    </Stat>
  );
}

export default DoctorCard;
