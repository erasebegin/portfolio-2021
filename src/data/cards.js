// // IMAGES
// // isha
// import ishaEurope from '../assets/images/isha-europe.png';
// import soulstaminaScrn from '../assets/images/screenshot-soulstamina.png';
// import otherworldScrn from '../assets/images/screenshot-otherworld.png';
// import commentScrn from '../assets/images/screenshot-commentgen.png';
// // minor
// import githubSearch from '';
// import hackerNews from '../assets/images/hacker-news-frontend.png';
// import lisnaImage from '../assets/images/lisna.png';
// import scrabbleImage from '../assets/images/scrabble.png';
// import tyrexImage from '../assets/images/tyrex.png';
// import weatherImage from '../assets/images/weather.png';
// import necessaryImage from '../assets/images/necessary.png';
// import jotter from '../assets/images/jotter.png';
// // illustration
// import crux from '../assets/images/crux.png';
// import christmas from '../assets/images/christmas.png';
// import boris from '../assets/images/boris.png';

const data = [
  {
    title: 'Isha',
    subtitle: 'Designing and creating user experiences to coincide with events throughout the year',
    color: 'yellow',
    dividerColor: 'white',
    buttonColor: 'green',
    dividerAlt: true,
    sectionInfo: {
      duration: 'Feb 2021 - Present',
      description: 'Working as part of a small agile React team we make user experiences to drop into the ishayoga.eu PHP behemoth. We make landing pages, critical infrastructure and user journeys to coincide with various events and programs throughout the year',
      tech: ['react','styled-components','node']
    },
    cards: [
      {
        title: 'Stay Connected',
        image: './images/isha-europe.png',
        description:
          'Created several drop-in pages for the <a href="https://www.ishayoga.eu" rel="noopener noreferrer" target="_blank">ishayoga.eu</a> website using vanilla React.',
        repoUrl: 'https://github.com/erasebegin/yoga-veera-stay-connected',
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
        title: 'New Year',
        image: './images/isha-europe.png',
        description:
          'Created several drop-in pages for the <a href="https://www.ishayoga.eu" rel="noopener noreferrer" target="_blank">ishayoga.eu</a> website using vanilla React.',
        repoUrl: 'https://github.com/erasebegin/yoga-veera-stay-connected',
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
        title: 'Join Now',
        image: './images/isha-europe.png',
        description:
          'Created several drop-in pages for the <a href="https://www.ishayoga.eu" rel="noopener noreferrer" target="_blank">ishayoga.eu</a> website using vanilla React.',
        repoUrl: 'https://github.com/erasebegin/yoga-veera-stay-connected',
        demoUrl: 'https://webinar-stay-connected.netlify.app/',
        modal: [
          'Multi-language support',
          'Provided critical functionality for live event management platform',
          'Integrated React apps inside a PHP website',
          'Pixel-perfect recreations of provided designs',
          'Complex time management logic to account for users from various time zones'
        ]
      },
      
    ]
  },
  {
    title: 'Apacio',
    subtitle: 'Created pixel-perfect websites within small teams organised around AGILE methodologies',
    color: 'green',
    dividerColor: 'yellow',
    buttonColor: 'yellow',
    sectionInfo: {
      duration: 'Jan 2021 - Sep 2021',
      description: 'Working as part of a small agile React team we make user experiences to drop into the ishayoga.eu PHP behemoth. We make landing pages, critical infrastructure and user journeys to coincide with various events and programs throughout the year',
      tech: ['react','styled-components','node']
    },
    cards: [
      {
        title: 'Halder',
        description:
          'Search utility to find information and repositories of Github users by name',
        image: './images/github-search.png',
        demoUrl: 'https://git-user-searcher.netlify.app',
        repoUrl: 'https://github.com/erasebegin/git-user-search'
      },
      {
        title: 'Cashmatters',
        description:
          'A front end for the somewhat quirky Hacker News API showing the top 10 stories and a comment tree',
        // image: hackerNews,
        demoUrl: 'https://hacker-news-frontend.netlify.app/',
        repoUrl: 'https://github.com/erasebegin/hacker-news-frontend'
      },
      {
        title: 'Aftercloud',
        description:
          'A small web app that acts as a virtual scrabble letter bag for use in online classrooms',
        // image: scrabbleImage,
        demoUrl: 'https://scrabble-letters.netlify.app',
        repoUrl: 'https://github.com/erasebegin/scrabble-letters'
      }
    ]
  },
  {
    title: 'Thinkdrops',
    color: 'orangeLight',
    dividerColor: 'yellow',
    buttonColor: 'orangeDark',
    cards: [
      {
        title: 'Github User Search',
        description:
          'Search utility to find information and repositories of Github users by name',
        // image: githubSearch,
        demoUrl: 'https://git-user-searcher.netlify.app',
        repoUrl: 'https://github.com/erasebegin/git-user-search'
      },
      {
        title: 'Hacker News Front End',
        description:
          'A front end for the somewhat quirky Hacker News API showing the top 10 stories and a comment tree',
        // image: hackerNews,
        demoUrl: 'https://hacker-news-frontend.netlify.app/',
        repoUrl: 'https://github.com/erasebegin/hacker-news-frontend'
      },
      {
        title: 'Scrabble Letters',
        description:
          'A small web app that acts as a virtual scrabble letter bag for use in online classrooms',
        // image: scrabbleImage,
        demoUrl: 'https://scrabble-letters.netlify.app',
        repoUrl: 'https://github.com/erasebegin/scrabble-letters'
      },
      {
        title: 'Weather Search',
        description:
          'Node Express weather API with a Handlebars front-end. Icons are all made by me ^_^',
        // image: weatherImage,
        demoUrl: 'https://quick-weather-search.herokuapp.com/',
        repoUrl: 'https://github.com/erasebegin/weather-search'
      },
      {
        title: 'Lisna Music',
        description:
          'Small landing page project for musician Lisna created using React',
        // image: lisnaImage,
        demoUrl: 'https://www.lisna.co.uk',
        repoUrl: 'https://github.com/erasebegin/lisna-music'
      },
      {
        title: 'Necessary Products',
        description:
          'A spoof product page created as one of my first explorations in to front-end development',
        // image: necessaryImage,
        demoUrl: 'https://erasebegin.github.io/necessary-products',
        repoUrl: 'https://github.com/erasebegin/necessary-products'
      },
      {
        title: 'Jotter',
        description:
          'A kind of PWA created in order to experiment with the localStorage browser functionality',
        // image: jotter,
        demoUrl: 'https://my-jotter.netlify.app/',
        repoUrl: 'https://github.com/erasebegin/jotter'
      },
      {
        title: 'Tyrex Unsurance',
        description:
          'Practicing CSS styling, specifically CSS grid by creating a spoof business page',
        // image: tyrexImage,
        demoUrl: 'https://erasebegin.github.io/tyrex-unsurance',
        repoUrl: 'https://github.com/erasebegin/tyrex-unsurance'
      }
    ]
  },
  {
    title: 'Illustration',
    color: 'yellow',
    dividerColor: 'orangeLight',
    buttonColor: 'orangeDark',
    columns: 4,
    externalUrl: 'https://www.thinkdrops.art/',
    cards: [
      {
        title: 'Crux',
        description:
          "Illustrations for a tutorial for Juxt's bitemporal database formerly known as Crux",
        demoUrl: 'https://www.thinkdrops.art/blog/crux-tutorial/',
        // image: crux
      },
      {
        title: 'Penguin School Projects',
        description:
          'Earliest projects whilst studying at the Penguin Illustration School',
        demoUrl: 'https://www.thinkdrops.art/blog/alien-sushi',
        // image: christmas
      },
      {
        title: 'Boris',
        description: 'Cover artwork for Lisna track',
        demoUrl: 'https://www.thinkdrops.art/blog/boris',
        // image: boris
      }
    ]
  }
];

export default data;
