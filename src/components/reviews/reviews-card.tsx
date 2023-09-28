import { Card, CardBody, Text } from '@chakra-ui/react';
import bgReview from '../../assets/images/ReviewIcon.svg';

interface ReviewProps {
  bgColor: string;
  bodyText: string;
}

const ReviewsCard = ({ bgColor, bodyText }: ReviewProps) => {
  return (
    <Card
      bgColor={bgColor}
      p={5}
      my={2}
      bgImage={bgReview}
      bgPosition='top-left'
      bgRepeat='no-repeat'>
      <CardBody>
        <Text textColor={'white'}>{bodyText}</Text>
      </CardBody>
    </Card>
  );
};

export default ReviewsCard;
