import vinitruck from '../../images/ProductPage/vinitruckMobile.webp';
import vinitruckDesktop from '../../images/ProductPage/vinitruckDesktop.webp';
import dentaCareDesktop from '../../images/ProductPage/dentaCareDesktop.webp';
import dentaCareMobile from '../../images/ProductPage/dentaCareMobile.webp';
import result from '../../images/ProductPage/result.webp';
import resultDesktop from '../../images/ProductPage/resultDesktop.webp';
import dentaResultDesktop from '../../images/ProductPage/dentaResultDesktop.webp';
import dentaResultMobile from '../../images/ProductPage/dentaResultMobile.webp';
import icon1 from '../../images/ProductPage/stages1.png';
import icon2 from '../../images/ProductPage/stages2.png';
import icon3 from '../../images/ProductPage/stages3.png';
import icon4 from '../../images/ProductPage/stages4.png';
import icon5 from '../../images/ProductPage/stages5.png';
import dentaAsideMobile from '../../images/ProductPage/asideDentaCareMobile.webp';
import dentaAsideDesktop from '../../images/ProductPage/asideDentaCareDesktop.webp';
import projectMobile from '../../images/ProductPage/projectMobile.webp';
import projectDesktop from '../../images/ProductPage/project.webp';
import vini1 from '../../images/ProductPage/vini1.png';
import vini2 from '../../images/ProductPage/vini2.png';
import vini3 from '../../images/ProductPage/vini3.png';
import denta1 from '../../images/ProductPage/denta1.png';
import denta2 from '../../images/ProductPage/denta2.png';
import denta3 from '../../images/ProductPage/denta3.png';
import project1 from '../../images/HomePage/project1.webp';
import project1Desktop from '../../images/HomePage/project1Desktop.webp';
import project2 from '../../images/ProductPage/project2.webp';
import project2Desktop from '../../images/ProductPage/project2Desktop.webp'

export const productsArr = (t) => [
    {
     title:"ViniTruck",
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
     summary: [
       {title: t('enhanced'), text: t('enhanced-text'), summaryIcon: vini1.src, id: 1},
       {title: t('reliability'), text: t('reliability-text'), summaryIcon: vini2.src, id: 2},
       {title: t('increased-attraction'), text: t('increased-attraction-text'), summaryIcon: vini3.src, id: 3}
     ],
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
     moreProject: [
        {
           filter: 'LANDING PAGE',
           imgMobile: project2,
           imgDesktop: project2Desktop,
           href: `/projects/${'dentacare'}/`,
           title: 'DentaCare',
           text: t('crafting'),
           id: 'dentacare',
        }
     ],
     task: t('taskSection'),
     solution: t('solutionText'),
     id: 'vinitruck'
    },
    {
        title:"DentaCare",
        description: t('dentist-clinic'),
        typeSite: 'LANDING PAGE', 
        linkToSite: 'https://www.behance.net/uviten',
        technologies: 'Figma, JS, HTML, CSS',
        industry: 'Healthcare',
        timeline: '1 weeks',
        team: 'PM, UI/UX Designer',
        asideImgMobile: dentaAsideMobile.src,
        asideImgDesktop: dentaAsideDesktop.src,
        imgResult: dentaResultMobile.src,
        imgResultDesktop: dentaResultDesktop.src,
        imgDesktop: dentaCareDesktop.src,
        imgMobile: dentaCareMobile.src,
        summary: [
            {title: t('attracting'), text: t('attracting-text'), summaryIcon: denta1.src, id: 1},
            {title: t('increased-brand'), text: t('increased-text'), summaryIcon: denta2.src, id: 2},
            {title: t('convenient-booking'), text: t('convenient-text'), summaryIcon: denta3.src, id: 3}
          ],
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
        ],
        task: t('denta-task'),
        solution: t('denta-solution'),
        moreProject: [
         {
            filter: 'LANDING PAGE',
            imgMobile: project1,
            imgDesktop: project1Desktop,
            href: `/projects/${'vinitruck'}/`,
            title: 'ViniTruck',
            text: t('redesign'),
            id: 'vinitruck',
         }
        ],
        id: 'dentacare'
    }
]
