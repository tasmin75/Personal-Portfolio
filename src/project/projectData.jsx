import project1_1 from '../assets/project1_1.png'
import project2_1 from '../assets/project2_1.png'
import project3_1 from '../assets/project3_1.png'

const projectData = [
    {
        id: 1,
        title: 'kanban board',
        description: 'A Kanban Board created with React with drag and drop functionality.Along with add, delete card and list.Features: Home page with add card and add list feature, Draggable and Droppable, Card details with activity log.',
        image: project2_1,
        github: "https://github.com/tasmin75/Kanban-Board-Project.git",
        live: "https://kanban-project4.netlify.app/",
        tags: ['React', 'Javascript', 'HTML', 'CSS', 'React-beautiful-dnd', 'Material-UI', 'uuid', 'Redux-toolkit']
    },
    {
        id: 2,
        title: 'Twitter Clone',
        description:'A twitter clone is built in react with login and registration features, protected routing, and appropriate form validation.Features : Sign-up,Sign-in,Add, delete tweets, Feed posts like And unlike feature.Areas Of Responsibility :-Home Page, Feed section,Add tweet ,Sign-in and Sign-up page.',
        image: project1_1,
        github: "https://github.com/tasmin75/Twitter_Clone.git",
        live: "https://twitter-clone-website-ok09.onrender.com",

        tags: ['React', 'Javascript', 'CSS', 'Material-UI', 'Local-storage', ]
    },
    {
        id: 3,
        title: 'Gym Website',
        description: 'A Gym website created with React.js with multiple pages with login register functionality alongwith proper validation.Features:- Sign in, Sign up, Home page, Aboutus, Program, Training, Pricing. Areas Of Responsibility :- Home page, Aboutus page, Training page, Program page, Pricing.',
        image: project3_1,
        github: "https://github.com/tasmin75/gym-website.git",
        live: "https://oxyggen-gym.onrender.com/",

        tags: ['React', 'Javascript', 'CSS', 'Material-UI', 'Local-storage', ]
    },
]

export default projectData
