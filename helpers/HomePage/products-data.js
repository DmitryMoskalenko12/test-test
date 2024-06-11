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

export const productsArr = (t) => [
    {
     title:"Vini Truck",
     description: t('refreshing'),
     typeSite: 'LANDING PAGE', 
     linkToSite: 'https://vinitruck.com',
     technologies: 'Figma, JS, HTML, CSS',
     industry: 'Transportation, logistic',
     timeline: '1 month',
     team: 'PM, UI/UX Designer, Frontend Developer, QA',
     asideImgMobile: projectMobile.src,
     asideImgDesktop: projectDesktop.src,
     imgResult: result.src,
     imgResultDesktop: resultDesktop.src,
     imgDesktop: vinitruckDesktop.src,
     imgMobile: vinitruck.src,
     stages: [
        {
            title:t('briefing'), 
            card: 'card1',
            text: 'text1',
            titleText: t('briefing-text'),
            imgIcon: icon1.src,
            id: 1
        },
        {
            title: t('ideate'), 
            card: 'card2',
            text: 'text2',
            titleText: t('ideate-text'),
            imgIcon: icon2.src,
            id: 2
        },
        {
            title: t('ui-design'), 
            card: 'card3',
            text: 'text3',
            titleText: t('ui-design-text'),
            imgIcon: icon3.src,
            id: 3
        },
        {
            title: t('development'), 
            card: 'card4',
            text: 'text4',
            titleText: t('developmen-text'),
            imgIcon: icon4.src,
            id: 4
        },
        {
            title: t('assurance'), 
            card: 'card5',
            text: 'text5',
            titleText: t('assurance-text'),
            imgIcon: icon5.src,
            id: 5
        }
     ],
     task: t('taskSection'),
     solution: t('solutionText'),
     id: 1
    }
]