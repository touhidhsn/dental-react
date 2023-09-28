import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
} from '@chakra-ui/react';

import whyUsImg from '../../../assets/images/whyus.svg';
import Feature from './feature-reason-props';
import {
  WHYUS_BODY,
  WHYUS_FEATURES,
  WHYUS_HEADING,
} from '../../../utils/constants/why-us-constants';

export default function WhyUs() {
  return (
    <Container maxW={'6xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={whyUsImg}
            objectFit={'cover'}
          />
        </Flex>
        <Stack spacing={4}>
          <Text
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={'blue.50'}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Why us?
          </Text>
          <Heading>{WHYUS_HEADING}</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            {WHYUS_BODY}
          </Text>
          <Stack spacing={4} divider={<StackDivider borderColor='gray.100' />}>
            {WHYUS_FEATURES.map((feature) => (
              <Feature
                iconColor={feature.iconColor}
                iconBg={feature.iconBg}
                iconType={feature.iconType}
                text={feature.text}
              />
            ))}
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
