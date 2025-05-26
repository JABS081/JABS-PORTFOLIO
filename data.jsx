import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
} from 'react-icons/fa';
    import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

    import Work1 from './assets/project-1.jpeg';
    import Work2 from './assets/project-2.jpeg';
    import Work3 from './assets/project-3.jpeg';
    import Work4 from './assets/project-4.jpeg';
    import Work5 from './assets/project-5.jpeg';
    import Work6 from './assets/project-6.jpeg';

    import Theme1 from './assets/purple.png';
    import Theme2 from './assets/red.png';
    import Theme3 from './assets/blueviolet.png';
    import Theme4 from './assets/blue.png';
    import Theme5 from './assets/goldenrod.png';
    import Theme6 from './assets/magenta.png';
    import Theme7 from './assets/yellowgreen.png';
    import Theme8 from './assets/orange.png';
    import Theme9 from './assets/green.png';
    import Theme10 from './assets/yellow.png';

    export const links = [
        {
            id: 1,
            name: 'Home',
            icon: <FaHome className='Nav__icon' />,
            path: '/',
        },

        {
            id: 2,
            name: 'About',
            icon: <FaUser className='Nav__icon' />,
            path: '/about',
        },

        {
            id: 3,
            name: 'Portfolio',
            icon: <FaFolderOpen className='Nav__icon' />,
            path: '/portfolio', 
        },

        {
            id: 4,
            name: 'Contact',
            icon: <FaEnvelopOpen className='Nav__icon' />,
            path: '/contact',
        },
    ];

    export const personalInfo = [
        {
            id: 1,
            title: 'First Name : ',
            description: 'JOHN',
        },

        {
            id: 2,
            title: 'Last Name : ',
            description: 'ABASS',
        },

        {
            id: 3,
            title: 'Age : ',
            description: '30 Years',
        },

        {
            id: 4,
            title: 'Nationality : ',
            description: 'Nigerian',
        },

        {
            id: 5,
            title: 'Freelance : ',
            description: 'Available',
        },

        {
            id: 6,
            title: 'Address : ',
            description: '105 Mosoke Apete Ibadan',
        },

        {
            id: 7,
            title: 'Phone : ',
            description: '+234 813 887 9137',
        },

        {
            id: 8,
            title: 'Email : ',
            description: 'abassjohn37@gmail.com',
        },

        {
            id: 9,
            title: 'linkedin : ',
            description: 'https://www.linkedin.com/in/john-abass',
        },

        {
            id: 10,
            title: 'Languages : ',
            description: 'Yoruba, English',
        },
    ];

    export const Stats = [
        {
            id: 1,
            no: '12+',
            title: 'Years of <br /> Experience',
        },

        {
            id: 2,
            no: '86+',
            title: 'Completed <br /> Projects',
        },

        {
            id: 3,
            no: '77',
            title: 'Happy <br /> customers',
        },

        {
            id: 4,
            no: ''
        },
    ];

    export const resume = [
        {
            id: 1,
            category: 'experience',
            icon: <FaBriefcase />,
            year: '2019 - 2021',
            title: 'Assistant Web Developer <span> MEGA </span>',
            desc: 'Collaborating with cross-functional team gathering and analysing web application project ,also design and implemnted intuitive user interface using HTML, CSS, Javascript & some React',
        },


        {
            id: 2,
            category: 'experience',
            icon: <FaBriefcase />,
            year: '2022 - PRESENT',
            title: 'FRONTENED DEVELOPER <span> Iwealth </span>',
            desc: 'Web Application component developer both frontend and backened , also UI/UX Designer, jquery and Javascript to ensure user interactions and functionality',
        },

        {
            id: 3,
            category: 'experience',
            icon: <FaBriefcase />,
            year: '2021 - 2023',
            title: 'Data Analyst <span> Segilola Mining company </span>',
            desc: 'Collaborated with Team in Performing Data collection and allocating responsive chart for weekly predicted target ,also logistical analysis of samples data for lab preservation',
        },

        {
            id: 4,
            category: 'education',
            icon: <FaGraduationCap />,
            year: '2014 - 2018',
            title: 'PHYSICS DEGREE <span> UNIVERSITY OF IBADAN </span>',
            desc: 'specializes on major course like complex analysis, computation and also had some proffesional studies during the process as a certified IT , Business intelligent data analyst and financial modellng valuation analyst , all just to improve my knowledge economically',
        },

        {
            id: 5,
            category: 'education',
            icon: <FaGraduationCap />,
            year: '2023',
            title: 'SOFTWARE ENGINEER(full-stack) <span> ALX Organization </span>',
            desc: 'These is a year proffesional online training with some other physical event ,where programming language like C, C++, PRINT F, HTML&CSS , JAVASCRIPT, REACT, PYTHON, MYSQL, NOSQL, GIT&GITHUB,Modelling etc, where learnt ,Both Backend and Frontend will be taught during the trianing and you will be chance to choose your speciality,so i specialize Frontened more ,which made me very Good with React and Javascript',
        },

        {
            id: 6,
            category: 'education',
            icon: <FaGraduationCap />,
            year: '2022',
            title: 'BIDA & FMVA <span> CORPORATE FINANCE INSTITUTE </span>',
            desc: 'BIDA meaning business intelligence data analyst and FMVA meaning financial modelling valuation analyst, These plartform i was able to learn business strategy proffesionally , and also languages alongside like montecarlo, python-fundamental, regression-analysis , powe bi , pivot, advance excell , tablaeu, sql, data-science Ai generative, etc..',
        },
    ];

    export const skills = [
        {
            id: 1,
            title: 'HTML',
            percentage: '37',
        },

        {
            id: 2,
            title: 'JAVASCRIPT',
            percentage: '89',
        },

        {
            id: 3,
            title: 'CSS',
            percentage: '67',
        },

        {
            id: 4,
            title: 'JQUERY',
            percentage: '58',
        },

        {
            id: 5,
            title: 'REACT',
            percentage: '87',
        },

        {
            id: 6,
            title: 'WORDPRESS',
            percentage: '98',
        },

        {
            id: 7,
            title: 'PYTHON',
            percentage: '45',
        },

        {
            id: 1,
            title: 'SQL',
            percentage: '66',
        },
    ];

    export const portfolio = [
        {
            id: 1,
            img: Work1,
            title: 'Photo Editing',
            details: [
                {
                    icon: <FiFileText />,
                    title: 'Project : ',
                    desc: 'Photo',
                },
                {
                    icon: <FiUser />,
                    title: 'Client : ',
                    desc: 'MegaTech',
                },
                {
                    icon: <FaCode />,
                    title: 'Language : ',
                    desc: 'Adobe XD',
                },
                {
                    icon: <FiExternalLink />,
                    title: 'preview : ',
                    desc: 'https://devmub-chart.netlify.app',
                },
            ],
        },

        {
            id: 2,
            img: Work2,
            title: 'Website Design',
            details: [
                {
                    icon: <FiFileText />,
                    title: 'Project : ',
                    desc: 'Website',
                },
                {
                    icon: <FiUser />,
                    title: 'Client : ',
                    desc: 'MegaTech',
                },
                {
                    icon: <FaCode />,
                    title: 'Language : ',
                    desc: 'Javascript',
                },
                {
                    icon: <FiExternalLink />,
                    title: 'preview : ',
                    desc: 'https://devmub-snap.netlify.app',
                },
            ],
        },

        {
            id: 3,
            img: Work3,
            title: 'Website Design',
            details: [
                {
                    icon: <FiFileText />,
                    title: 'Project : ',
                    desc: 'Landing Page',
                },
                {
                    icon: <FiUser />,
                    title: 'Client : ',
                    desc: 'Iwealth',
                },
                {
                    icon: <FaCode />,
                    title: 'Language : ',
                    desc: 'React',
                },
                {
                    icon: <FiExternalLink />,
                    title: 'preview : ',
                    desc: 'https://devmub-insure.netlify.app',
                },
            ],
        },

        {
            id: 4,
            img: Work4,
            title: 'Data analyst',
            details: [
                {
                    icon: <FiFileText />,
                    title: 'Project : ',
                    desc: 'Data Report',
                },
                {
                    icon: <FiUser />,
                    title: 'Client : ',
                    desc: 'Cremp',
                },
                {
                    icon: <FaCode />,
                    title: 'Language : ',
                    desc: 'power BI, Tablaeu, Pivot, Python, Excell',
                },
                {
                    icon: <FiExternalLink />,
                    title: 'preview : ',
                    desc: 'https://1drv.ms/x/s!AkkRWaE9SAOLkD-uORGMJ6Wa2F3Y',
                },
            ],
        },

        {
            id: 5,
            img: Work5,
            title: 'Web App Design',
            details: [
                {
                    icon: <FiFileText />,
                    title: 'Project : ',
                    desc: 'Shortening App',
                },
                {
                    icon: <FiUser />,
                    title: 'Client : ',
                    desc: 'Mega Tech',
                },
                {
                    icon: <FaCode />,
                    title: 'Language : ',
                    desc: 'HTML/CSS & JAVASCRIPT',
                },
                {
                    icon: <FiExternalLink />,
                    title: 'preview : ',
                    desc: 'https://dev-link-shortener-app.netlify.app',
                },
            ],
        },

        {
            id: 6,
            img: Work6,
            title: 'Wordpress Developer',
            details: [
                {
                    icon: <FiFileText />,
                    title: 'Project : ',
                    desc: 'Website',
                },
                {
                    icon: <FiUser />,
                    title: 'Client : ',
                    desc: 'Jabs small and medium Enterprise',
                },
                {
                    icon: <FaCode />,
                    title: 'Language : ',
                    desc: 'Wordpress & javascript',
                },
                {
                    icon: <FiExternalLink />,
                    title: 'preview : ',
                    desc: 'https://dev-jabmantech.pantheonsite.io',
                },
            ],
        },
    ];

    export const themes = [
        {
            id: 1,
            img: Theme1,
            color: 'hsl(252, 35%, 51%)',
        },

        {
            id: 2,
            img: Theme2,
            color: 'hsl(4, 93%, 54%)',
        },

        {
            id: 3,
            img: Theme3,
            color: 'hsl(271, 76%, 53%)',
        },

        {
            id: 4,
            img: Theme4,
            color: 'hsl(225, 73%, 57%)',
        },

        {
            id: 5,
            img: Theme5,
            color: 'hsl(43, 74%, 49%)',
        },

        {
            id: 6,
            img: Theme6,
            color: 'hsl(339, 81%, 66%)',
        },

        {
            id: 7,
            img: Theme7,
            color: 'hsl(80, 61%, 50%)',
        },

        {
            id: 8,
            img: Theme8,
            color: 'hsl(19, 96%, 52%)',
        },

        {
            id: 9,
            img: Theme9,
            color: 'hsl(88, 65%, 43%)',
        },

        {
            id: 10,
            img: Theme10,
            color: 'hsl(60, 100%, 50%)',
        },
    ];