import {
  Container,
  Grid,
  GridItem,
  Flex,
  Box,
  Text,
  Heading,
  HStack,
  Image,
  Stack,
} from '@chakra-ui/react';

import heroStatisticsImg from '../../../assets/images/heroStatistics.svg';

function HeroStatistics() {
  return (
    <Container
      py={2}
      maxW={'container.lg'}
    >
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(5, 1fr)',
        }}
        gap={5}
        px={4}
        py={10}
        rounded={'xl'}
        boxShadow={'xl'}
        bg={'blue.50'}
      >
        <GridItem
          w='100%'
          colSpan={{ base: 1, sm: 2, md: 2 }}
        >
          <HStack>
            <Image
              px={5}
              src={heroStatisticsImg}
            />
            <Stack>
              <Heading as={'h2'}>Quality</Heading>
              <Text>Only quality is our key of success</Text>
            </Stack>
          </HStack>
        </GridItem>
        <GridItem w='100%'>
          <Flex flexDirection={'column'}>
            <Text
              fontSize={'4xl'}
              fontWeight={'bold'}
            >
              1500 +
            </Text>
            <Box fontSize={'sm'}>Online Appointemnts</Box>
          </Flex>
        </GridItem>
        <GridItem w='100%'>
          <Flex flexDirection={'column'}>
            <Text
              fontSize={'4xl'}
              fontWeight={'bold'}
            >
              12K +
            </Text>
            <Box fontSize={'sm'}>Recovered Patients</Box>
          </Flex>
        </GridItem>
        <GridItem w='100%'>
          <Flex flexDirection={'column'}>
            <Text
              fontSize={'4xl'}
              fontWeight={'bold'}
            >
              96%
            </Text>
            <Box fontSize={'sm'}>High Statisfaction Rate</Box>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default HeroStatistics;
