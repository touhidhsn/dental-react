import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Input,
  IconButton,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import {
  COMPANY_LINKS,
  SUPPORT_LINKS,
} from '../../../utils/constants/footer-constants';
import SocialButton from './social-button';
import ListHeader from './list-header';

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('blue.500', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      textColor={'white'}
      mt={'32'}
    >
      <Container
        as={Stack}
        maxW={'7xl'}
        py={10}
      >
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 2fr 2fr 2fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Heading>Dental</Heading>
            </Box>
            <Text fontSize={'sm'}>© 2022 Dental. All rights reserved</Text>
            <Stack
              direction={'row'}
              spacing={6}
            >
              <SocialButton
                label={'Twitter'}
                href={'#'}
              >
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label={'YouTube'}
                href={'#'}
              >
                <FaYoutube />
              </SocialButton>
              <SocialButton
                label={'Instagram'}
                href={'#'}
              >
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            {COMPANY_LINKS.map((link) => (
              <Link href={link.url}>{link.name}</Link>
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            {SUPPORT_LINKS.map((link) => (
              <Link href={link.url}>{link.name}</Link>
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={'blackAlpha.100'}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={'blue.100'}
                color={'blue.500'}
                _hover={{
                  bg: 'green.600',
                }}
                aria-label='Subscribe'
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
