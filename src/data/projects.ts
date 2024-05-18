import type { ProjectTile, TagItem } from '@/types/projects'
import CliftonThumbail from '@/assets/projects/clifton-thumbnail.png'
import IllovoThumbail from '@/assets/projects/illovo-careers-thumbnail.png'
import TevoThumbail from '@/assets/projects/tevo-thumbnail.png'
import DoMoreThumbail from '@/assets/projects/do-more-thumbnail.png'
import PortfolioThumbail from '@/assets/projects/portfolio-thumbnail.png'

export const tagList: TagItem[] = [
  {
    id: 'vue-2',
    name: 'Vue 2'
  },
  {
    id: 'vue-3',
    name: 'Vue 3'
  },
  {
    id: 'typescript',
    name: 'Typescript'
  },
  {
    id: 'javascript',
    name: 'Javascript'
  },
  {
    id: 'api',
    name: 'API Integration'
  },
  {
    id: 'vuex',
    name: 'Vuex'
  },
  {
    id: 'pinia',
    name: 'Pinia'
  },
  {
    id: 'html',
    name: 'HTML'
  },
  {
    id: 'css-scss',
    name: 'CSS/ SCSS'
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS'
  },
  {
    id: 'oc',
    name: 'Orchard Core'
  },
  {
    id: 'element-ui',
    name: 'Element UI'
  },
  {
    id: 'element-plus',
    name: 'Element Plus'
  },
  {
    id: 'liquid',
    name: 'Liquid JS'
  },
  {
    id: 'socials',
    name: 'Socials Integration'
  },
  {
    id: 'webpack',
    name: 'Webpack'
  },
  {
    id: 'vite',
    name: 'Vite'
  }
]

export const projects: ProjectTile[] = [
  {
    title: 'Clifton Clothing',
    tags: [
      'vue-3',
      'vue-2',
      'typescript',
      'javascript',
      'vuex',
      'api',
      'socials',
      'bootstrap',
      'element-ui',
      'html',
      'css-scss',
      'liquid',
      'webpack'
    ],
    imageSrc: CliftonThumbail,
    description: `
      Clifton Clothing is a custom built eCommerce site that sells custom clothing. It makes use of a custom built order management system (OMS).

      The public facing site was custom built and primarily uses Vue 3 (class components), Typescript, Vuex and Bootstrap. It uses a custom built API and has integrations with Stripe, Instagram and Google/ Facebook auth. It has many features such as a custom design tool, custom online stores for groups/ clubs, order tracking and a quoting system - just to name a few!
      
      The OMS primarily uses Vue 2 (class components), Typescript, Vuex and Element UI. It is a very complex custom built system that handles every aspect of the business, like product creation, enquiries, quotes and the order management process.
      
      Although I was not yet working at my current employer during the project planning phases, I joined the project on day one of the build phase (January 2022) and started building the frontend of both sites from the ground up. Initially there was a fullstack senior developer working on the most complex logic of the custom design tool, but he then left the company leaving me as the lead frontend developer. It was challenging picking up the pieces of somebody else's work but I grew rapidly in the process. Today I am still the lead frontend developer on this project, having built majority of the frontend of both sites (another frontend developer sometimes assists to various degrees). Two years after going to production, new features are still being worked on and as the lead frontend developer, I am responsible for planning and implementing these new features along with the lead backend developer.`,
    links: [{ text: 'Visit public site', url: 'https://www.cliftonclothing.com/' }]
  },
  {
    title: 'Monique Blignaut Portfolio',
    tags: ['vue-3', 'typescript', 'javascript', 'tailwind', 'html', 'css-scss', 'vite'],
    imageSrc: PortfolioThumbail,
    description: `
      I built this portfolio recently for a number of reasons - primarily to showcase the projects I have worked on but also to have a fun way to use technologies and tools I am not able to use at my current job.

      This site was built using Vue 3 (composition API, script setup), Typescript and Tailwind CSS. I made all of the visual elements in Adobe Illustrator and set up two components to handle SVGs (one for general SVGs, another for the alphabet SVGs) to allow easy customisation of the SVG colours, sizes, hover states etc from within the project.
      
      I highly enjoyed working with Tailwind CSS and also used this project as an opportunity to test out the framework to potentially use for future projects at my current job.`,
    links: [{ text: 'You are on this site!', url: 'https://www.moniqueblignaut.co.za/', disabled: true }]
  },
  {
    title: 'Illovo Careers Portal',
    tags: [
      'vue-3',
      'typescript',
      'javascript',
      'api',
      'pinia',
      'bootstrap',
      'element-plus',
      'html',
      'css-scss',
      'liquid',
      'webpack'
    ],
    imageSrc: IllovoThumbail,
    description: `Illovo Careers Portal is a new career portal that replaced Illovo's former career portal. This includes a user facing site as well as an admin portal where job post and applicant profiles are managed.

    The site primarily uses Vue 3 (composition API, script setup), Typescript, Bootstrap and Element Plus. It uses a custom built API.
    
    I am the lead frontend developer on the project and built majority of the site's frontend (another frontend developer sometimes assists to various degrees). I recently had to train Illovo staff from all over Africa on how to use the new system in it's current state and to workshop what features they would like to see in the future.`,
    links: [{ text: 'Visit public site', url: 'https://www.illovocareers.co.za/' }]
  },
  {
    title: 'Tevo Brochureware',
    tags: ['vue-3', 'typescript', 'javascript', 'bootstrap', 'html', 'css-scss', 'webpack'],
    imageSrc: TevoThumbail,
    description: `This project began as only one brochureware site for Tevo's brand, Berkart. The site then became a template for some of Tevo's other brands, like Magneto Power and Magneto Energy. The main goal of these sites was to give these brands credibility and an online presence, as well as to handle warranty registrations for consumers.

    These sites were primarily built using Vue 3 (class components), Typescript and Bootstrap.
    
    I am the lead frontend developer on Berkart and Magneto Power having built the sites, although any minor updates are generally undertaken by others these days.`,
    links: [
      { text: 'Visit public site 1', url: 'https://www.magnetopower.co.za/' },
      { text: 'Visit public site 2', url: 'https://www.berkart.co.za/' }
    ]
  },
  {
    title: 'DoMore Foundation',
    tags: ['oc', 'javascript', 'bootstrap', 'html', 'css-scss', 'liquid'],
    imageSrc: DoMoreThumbail,
    description: `The DoMore Foundation, founded by RCL Foods, is a non-profit organisation that focuses on youth and community development programmes.

    The site was custom built using Orchard Core to allow the client to manage their content and to reduce future development costs.
    
    I was the lead frontend developer on the project, building the entire site. It was my first experience building a site completely in Orchard Core and the experience served me well for future Orchard Core projects. The client now manages the site content themselves through the CMS.`,
    links: [{ text: 'Visit public site', url: 'https://domore.org.za/' }]
  }
]
