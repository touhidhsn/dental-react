import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from '@chakra-ui/react';

import { Link as RouteLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Fragment } from 'react';
import { NAVBAR_LINKS } from '../../utils/constants/navbar-constants';
import NavLink from './nav-link';
import MyButton from './my-button';

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Fragment>
      <Box
        width={'full'}
        boxShadow={'md'}
      >
        <Box
          bg={useColorModeValue('white', 'blue.700')}
          mx={'auto'}
          maxW={'7xl'}
        >
          <Flex
            h={16}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <Box>
              <Heading size={'lg'}>Dental</Heading>
            </Box>
            <HStack
              spacing={8}
              alignItems={'center'}
            >
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}
              >
                {NAVBAR_LINKS.map((link) => (
                  <NavLink>
                    <Link
                      as={RouteLink}
                      _hover={{ textDecoration: 'none' }}
                      className='text'
                      to={link.url}
                    >
                      {link.name}
                    </Link>
                  </NavLink>
                ))}
              </HStack>
            </HStack>
            <MyButton
              url='/appointment'
              text='Book an appointment'
            />
          </Flex>

          {isOpen ? (
            <Box
              pb={4}
              display={{ md: 'none' }}
            >
              <Stack
                as={'nav'}
                spacing={4}
              >
                {NAVBAR_LINKS.map((link) => (
                  <Link
                    key={link.id}
                    as={RouteLink}
                    to={link.url}
                  >
                    {link.name}
                  </Link>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </Box>
    </Fragment>
  );
}

export default NavBar;
