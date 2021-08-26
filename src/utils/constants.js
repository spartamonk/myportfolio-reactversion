import {
  FaFacebook,
  FaLinkedin,
  FaSquarespace,
  FaBehance,
  FaInstagram,
  FaCode,
  FaSketch,
  FaAndroid,
  FaHome,
  FaGithub,
} from 'react-icons/fa'
import projectImg1 from '../assets/images/project-1.jpeg'
import projectImg2 from '../assets/images/project-2.jpeg'
import projectImg3 from '../assets/images/project-3.jpeg'
import projectImg4 from '../assets/images/project-4.jpeg'
import author from '../assets/images/hero-img-small.jpeg'

export const links = [
  { id: 1, name: 'home', url: '/' },
  {
    id: 2,
    name: 'about',
    url: '/about',
  },
  { id: 3, name: 'projects', url: '/projects' },
  { id: 4, name: 'contact', url: '/contact' },
]
export const socialIcons = [
  { id: 1, icon: <FaFacebook />, url: 'https://www.facebook.com/' },
  {
    id: 2,
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/',
  },
  { id: 3, icon: <FaSquarespace />, url: 'https://www.squarespace.com/' },
  { id: 4, icon: <FaBehance />, url: 'https://www.behance.com/' },
  { id: 5, icon: <FaInstagram />, url: 'https://www.instagram.com/' },
]
export const services = [
  {
    id: 1,
    title: 'web development',
    icon: <FaCode className='service-icon' />,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed obcaecati vero. ',
  },
  {
    id: 2,
    title: 'web design',
    icon: <FaSketch className='service-icon' />,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed obcaecati vero. ',
  },
  {
    id: 3,
    title: 'app design',
    icon: <FaAndroid className='service-icon' />,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed obcaecati vero. ',
  },
]
export const projects = [
  {
    id: 1,
    title: 'project title',
    clientName: 'client name',
    image: projectImg1,
    url: '/projects',
    layout: 'project-1',
  },
  {
    id: 2,
    title: 'project title',
    clientName: 'client name',
    image: projectImg2,
    url: '/projects',
    layout: 'project-2',
  },
  {
    id: 3,
    title: 'project title',
    clientName: 'client name',
    image: projectImg3,
    url: '/projects',
    layout: 'project-3',
  },
  {
    id: 4,
    title: 'project title',
    clientName: 'client name',
    image: projectImg4,
    url: '/projects',
    layout: 'project-4',
  },
]
export const frontEnd = [
  { id: 1, name: 'HTML/CSS', score: 50 },
  { id: 2, name: 'javascript', score: 70 },
  { id: 3, name: 'react', score: 47 },
]
export const backEnd = [
  { id: 1, name: 'node', score: 55 },
  { id: 2, name: 'php', score: 72 },
  { id: 3, name: 'python', score: 80 },
]
export const timeline = [
  {
    id: 1,
    year: 2020,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi autem, ea excepturi.',
  },
  {
    id: 2,
    year: 2019,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi autem, ea excepturi.',
  },
  {
    id: 3,
    year: 2018,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi autem, ea excepturi.',
  },
  {
    id: 4,
    year: 2017,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi autem, ea excepturi.',
  },
  {
    id: 5,
    year: 2016,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi autem, ea excepturi.',
  },
  {
    id: 6,
    year: 2015,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi autem, ea excepturi.',
  },
]
export const blogs = [
  {
    id: 1,
    title: 'article title',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etnisi ut a est eum tempora dolorum temporibus voluptatibus! Natus, provident.',
    time: '7 min read',
    image: projectImg1,
    author: author,
    url: '/projects',
  },
  {
    id: 2,
    title: 'article title',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etnisi ut a est eum tempora dolorum temporibus voluptatibus! Natus, provident.',
    time: '7 min read',
    image: projectImg2,
    author: author,
    url: '/projects',
  },
  {
    id: 3,
    title: 'article title',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etnisi ut a est eum tempora dolorum temporibus voluptatibus! Natus, provident.',
    time: '7 min read',
    image: projectImg3,
    author: author,
    url: '/projects',
  },
  {
    id: 4,
    title: 'article title',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etnisi ut a est eum tempora dolorum temporibus voluptatibus! Natus, provident.',
    time: '7 min read',
    image: projectImg4,
    author: author,
    url: '/projects',
  },
]
export const allProjects = [
  {
    id: 1,
    title: 'project name',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eveniet amet odit aperiam, provident cum possimus sapiente minus quos! Ipsum?',
    urlIcon: <FaHome />,
    socialIcon: <FaGithub />,
    url: 'https://www.youtube.com/channel/UC5xR76cCy_8YN1JMdyzuPgQ',
    sourceCode: 'https://github.com/',
    image: projectImg1,
  },
]
