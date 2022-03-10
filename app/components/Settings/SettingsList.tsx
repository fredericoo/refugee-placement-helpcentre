import { Stack } from '@chakra-ui/react';

const SettingsList: React.FC = ({ children }) => {
  return (
    <Stack as="ul" spacing={0.5} borderRadius="xl" overflow="hidden">
      {children}
    </Stack>
  );
};

export default SettingsList;
