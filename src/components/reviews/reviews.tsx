import { SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import {
  REVIEW_BIG_BODY,
  REVIEW_REGULAR_BODY,
} from '../../utils/constants/reviews-constant';
import ReviewsCard from './reviews-card';

const Reviews = () => {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns='repeat(auto-fill, minmax(380px, 1fr))'
      mt={12}
      bg={useColorModeValue('white', 'blue.700')}
      mx={'auto'}
      maxW={{ base: 'sm', sm: '5xl' }}>
      <ReviewsCard bgColor='red.400' bodyText={REVIEW_REGULAR_BODY} />
      <ReviewsCard bgColor='yellow.400' bodyText={REVIEW_REGULAR_BODY} />
      <ReviewsCard bgColor='blue.400' bodyText={REVIEW_BIG_BODY} />

      <ReviewsCard bgColor='green.400' bodyText={REVIEW_BIG_BODY} />
      <ReviewsCard bgColor='gray.400' bodyText={REVIEW_REGULAR_BODY} />
      <ReviewsCard bgColor='purple.400' bodyText={REVIEW_REGULAR_BODY} />
      <ReviewsCard bgColor='teal.400' bodyText={REVIEW_REGULAR_BODY} />
      <ReviewsCard bgColor='orange.400' bodyText={REVIEW_REGULAR_BODY} />
    </SimpleGrid>
  );
};

export default Reviews;
