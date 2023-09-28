import { Avatar, Box, Stack, Text } from '@chakra-ui/react';
import {
  PATIENT_IMG,
  PATIENT_NAME,
  PATIENT_TESTIMONIAL,
} from '../../../utils/constants/testimonial-constants';

export default function Testimonial() {
  return (
    <Stack
      bg='white'
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'xl', md: 'xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
        {PATIENT_TESTIMONIAL}
      </Text>
      <Box textAlign={'center'}>
        <Avatar src={PATIENT_IMG} mb={2} />

        <Text fontWeight={600}>{PATIENT_NAME}</Text>
        <Text fontSize='sm' color='gray.400'>
          Actor
        </Text>
      </Box>
    </Stack>
  );
}
