import vinitruck from '../../images/ProductPage/vinitruckMobile.png';
import vinitruckDesktop from '../../images/ProductPage/vinitruckDesktop.png';
import result from '../../images/ProductPage/result.png';
import resultDesktop from '../../images/ProductPage/resultDesktop.png';
import icon1 from '../../images/ProductPage/stages1.png';
import icon2 from '../../images/ProductPage/stages2.png';
import icon3 from '../../images/ProductPage/stages3.png';
import icon4 from '../../images/ProductPage/stages4.png';
import icon5 from '../../images/ProductPage/stages5.png';
import projectMobile from '../../images/ProductPage/projectMobile.png';
import projectDesktop from '../../images/ProductPage/project.png';

export const productsArr = () => [
    {
     title:"Vini Truck",
     typeSite: 'LANDING PAGE', 
     linkToSite: 'https://vinitruck.com',
     technologies: 'Figma, JS, HTML, CSS',
     industry: 'Transportation, logistic',
     timeline: '1 month',
     team: 'Project Manager, UI/UX Designer, Frontend Developer, QA',
     asideImgMobile: projectMobile.src,
     asideImgDesktop: projectDesktop.src,
     imgResult: result.src,
     imgResultDesktop: resultDesktop.src,
     imgDesktop: vinitruckDesktop.src,
     imgMobile: vinitruck.src,
     stages: [
        {
            title:'Briefing and Analysis', 
            card: 'card1',
            text: 'text1',
            titleText: "We conducted a briefing with the client to learn about their needs. Following this, we analyzed a variety of websites from competitors and industry leaders to understand the mood and standards of transportation companies globally. We then outlined the expected structure of the future website, considering the client's expectations for the brand's look and feel.",
            imgIcon: icon1.src,
            id: 1
        },
        {
            title: 'Ideate and Moodboard', 
            card: 'card2',
            text: 'text2',
            titleText: "We brainstormed creative ideas and compiled a moodboard to visualize the design direction. This included gathering inspiration, color schemes, typography, and imagery that aligned with the client's brand and industry trends.",
            imgIcon: icon2.src,
            id: 2
        },
        {
            title: 'UI Design', 
            card: 'card3',
            text: 'text3',
            titleText: "During the UI Design stage, we transformed the moodboard concepts into detailed interface designs. This included creating wireframes and high-fidelity mockups to develop a user-friendly and visually appealing interface.",
            imgIcon: icon3.src,
            id: 3
        },
        {
            title: 'Development', 
            card: 'card4',
            text: 'text4',
            titleText: "During the Development stage, we coded the UI designs into a functional website, ensuring responsiveness and performance. We integrated interactive elements, conducted thorough testing, and optimized for a smooth user experience before deployment.",
            imgIcon: icon4.src,
            id: 4
        },
        {
            title:'Quality Assurance', 
            card: 'card5',
            text: 'text5',
            titleText: "We rigorously tested the website to identify and fix any bugs or issues. This involved checking functionality, performance, and responsiveness across different devices and browsers. We ensured that all features worked seamlessly and that the site met the highest standards of quality and usability before the final launch.",
            imgIcon: icon5.src,
            id: 5
        }
     ],
     task: "Our task was to redesign the website with a sleek and visually captivating style, incorporating the latest trends and aesthetics in web design, to attract more clients and remain competitive in the market.",
     solution: "Refreshing typography, color palettes, and overall visual components to ensure they resonate with present-day standards.  Incorporating interactive elements and multimedia content to engage users effectively. Additionally, crafting a cohesive branding strategy to strengthen the website's identity and messaging.",
     id: 1
    }
]