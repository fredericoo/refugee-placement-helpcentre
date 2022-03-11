import { extendTheme } from '@chakra-ui/react';
import { blue, mauve, mint, tomato } from '@radix-ui/colors';
import Badge from './components/Badge';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Menu } from './components/Menu';
import { Modal } from './components/Modal';
import { Switch } from './components/Switch';
import { Tabs } from './components/Tabs';

const radixToChakraColour = <T extends string>(radixColour: Record<`${T}${number}`, string>, name: T) =>
  Object.fromEntries(Object.entries(radixColour).map(([key, value]) => [key.replace(name, ''), value]));

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        bg: 'white',
        color: 'primary.12',
      },
      '*': {
        '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
        '-moz-tap-highlight-color': 'rgba(0, 0, 0, 0)',
      },
    },
  },
  colors: {
    gray: radixToChakraColour(mauve, 'mauve'),
    primary: radixToChakraColour(blue, 'blue'),
    danger: radixToChakraColour(tomato, 'tomato'),
    success: radixToChakraColour(mint, 'mint'),
  },
  shadows: {
    sm: '0px 16px 16px rgba(0, 0, 0, 0.0065), 0px 8px 8px rgba(0, 0, 0, 0.0125), 0px 4px 4px rgba(0, 0, 0, 0.025), 0px 2px 2px rgba(0, 0, 0, 0.05), 0px 1px 1px rgba(0, 0, 0, 0.1)',
    md: '0px 16px 16px rgba(0, 0, 0, 0.0125), 0px 8px 8px rgba(0, 0, 0, 0.025), 0px 4px 4px rgba(0, 0, 0, 0.05), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.2)',
    lg: '0px 16px 16px rgba(0, 0, 0, 0.1), 0px 8px 8px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.025), 0px 2px 2px rgba(0, 0, 0, 0.0125), 0px 1px 1px rgba(0, 0, 0, 0.0075)',
    outline: 'none',
  },
  components: {
    Menu,
    Input,
    Textarea: { ...Input, variants: { custom: Input.variants.custom.field } },
    Button,
    Modal,
    Tabs,
    Badge,
    Switch,
  },
});

export default theme;
