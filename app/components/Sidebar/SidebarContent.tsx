import { Box, ChakraProps } from '@chakra-ui/react';
import { variantSidebar as sidebar } from '~/theme/components/Tabs';

const SidebarContent: React.FC<ChakraProps> = ({ children, ...props }) => {
  return (
    <Box {...sidebar.tabpanel} {...props}>
      {children}
    </Box>
  );
};

export default SidebarContent;
