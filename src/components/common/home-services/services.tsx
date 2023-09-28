import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';

import ServiceCard from './service-card';
import {
  SERVICE_CONTENT,
  SERVICE_LIST,
} from '../../../utils/constants/home-service-constants';

export default function Services() {
  return (
    <Box p={4} mt={12}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Our Services
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          {SERVICE_CONTENT}
        </Text>
      </Stack>

      <Container maxW={'7xl'} mt={12}>
        <Flex flexWrap='wrap' gridGap={6} justify='center'>
          {SERVICE_LIST.map((service) => (
            <ServiceCard
              heading={service.heading}
              icon={service.icon}
              description={service.description}
              background={service.backgroundColor}
              href={service.href}
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
