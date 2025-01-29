export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'Projects',
      href: '#projects',
    },
    {
      id: 3,
      name: 'About',
      href: '#about',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];


  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 4.5 : isMobile ? 6 : isTablet ? 4.5 : 6,
      deskPosition: isSmall ? [-0.2, 0, 0] : isMobile ? [-0.2, -0.5, 0] : [-0.3, -0.7, 0],
    };
  };