const variantPill = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    pt: 4,
  },
  tab: {
    color: 'gray.11',
    borderRadius: 10,
    px: 4,
    py: 1.5,
    _hover: {
      bg: 'gray.1',
    },
    ':not(:last-child)': { mr: 1 },
    _selected: {
      bg: 'gray.1',
      color: 'primary.10',
      boxShadow: 'sm',
    },
    _focus: {
      boxShadow: 'sm',
    },
    fontSize: 'sm',
  },
  tablist: {
    display: 'flex',
    p: 0.5,
    bg: 'gray.3',
    borderRadius: 12,
    boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.0125), inset 0px 2px 4px rgba(0, 0, 0, 0.025)',
    overflow: 'hidden',
  },
  tabpanel: {
    p: 0,
  },
};

export const variantSidebar = {
  root: {
    display: 'grid',
    gridTemplateColumns: { md: '300px 1fr' },
    pt: 0,
  },
  tab: {
    display: 'flex',
    alignItems: 'center',
    color: 'gray.11',
    px: 4,
    py: 1.5,
    _hover: {
      bg: 'gray.3',
    },
    _selected: {
      bg: 'primary.3',
      color: 'primary.10',
    },
    fontSize: { md: 'sm' },
    justifyContent: 'flex-start',
    borderRadius: { base: 'md', md: 'none' },
    mb: { base: 2, md: 0 },
  },
  tablist: {
    display: 'flex',
    flexDirection: 'column',
    borderRight: { md: '1px solid' },
    borderColor: { md: 'gray.4' },
    pt: 4,
  },
  tabpanel: {
    p: 0,
  },
};

export const Tabs = {
  parts: ['root', 'tab', 'tablist', 'tabpanel'],
  variants: { pill: variantPill, sidebar: variantSidebar },
  defaultProps: {
    variant: 'pill',
  },
};
