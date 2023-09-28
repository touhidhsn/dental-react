import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Stack,
  Divider,
  CardFooter,
  ButtonGroup,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';
import { MyButton } from '../common/my-button/my-button';
import { SERVICE_LIST } from '../../utils/constants/services-constants';

const Service = () => {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns='repeat(auto-fill, minmax(380px, 1fr))'
      mt={12}
      bg={useColorModeValue('white', 'blue.700')}
      mx={'auto'}
      maxW={{ base: 'sm', sm: '7xl' }}>
      {SERVICE_LIST.map((service) => (
        <Card maxW='sm'>
          <CardBody>
            <Image
              src={service.imgage}
              alt='Emergency Dentistry'
              borderRadius='sm'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{service.heading}</Heading>
              <Text>{service.body}</Text>
              <Text color='blue.600' fontSize='2xl'>
                {service.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider color={'blue.200'} />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <MyButton url='/appointment' text='Book an appointment now' />
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default Service;
