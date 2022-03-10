import { Box, ChakraProps } from '@chakra-ui/react';
import { variantSidebar as sidebar } from '~/theme/components/Tabs';

const SidebarMenu: React.FC<ChakraProps> = ({ children, ...props }) => {
  return (
    <Box {...sidebar.tablist} flexDirection={{ base: 'column' }} {...props}>
      {children}
    </Box>
  );
};

export default SidebarMenu;
