// IMAGES
// flagship
import ishaEurope from '../assets/images/isha-europe.png';
import soulstaminaScrn from '../assets/images/screenshot-soulstamina.png';
import otherworldScrn from '../assets/images/screenshot-otherworld.png';
import commentScrn from '../assets/images/screenshot-commentgen.png';
// minor
import githubSearch from '../assets/images/github-search.png';
import hackerNews from '../assets/images/hacker-news-frontend.png';
import lisnaImage from '../assets/images/lisna.png';
import scrabbleImage from '../assets/images/scrabble.png';
import tyrexImage from '../assets/images/tyrex.png';
import weatherImage from '../assets/images/weather.png';
import necessaryImage from '../assets/images/necessary.png';
import jotter from '../assets/images/jotter.png';
// illustration
import crux from '../assets/images/crux.png';
import christmas from '../assets/images/christmas.png';
import boris from '../assets/images/boris.png';

const data = [
  {
    title: 'Flagship Projects',
    color: 'yellow',
    dividerColor: 'white',
    dividerAlt: true,
    cards: [
      {
        title: 'Isha Europe',
        image: ishaEurope,
        description:
          'Created several drop-in pages for the <a href="https://www.ishayoga.eu" rel="noopener noreferrer" target="_blank">ishayoga.eu</a> website using vanilla React.',
        repoUrl: 'https://github.com/erasebegin/soulstamina-shop',
        demoUrl: 'https://webinar-stay-connected.netlify.app/',
        modal: [
          'Multi-language support',
          'Provided critical functionality for live event management platform',
          'Integrated React apps inside a PHP website',
          'Pixel-perfect recreations of provided designs',
          'Complex time management logic to account for users from various time zones'
        ]
      },
      {
        title: 'Soulstamina Shop',
        image: soulstaminaScrn,
        description: 'Ecommerce platform for artist Soulstamina',
        repoUrl: 'https://github.com/erasebegin/soulstamina-shop',
        demoUrl: 'https://www.soulstamina-shop.netlify.com',
        modal: [
          'Generated using Gatsby static site generator',
          'Used Bulma CSS framework as a foundation',
          'Most styles are custom made with Styled Components',
          'Data sourced from Contentful headless CMS using graphql for queries',
          'Cart and checkout system provided by Snipcart'
        ]
      },
      {
        title: 'Otherworld',
        image: otherworldScrn,
        description:
          'Blog, portfolio and e-commerce platform for artist Otherworld Comics',
        repoUrl: 'https://github.com/erasebegin/otherworld-ink',
        demoUrl: 'https://www.otherworldink.com',
        modal: [
          'Generated using Gatsby static site generator',
          'Combination of Bootstrap and custom CSS',
          'Previously had Paypal integration which has switched to Snipcart',
          'React Rellax used for parallax effect',
          'Custom pagination system',
          'Note: shop section currently undergoing changes'
        ]
      },
      {
        title: 'Comment Generator',
        image: commentScrn,
        description:
          'What started out as a very basic tool for storing and copying student comments has developed in to a fully-fledged web app',
        repoUrl: 'https://gitlab.com/erasebegin/comment-generator',
        demoUrl: 'https://comment-generator-915.netlify.app',
        modal: [
          'Back end server created using NodeJS and Express',
          'MongoDB and Mongoose for database',
          'Deployed to Heroku',
          'Front end is vanilla React app',
          'Includes React Router, localStorage caching and clipboard management'
        ]
      }
    ]
  },
  {
    title: 'Minor Projects',
    color: 'orangeLight',
    dividerColor: 'yellow',
    cards: [
      {
        title: 'Github User Search',
        description:
          'Search utility to find information and repositories of Github users by name',
        image: githubSearch,
        demoUrl: 'https://git-user-searcher.netlify.app',
        repoUrl: 'https://github.com/erasebegin/git-user-search'
      },
      {
        title: 'Hacker News Front End',
        description:
          'A front end for the somewhat quirky Hacker News API showing the top 10 stories and a comment tree',
        image: hackerNews,
        demoUrl: 'https://hacker-news-frontend.netlify.app/',
        repoUrl: 'https://github.com/erasebegin/hacker-news-frontend'
      },
      {
        title: 'Scrabble Letters',
        description:
          'A small web app that acts as a virtual scrabble letter bag',
        image: scrabbleImage,
        demoUrl: 'https://scrabble-letters.netlify.app',
        repoUrl: 'https://github.com/erasebegin/scrabble-letters'
      },
      {
        title: 'Weather Search',
        description:
          'Node Express weather API with a Handlebars front-end. Icons are all made by me ^_^',
        image: weatherImage,
        demoUrl: 'https://quick-weather-search.herokuapp.com/',
        repoUrl: 'https://github.com/erasebegin/weather-search'
      },
      {
        title: 'Lisna Music',
        description:
          'Small landing page project for musician Lisna created using React',
        image: lisnaImage,
        demoUrl: 'https://www.lisna.co.uk',
        repoUrl: 'https://github.com/erasebegin/lisna-music'
      },
      {
        title: 'Necessary Products',
        description:
          'A spoof product page created as one of my first explorations in to front-end development',
        image: necessaryImage,
        demoUrl: 'https://erasebegin.github.io/necessary-products',
        repoUrl: 'https://github.com/erasebegin/necessary-products'
      },
      {
        title: 'Jotter',
        description:
          'A kind of PWA created in order to experiment with the localStorage browser functionality',
        image: jotter,
        demoUrl: 'https://my-jotter.netlify.app/',
        repoUrl: 'https://github.com/erasebegin/jotter'
      },
      {
        title: 'Tyrex Unsurance',
        description:
          'Practicing CSS styling, specifically CSS grid by creating a spoof business page',
        image: tyrexImage,
        demoUrl: 'https://erasebegin.github.io/tyrex-unsurance',
        repoUrl: 'https://github.com/erasebegin/tyrex-unsurance'
      }
    ]
  },
  {
    title: 'Illustration',
    color: 'orangeDark',
    dividerColor: 'orangeLight',
    columns: 4,
    externalUrl: 'https://www.thinkdrops.art/',
    cards: [
      {
        title: 'Crux',
        description:
          "Illustrations for a tutorial for Juxt's bitemporal database formerly known as Crux",
        demoUrl: 'https://www.thinkdrops.art/blog/crux-tutorial/',
        image: crux
      },
      {
        title: 'Penguin School Projects',
        description:
          'Earliest projects whilst studying at the Penguin Illustration School',
        demoUrl: 'https://www.thinkdrops.art/blog/alien-sushi',
        image: christmas
      },
      {
        title: 'Boris',
        description: 'Cover artwork for Lisna track',
        demoUrl: 'https://www.thinkdrops.art/blog/boris',
        image: boris
      }
    ]
  }
];

export default data;
