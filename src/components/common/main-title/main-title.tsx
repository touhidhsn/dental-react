import { Heading, Stack, Text } from '@chakra-ui/react';

interface Props {
  heading: string;
  content: string;
}

const MainTitle = ({ heading, content }: Props) => {
  return (
    <>
      <Stack
        p={20}
        bgColor={'blue.50'}
      >
        <Heading>{heading}</Heading>
        <Text>{content}</Text>
      </Stack>
    </>
  );
};

export default MainTitle;
