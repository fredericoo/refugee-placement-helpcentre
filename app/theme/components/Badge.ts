import type { SystemStyleFunction } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';

const variantSubtle: SystemStyleFunction = props => {
  const { colorScheme: c } = props;

  return {
    bg: mode(`${c}.5`, `${c}.12`)(props),
    color: mode(`${c}.11`, `${c}.2`)(props),
    borderRadius: 'full',
    px: 2,
    py: 0.5,
    fontSize: 'xs',
  };
};

const Badge = {
  variants: {
    subtle: variantSubtle,
  },
  defaultProps: {
    variant: 'subtle',
  },
};

export default Badge;
