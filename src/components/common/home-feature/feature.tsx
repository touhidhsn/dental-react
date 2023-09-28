import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';

import CardContainer from '../card-container';
import {
  FEATURE_CONTENT,
  FEATURE_HEADING,
  ROOT_HEADING,
  ROOT_CONTENT,
  EMERGENCY_HEADING,
  EMERGENCY_CONTENT,
  COSMETIC_CONTENT,
  COSMETIC_HEADING,
} from '../../../utils/constants/feature-constants';
import { Cosmetic, Emergency, Rootcanel } from '../../../assets/icons';

export default function Feature() {
  return (
    <Box
      p={4}
      mt={20}
    >
      <Stack
        spacing={4}
        as={Container}
        maxW={'3xl'}
        textAlign={'center'}
      >
        <Heading
          fontSize={{ base: '2xl', sm: '4xl' }}
          fontWeight={'bold'}
        >
          {FEATURE_HEADING}
        </Heading>
        <Text
          color={'gray.600'}
          fontSize={{ base: 'sm', sm: 'lg' }}
        >
          {FEATURE_CONTENT}
        </Text>
      </Stack>

      <Container
        maxW={'7xl'}
        mt={12}
      >
        <Flex
          flexWrap='wrap'
          gridGap={6}
          justify='center'
        >
          <CardContainer
            heading={ROOT_HEADING}
            icon={
              <Rootcanel
                width={40}
                height={40}
              />
            }
            description={ROOT_CONTENT}
            href={'#'}
            background={'#fffcf3'}
          />
          <CardContainer
            heading={EMERGENCY_HEADING}
            icon={
              <Emergency
                width={40}
                height={40}
              />
            }
            description={EMERGENCY_CONTENT}
            href={'#'}
            background={'#f6fdfb'}
          />
          <CardContainer
            heading={COSMETIC_HEADING}
            icon={
              <Cosmetic
                width={40}
                height={40}
              />
            }
            description={COSMETIC_CONTENT}
            href={'#'}
            background='blue.50'
          />
        </Flex>
      </Container>
    </Box>
  );
}
