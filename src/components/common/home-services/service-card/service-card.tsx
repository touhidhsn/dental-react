import { Box, Flex, Stack, Heading, Text, Image } from '@chakra-ui/react';
import MyButton from '../../my-button';

interface CardProps {
  heading: string;
  description: string;
  icon: string;
  href: string;
  background: string;
}

export const ServiceCard = ({
  heading,
  description,
  background,
  icon,
  href,
}: CardProps) => {
  return (
    <Box
      bg={background}
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderRadius='lg'
      overflow='hidden'
      p={5}
      boxShadow={'sm'}>
      <Stack align={'center'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'blue.100'}
          rounded={'2xl'}
          bg={'whiteAlpha.800'}>
          <Image src={icon} h={10} w={10} />
        </Flex>
        <Box mt={2} textAlign={'center'}>
          <Heading size='md'>{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <MyButton text='Read More..' url='#' />
      </Stack>
    </Box>
  );
};
