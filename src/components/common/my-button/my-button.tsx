import { Button } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

interface Props {
  text: string;
  url: string;
}

export const MyButton = ({ text, url }: Props) => {
  return (
    <Button
      as={RouteLink}
      to={url}
      rounded={'lg'}
      size={'md'}
      fontWeight={'normal'}
      px={6}
      colorScheme={'blue'}
      bg={'blue.500'}
      _hover={{ bg: 'blue.600' }}
    >
      {text}
    </Button>
  );
};
