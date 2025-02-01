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


  export const calculateSizes = (isSmall, isMobile, isTablet, isLaptop) => {
    return {
      deskScale: isSmall ? 7 : isMobile ? 6 : isTablet ? 4 : 6,
      deskPosition: isSmall ? [-0.2, -0.7, 0] : isMobile ? [-0.2, -0.5, 0] : isTablet ? [-0.3, -0.5, 0] : [-0.3, -0.7, 0],
      tvScale: isSmall ? 3.6 : isTablet ? 2.3 : isLaptop ? 2.8 : 3,
      tvPosition: isSmall ? [-1.1, -0.3, 0] : isTablet ? [-0.7, -0.3, 0] : [-0.8, 0, 0],
    };
  };

  export const projectsByTech = [
    {
      tech: 'React + TailwindCSS',
      projects: [
        {
          title: "Edge Author's tours",
          desc: 'A stunning website includes a full-screen expanding form on scroll, mouse-responsive cards, animated headings, buttons and audio player.',
          subdesc: 'Fully responsive with perfect iOS compatibility and cross-browser support. Built with reusable components, validated for proper markup and enhanced with accessibility, blending beauty, functionality, and inclusivity seamlessly.',
          href: 'https://edge-author-tours.vercel.app/',
          githubHref: 'https://github.com/Anestezia-zip/Edge-Author-Tours',
          texture: '/assets/videos/project1.mp4',
          logo: '/projects/logo/edge-logo.png',
          tags: [
            {
              id: 1,
              name: 'React',
              path: '/assets/react.png',
            },
            {
              id: 2,
              name: 'TailwindCSS',
              path: '/assets/tailwind.png',
            },
            {
              id: 3,
              name: 'Framer Motion',
              path: '/assets/framer.png',
            },
            {
              id: 4,
              name: 'GSAP',
              path: '/assets/gsap.jpg',
            }
          ],
        },
        {
          title: 'Stunning Yoga Studio',
          desc: 'Beautiful landing page with animations which are applied to almost every element, including buttons, sections, plan switching, and sliding questions in the FAQ section.',
          subdesc: 'Built with React, Framer Motion, and Tailwind CSS, utilizing libraries like clsx, react-countup, react-icons, react-router-dom, react-scroll, and react-slidedown for enhanced interactivity and smooth animations.',
          href: 'https://stunning-yoga-studio-2024.vercel.app/',
          githubHref: 'https://github.com/Anestezia-zip/CodeCraft-landing-page',
          texture: '/assets/videos/project2.mp4',
          logo: '/projects/logo/yoga-logo.png',
          tags: [
            {
              id: 1,
              name: 'React',
              path: '/assets/react.png',
            },
            {
              id: 2,
              name: 'TailwindCSS',
              path: '/assets/tailwind.png',
            },
            {
              id: 3,
              name: 'Framer Motion',
              path: '/assets/framer.png',
            },
            {
              id: 4,
              name: 'GSAP',
              path: '/assets/gsap.jpg',
            }
          ],
        },
        {
          title: 'CodeCraft',
          desc: 'Landing page with all necessary information, smooth navigation to each section, engaging visuals, and animated section appearances for a seamless user experience.',
          subdesc: 'Built with React, Tailwind, and Framer Motion for a modern, responsive, and dynamic UI.',          
          href: 'https://code-craft-landing-page.vercel.app/',
          githubHref: 'https://github.com/Anestezia-zip/CodeCraft-landing-page',
          texture: '/assets/videos/project3.mp4',
          logo: '/projects/logo/code-logo.png',
          spotlight: '/projects/spotlight1.png',
          tags: [
            {
              id: 1,
              name: 'React',
              path: '/assets/react.png',
            },
            {
              id: 2,
              name: 'TailwindCSS',
              path: '/assets/tailwind.png',
            },
            {
              id: 3,
              name: 'Framer Motion',
              path: '/assets/framer.png',
            }
          ],
        },
        {
          title: 'Restaura',
          desc: 'Landing page with all necessary information, smooth navigation to each section, engaging visuals, and animated section appearances for a seamless user experience.',
          subdesc: 'Built with React, Tailwind, and Framer Motion for a modern, responsive, and dynamic UI.',         
          href: 'https://restaura-landing-page.vercel.app/',
          githubHref: 'https://github.com/Anestezia-zip/restaura-landing-page',
          texture: '/assets/videos/project4.mp4',
          logo: '/projects/logo/restaura-logo.png',
          tags: [
            {
              id: 1,
              name: 'React',
              path: '/assets/react.png',
            },
            {
              id: 2,
              name: 'TailwindCSS',
              path: '/assets/tailwind.png',
            },
            {
              id: 3,
              name: 'Framer Motion',
              path: '/assets/framer.png',
            }
          ],
        },
      ],
    },
    {
      tech: 'Django + Python',
      projects: [
        {
          title: 'Artful Urbex',
          desc: 'An e-commerce art store built with Django, featuring authentication, product sorting, and integrated payments. Users can browse a catalog of paintings, view details, and make purchases securely. Users can filter paintings by search or category and contact support via a form.',
          subdesc: 'Registered users can create accounts, rate paintings, track order history, manage wishlists, and update their profile or submitted queries. Site owners have full control over paintings, ratings, and user management, ensuring smooth operation and content moderation.',
          href: 'https://artful-urbex-3e13a9b6e83c.herokuapp.com/',
          githubHref: 'https://github.com/Anestezia-zip/django-art-store',
          texture: '/assets/videos/project5.mp4',
          logo: '/projects/logo/art-logo.png',
          tags: [
            {
              id: 1,
              name: 'Django',
              path: '/assets/angular.png',
            },
            {
              id: 2,
              name: 'Python',
              path: '/assets/python.png',
            },
            {
              id: 3,
              name: 'AWS S3',
              path: '/assets/aws.png',
            },
            {
              id: 4,
              name: 'Cloudinary',
              path: '/assets/cloudinary.png',
            },
            {
              id: 5,
              name: 'PostgreSQL',
              path: '/assets/postgresql.png',
            }
          ],
        },
        {
          title: 'Volunteer Force',
          desc: 'A dedicated platform designed to seamlessly connect volunteers with organizations.',
          subdesc: 'It features secure authentication, a user-friendly admin panel, efficient pagination for managing content, and an interactive map with a visually engaging gallery.',
          href: 'https://volunteer-force-2bed457ddbdb.herokuapp.com',
          githubHref: 'https://github.com/Anestezia-zip/django-volunteer-force',
          texture: '/assets/videos/project6.mp4',
          logo: '/projects/logo/volunteer-logo.png',
          tags: [
            {
              id: 1,
              name: 'Django',
              path: '/assets/django.png',
            },
            {
              id: 2,
              name: 'Python',
              path: '/assets/python.png',
            },
            {
              id: 3,
              name: 'Cloudinary',
              path: '/assets/cloudinary.png',
            },
            {
              id: 4,
              name: 'PostgreSQL',
              path: '/assets/postgresql.png',
            },
          ],
        },
        {
          title: 'Apple sales reports',
          desc: 'This program provides various options for performing calculations and obtaining data.',
          subdesc: 'Users can select between monthly, weekly, or daily calculations and access a variety of specific sales and performance metrics, seamlessly integrated with Google Drive and Google Sheets APIs.',
          href: 'https://apple-sales-report-6a3868d388e4.herokuapp.com/',
          githubHref: 'https://github.com/Anestezia-zip/Apple-sales',
          texture: '/assets/videos/project7.mp4',
          logo: '/projects/logo/apple-logo.png',
          tags: [
            {
              id: 1,
              name: 'Python',
              path: '/assets/python.png',
            },
            {
              id: 2,
              name: 'Heroku',
              path: '/assets/heroku.png',
            },
          ],
        },
      ],
    },
    {
      tech: 'HTML5, CSS3, JavaScript',
      projects: [
        {
          title: 'Monosushi',
          desc: 'A sushi delivery store based on Angular with an admin panel for adding products, a shopping cart, user authentication, and animations. All content and images are stored in a Firebase database.',
          subdesc: 'The store is fully responsive, optimized for both mobile and tablet devices.',
          href: 'https://monosushi-project.vercel.app/',
          githubHref: 'https://github.com/Anestezia-zip/monosushi-project',
          texture: '/assets/videos/project8.mp4',
          logo: '/projects/logo/monosushi-logo.png',
          tags: [
            {
              id: 1,
              name: 'Angular',
              path: '/assets/angular.png',
            },
            {
              id: 2,
              name: 'Firebase',
              path: '/assets/firebase.png',
            },
            {
              id: 3,
              name: 'TypeScript',
              path: '/assets/ts.png',
            },
          ],
        },
        {
          title: 'Puzzle Game',
          desc: 'Game built using jQuery with seamless drag-and-drop mechanics. ',
          subdesc: 'Fully responsive, incorporating touchstart and touchmove events for an intuitive and smooth touch experience on mobile devices.',
          href: 'https://anestezia-zip.github.io/Puzzle-game/',
          githubHref: 'https://github.com/Anestezia-zip/Puzzle-game',
          texture: '/assets/videos/project9.mp4',
          logo: '/projects/logo/puzzle-logo.png',
          tags: [
            {
              id: 1,
              name: 'jQuery',
              path: '/assets/jquery.png',
            },
            {
              id: 2,
              name: 'HTML5',
              path: '/assets/coding.png',
            }
          ],
        },
        {
          title: 'Suffix',
          desc: 'A sleek 3-page landing page with a clean design, showcasing services, features, and contact information.',
          subdesc: 'Fully responsive, uses smooth transitions, engaging animations, and well-organized sections to guide users through key content.',
          href: 'https://anestezia-zip.github.io/Suffix/',
          githubHref: 'https://github.com/Anestezia-zip/Suffix',
          texture: '/assets/videos/project10.mp4',
          logo: '/projects/logo/suffix-logo.png',
          tags: [
            {
              id: 1,
              name: 'HTML5 & CSS3',
              path: '/assets/coding.png',
            },
            {
              id: 2,
              name: 'JavaScript',
              path: '/assets/js.png',
            },
          ],
        },
      ],
    },
  ];
  