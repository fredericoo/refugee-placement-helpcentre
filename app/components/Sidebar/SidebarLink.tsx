import { Box } from '@chakra-ui/react';
import { RemixNavLinkProps } from '@remix-run/react/components';
import { NavLink } from 'remix';
import { variantSidebar as sidebar } from '~/theme/components/Tabs';

type SidebarLinkProps = RemixNavLinkProps;

const SidebarLink: React.FC<SidebarLinkProps> = ({ children, ...navLinkProps }) => {
  return (
    <NavLink {...navLinkProps}>
      {({ isActive }) => (
        <Box {...sidebar.tab} data-selected={isActive ? 'true' : undefined}>
          {children}
        </Box>
      )}
    </NavLink>
  );
};

export default SidebarLink;
