import { Box, ChakraProps } from '@chakra-ui/react';
import { variantSidebar as sidebar } from '~/theme/components/Tabs';

const SidebarWrapper: React.FC<ChakraProps> = ({ children, ...props }) => {
  return (
    <Box flexGrow={1} {...sidebar.root} {...props}>
      {children}
    </Box>
  );
};

export default SidebarWrapper;
