import {
  Stack,
  Box,
  Flex,
  Center,
  Heading,
  Text,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

interface CardProps {
  heading: string[];
  description: string[];
  icon: ReactElement;
  href: string;
  background: string;
}

const CardContainer = ({
  heading,
  description,
  icon,
  background,
}: CardProps) => {
  return (
    <Box
      bg={background}
      maxW={{ base: 'full', md: '360px' }}
      w={'full'}
      borderRadius='lg'
      overflow='hidden'
      p={5}
      boxShadow={'sm'}
    >
      <Stack
        align={'center'}
        spacing={2}
      >
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('blue.400', 'blue.200')}
          boxShadow={'outline'}
          outlineColor={'blue.500'}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Center>
            <Heading
              size='md'
              my={3}
            >
              {heading}
            </Heading>
          </Center>

          <Text
            textAlign={'center'}
            mt={1}
            fontSize={'sm'}
          >
            {description}
          </Text>
        </Box>
        <Button
          pt={5}
          variant={'link'}
          colorScheme={'blue'}
          size={'sm'}
        >
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default CardContainer;
