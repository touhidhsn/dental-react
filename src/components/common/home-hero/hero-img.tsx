import { Flex, Box, Image, useColorModeValue } from '@chakra-ui/react';
import heroImg from '../../../assets/images/heroImg.svg';
import Blob from '../blob';
const HeroImg = () => {
  return (
    <>
      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}
      >
        <Blob
          w={'100%'}
          h={'100%'}
          position={'absolute'}
          top={'-20%'}
          left={0}
          color={useColorModeValue('blue.50', 'blue.600')}
        />
        <Box
          position={'relative'}
          height={'full'}
          width={'full'}
          overflow={'hidden'}
        >
          <Image
            alt={'Hero Image'}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={'100%'}
            p={5}
            src={heroImg}
          />
        </Box>
      </Flex>
    </>
  );
};

export default HeroImg;
