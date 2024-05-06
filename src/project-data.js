export const projects = [
    {
        title: 'Take Five Movie Database',
        thumbsrc: 'moviedb-thumb.png',
        thumbalt: 'Movie database website displaying Lord of the Rings movie poster and information.',
        excerpt: 'Movie database web application made with TMDB API.',

        description: 'Take Five is a movie database web application that pulls the most up-to-date ratings and information from The Movie Database via API calls. It is designed to allow users to view movie ratings, cast and crew and synopses, as well as save and store their favourites in their list. Working in a group of 3, we took the project from original mockups to prototypes, through to a complete and functioning React app. ',

        process: {
            design: {
                title:  'Designing',
                text: ['Starting with an empty Photoshop file and a dream, I started work on my first high fidelity mockup for the movie database site. After spending a significant amount of time deliberating over a colour scheme, I ultimately landed on a reference to an artistic rendition of the cover of \'The Great Gatsby\', and after some tweaks to ensure readability and modernity, I was off.', 
                'Below you\'ll see my first concepts for the landing section and about page of the site.'],
                featuredImages: ['take-five-home-original.jpg', 'take-five-about-original.jpg'],
            },

            prototyping: {
                title: 'Prototyping',
                text: ['The start of the prototyping process brought about the beginning of the team-built portion of the project, which meant combining the best parts of our designs to create the most effective user interface. Most of my work was focused on desktop size design and functionality in Adobe XD.', 'Below you\'ll see how we cohesively brought our designs together and brought them to life with interactive features.'],
                featuredImages: ['take-five-prototype.jpg'],
                videos: ['take-five-prototype.mp4'],
            },

            development: {
                title: 'Development',
                text: ['Jumping from creating fairly simple, static web pages to building a dynamic, API-integrated React app was daunting to say the least. Maintaining organization of so many moving pieces, not to mention keeping track of everybody\'s work at all times to prevent Git conflicts, was possibly the hardest learning curve. However, following DRY principles and sticking closely to our mockup and prototype designs kept us on track to completion.'],
            },
        },

        learnings: ['Not only was this project the first large React project I participated in, it was also the first project I\'d created with proper, intentional mockup and prototyping processes. Working with softwares like Photoshop and XD for the first time taught me a lot about the workflow and organizational skills required to operate in a web development environment. I found myself organizing my elements in these programs like I would organize my code, which helped me simplify the building of the website later on. Additionally, organizing my work into functional components in XD translated well to building functional components in React, and gave me a good \'jumping off point\' for moving from a design to development environment.', 
        'All in all, while this project obviously taught me a lot about the languages, frameworks and programs I was using for the first time, it also taught me a lot about how to use organizational skills to smoothly transition between design and development environments.'],

        repo: false,
        repoLink: 'null',
        liveSite: 'https://take-five.sidney-engstrom.com',
        slug: 'take-five-movie-database',

        featuredTech: ['React', 'Chakra UI', 'API'],
        alltech: ['HTML5', 'CSS3', 'React', 'Chakra UI', 'TMDB API', 'Photoshop', 'Adobe XD', 'Illustrator'],

        feature: true,

        carouselImgs: ['take-five/take-five-main.jpg', 'take-five/take-five-posters.jpg', 'take-five/take-five-list.jpg', 'take-five/take-five-details.jpg'],
        carouselAlt: ['Coming soon placeholder image'],
    },

    {
        title: 'Discover Ottawa',
        thumbsrc: 'ottawa-thumb.png',
        thumbalt: 'Tourism website displaying parliament buildings in Ottawa, Canada.',
        excerpt: 'Tourist information website for Ottawa, Ontario, Canada.',

        description: "Discover Ottawa is a tourism information website for Canada's capital city of Ottawa. It is targeted to prospective or current tourists of the city and aims to supply them with information about the city's offerings in terms of history, arts and culture, transit and other areas and events of note.",

        process: {
            design: {
                title:  'Designing',
                text: ['Having travelled to Ottawa a handful of times prior to creating this website, I was hoping to be able to incorporate a bit of that experience into my designs. Something I found interesting about the city was its ability to completely shift energy between day and night. I decided to incorporate this into the design by giving the user the option to choose between looking at a day or night-themed gallery page.', 'Below you can see how I implemented this into the design.'],
                featuredImages: ['discover-ottawa-prompt.jpg', 'discover-ottawa-day.jpg', 'discover-ottawa-night.jpg'],
            },

            development: {
                title: 'Development',
                text: ['Being my first real web project, Discover Ottawa holds a special place in my heart as the one that launched my love of styling in development. While my personal style has since grown with my skill set, and despite launching this site only 5 months ago it already feels quite outdated, I remember feeling this great sense of creative freedom during the project - adding more and more fine details with every revision of the site.', 'The development process overall really strengthened my keen eye for detail and was the kickstarter for the development of my personal style in terms of web design.' ],
            },
        },

        learnings: ['Coming soon.'],

        repo: false,
        repoLink: 'null',
        liveSite: 'https://sidney-engstrom.com/discover-ottawa',
        featuredTech: ['CSS', 'JavaScript'],
        alltech: ['HTML5', 'CSS3', 'JavaScript', 'Illustrator'],
        feature: true,
        slug: 'discover-ottawa',
        carouselImgs: ['discover-ottawa/discover-ottawa-main.jpg', 'discover-ottawa/discover-ottawa-cards.jpg', 'discover-ottawa/discover-ottawa-gallery.jpg', 'discover-ottawa/discover-ottawa-ac.jpg'],
        carouselAlt: ['Coming soon placeholder image'],
    },

    {
        title: 'Sidney Engstrom Portfolio',
        thumbsrc: 'portfolio/portfolio-thumb.jpg',
        thumbalt: 'Coming soon placeholder image.',
        excerpt: 'Personal web development portfolio.',
        description: 'My personal portfolio was designed to display my strongest work, expertise and contact information to those who may be interested in getting to know me or working with me on design and development projects. Built with React and featuring many hand-coded animations, CSS (or, more specifically, SCSS) art pieces and a light and dark mode toggle, I hoped to show off not only my programming competencies but my creativity and eye for design.',

        process: {
            design: {
                title:  'Designing',
                text: ['For the first iteration of my portfolio design, I decided to build the mockups in Adobe XD. As you\'ll see below, the first designs featured a lot more prominent colour than the current ones, which I ultimately decided to shift to more of an accent so the site would be a compliment to my featured projects rather than a distraction from them.', 'Below you\'ll see links to the style guide for my initial concept and the Figma file half-wireframe-half-mockup with some initial ideas for the final iteration. You can also have a look at the various versions of my landing page, starting with my very first build done at the start of my journey with the front-end development world.'],
                featuredImages: ['portfolio-first.jpg', 'portfolio-second.jpg', 'portfolio-main.jpg'],
                links: {
                    xd: 'https://xd.adobe.com/view/02ecd25e-b516-4b75-b87c-5dfd957dab03-57bf/?fullscreen',
                    figma: 'https://www.figma.com/file/9NTVNbmS7yu5iCHwWKbWJQ/portfolio-wireframe-mockup?type=design&node-id=0%3A1&mode=design&t=f3OtMu6HjCtcGO7d-1',
                }
            },

            prototyping: {
                title: 'Prototyping',
                text: ['While I didn\'t end up building a functioning prototype for my final redesign of the site, I did create one for the middle-most iteration. The prototyping process forced me to take a closer look at the UX implications of my design, and forced some changes for a smoother experience. One change which did carry through to the end of the project was the decision to have a visually interesting and artistic feature on the landing section of the site. While the exact design changed from bubbles to a computer desk scene, the intention to show off my creative abilities stayed the same throughout.', 'Below you can have a look at some of the interactive parts of the prototype by checking out the XD file.'],
                links: {
                    xd: 'https://xd.adobe.com/view/875fa465-16e5-466c-a121-5880f46da6f3-d20c/?fullscreen',
                }
            },

            development: {
                title: 'Development',
                text: ['After combining some of the best features from the two fleshed out iterations of my portfolio, I began diving into the development world. I decided to integrate some of the first version\'s \"upcoming projects\" concepts into the \"process\" section you\'re reading through now, walking those interested through some of my desicions and ideas throughout the various steps of creating my sites. I loved being able to take some time to create the art shown in the landing section, and was happy to be able to maintain organization of my SASS files and React components despite complicated integrations like this.'],
            },
        },

        learnings: ['Being my first solo React project, and the first sizeable non-WordPress site I\'d worked on solo in general, this project taught me a lot about my personal style of designing, coding, and organizing. Not only did I get to make all the executive decisions for the process, forcing me to be more careful with my UX / UI as I wouldn\'t have another set of eyes on my work at all times, but I had to find strength in other areas outside of my normal comfort zone.', 'In group projects, I will generally take on a large portion of the styling and design, as I\'ve always felt most comfortable with that area of development, but working on this project by myself forced me to learn some (admittedly drawn out and painful) lessons about React. I found that tossing all of my project and skills information into well-organized data files allowed me to keep my React files clean, and is going to make updating the site significantly easier in the future.', 'Learning to create this kind of compartmentalized code for easy maintenance is going to serve me very well going forward, and I\'m really happy I decided to go this route for the project.'],

        repo: true,
        repoLink: 'https://github.com/sidneyengstrom/portfolio',
        liveSite: 'https://sidney-engstrom.com',

        featuredTech: ['React', 'SCSS'],
        alltech: ['React', 'JavaScript', 'SASS / SCSS', 'Git / GitHub', 'Illustrator', 'Figma'],
        feature: true,
        slug: 'personal-portfolio',

        carouselImgs: ['portfolio/portfolio-main.jpg', 'portfolio/portfolio-light.jpg', 'portfolio/portfolio-carousel.jpg', 'portfolio/portfolio-process.jpg'],
        carouselAlt: ['Coming soon placeholder image'],
    },

    {
        title: 'Porter Studios',
        thumbsrc: 'coming-soon-thumb.png',
        thumbalt: 'Coming soon placeholder image.',
        excerpt: 'Wedding photography business portfolio.',

        description: 'Details coming soon.',
        process: {
            design: {
                title:  'Designing',
                text: ['Details coming soon.'],
                featuredImages: ['coming-soon.png', 'coming-soon.png', 'coming-soon.png'],
            },

            development: {
                title: 'Development',
                text: ['Details coming soon.'],
            },
        },

        learnings: ['More info coming soon.'],
        repo: false,
        repoLink: 'https://github.com/htpwebdesign/porterstudio-theme',
        liveSite: 'https://porterstudio.bcitwebdeveloper.ca',

        featuredTech: ['WordPress', 'SASS'],
        alltech: ['WordPress', 'HTML5', 'PHP', 'SASS / SCSS', 'JavaScript'],
        feature: false,
        slug: 'under-construction',
        carouselImgs: ['coming-soon.png', 'coming-soon.png', 'coming-soon.png', 'coming-soon.png'],
        carouselAlt: ['Coming soon placeholder image'],
    },

    {
        title: 'Super Match',
        thumbsrc: 'match-thumb.png',
        thumbalt: 'Windows 95 desktop-themed website displaying Super Nintendo cartdige matching game.',
        excerpt: 'Retro Nintendo and Windows themed card matching game.',

        description: "Designed with an old school Windows 95 layout and old Super Nintendo cartridges instead of cards, this project was created for those craving a bit of nostalgia on the modern web.",

        process: {
            design: {
                title:  'Designing',
                text: ['Coming up with the design concept of this site was as simple as thinking about the kind of game aesthetics I have always loved - old Nintendo, Atari, and pretty much anything pixel art. Initially, I had considered creating a full-fledged pixel art game from scratch, though too pressed for time during the creation of this particular project, that idea has stuck with me... stay tuned ;)', 'Below you\'ll see some of my very first concepts for the game design, and where it ended up.'],
                featuredImages: ['super-match-front.png', 'super-match-card.png', 'super-match-back.png'],
            },

            development: {
                title: 'Development',
                text: ['When it came to development, I realized the importance of booleans and if statements in general. I\'ve found since this project, actually, that I seem to have developed a habit of imagining the switch cases and other conditional checks I might write for games I\'m playing. Fortunately, I play a lot of solo games so nobody is bothered by the coding brain going off in the middle of a task... except for me...', 'While there are lots of ways I would rewrite this for clarity now, check out this conditional check I wrote for flipping a card. The first time I felt in control of JavaScript! Oh the memories...'],
                featuredImages: ['super-match-conditional.jpg'],
            },
        },

        learnings: ['Despite having worked with JavaScript in a few minor assignments leading up to this project, I felt I really built up my chops during this development process in particular. Essentially I learned how to simplify and DRY before I apply my ideas so I could keep myself from having to rework the entire project just out of the pain it brought me to read the overcomplicated code. It was easy for me to get excited about this project, and extremely tempting to throw all my ideas down as soon as they came to me, but catching myself in these moments meant saving myself so much time and agony down the road debugging well-intentioned but oh, so severely broken code.'],
        repo: false,
        repoLink: 'null',
        liveSite: 'https://sidney-engstrom.com/super-match',
        featuredTech: ['CSS', 'JavaScript'],
        alltech: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
        feature: false,
        slug: 'super-match',
        carouselImgs: ['super-match/super-match-instructions.jpg', 'super-match/super-match-main.jpg', 'super-match/super-match-match.jpg', 'super-match/super-match-full.jpg'],
        carouselAlt: ['Coming soon placeholder image'],
    },
]