import type { SystemStyleFunction } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';

const variantPrimary: SystemStyleFunction = props => {
  const { colorScheme: c } = props;

  return {
    color: mode(`${c}.11`, `${c}.2`)(props),
    bg: mode(`${c}.5`, `${c}.8`)(props),
    _hover: {
      bg: mode(`${c}.6`, `${c}.7`)(props),
    },
    _active: {
      bg: mode(`${c}.7`, `${c}.6`)(props),
    },
    _disabled: {
      pointerEvents: 'none',
    },
  };
};

export const Button = {
  baseStyle: {
    borderRadius: 8,
    fontWeight: 400,
  },
  variants: { primary: variantPrimary },
  sizes: {
    sm: {
      py: '.375rem',
      px: '.625rem',
    },
  },
  md: {
    py: '.5rem',
    px: '.625rem',
    height: 'auto',
  },

  defaultProps: {
    variant: 'primary',
  },
};
