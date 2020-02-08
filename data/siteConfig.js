module.exports = {
  siteTitle: 'Creative Cat',
  siteDescription: 'Dare to Dream, Empowered to Pursue.',
  authorName: 'Carina Zheng',
  twitterUsername: 'gofrontu',
  authorAvatar: 'avatar.jpeg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  Carina is passionate about Machine Learning, Data Science, Computer Science and squash 😎 <br>
  With working history in Statistics and IT, she is currently completing her Master of Applied Data 
  Science at University of Canterbury, New Zealand.<br>
  She is ready to explore a bigger world and dive in the Big Data lake! 😍`,
  // <a href="https://www.canterbury.ac.nz/" target="_blank">University of Canterbury</a>.


  siteUrl: 'https://carina.nz',
  disqusSiteUrl: 'https://carina.nz',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '', // Note: it must *not* have a trailing slash; /gatsby-starter-morning-dew
  siteCover: 'Beijing_sky_cut.png', // file in content/images
  googleAnalyticsId: 'UA-157766289-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/logo.png',
  postsPerPage: 6,
  disqusShortname: 'Cococatty',
  headerTitle: 'Creativ Cat',
  headerLinksIcon: 'logo.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    // {
    //   label: 'Projects',
    //   url: '/projects',
    // },
    {
      label: 'Blog',
      url: '/',
      // blog
    },
    {
      label: 'Tags',
      url: '/',
      // tags
    },
    {
      label: 'About',
      url: '/about',
      // -Carina
    }
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [        
        {          
          label: 'About Carina',
          url: '/about',
        },
        {
          label: 'About Creative Cat',
          url: '/about',
        },
        {          
          label: 'About Cococatty Ltd.',
          url: '/about',
        },
      ],
    },
    {
      sectionName: 'Carina\'s other profiles',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/Cococatty/',
        },       
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/carina-zheng/',
        },
        {
          label: 'Tableau',
          url: 'https://public.tableau.com/profile/carina.zheng',
        }
      ],
    },
  ],
}
