import { Box } from '@chakra-ui/react';
import { variantSidebar as sidebar } from '~/theme/components/Tabs';

type SidebarDividerProps = { label?: string };

const SidebarDivider: React.VFC<SidebarDividerProps> = ({ label }) => {
  return (
    <Box
      color="gray.8"
      {...{ px: sidebar.tab.px || 0, py: sidebar.tab.py || 0 }}
      textTransform="uppercase"
      fontSize="xs"
      letterSpacing="widest"
      fontWeight="bold"
      userSelect="none"
      pointerEvents="none"
    >
      {label}
    </Box>
  );
};

export default SidebarDivider;
