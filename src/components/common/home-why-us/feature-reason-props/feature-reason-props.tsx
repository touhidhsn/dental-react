import { Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

interface FeatureProps {
  text: string;
  iconBg: string;
  iconColor: string;
  iconType: IconType;
}

export const Feature = ({
  text,
  iconType,
  iconBg,
  iconColor,
}: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'} mt={2}>
      <Flex
        w={8}
        h={5}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        <Icon as={iconType} color={iconColor} w={5} h={5} />
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};
