import { Link } from '@chakra-ui/react';
import { ReactNode } from 'react';

export const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'blue.500',
      textColor: 'white',
    }}
  >
    {children}
  </Link>
);

export default NavLink;
