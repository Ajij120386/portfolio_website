import {AfterViewInit, Component} from '@angular/core';
import {projectsFormat} from '../../models/projects';
import {ProjectCardComponent} from '../../custom/projectcard/projectcard.component';
import gsap, { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectCardComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit {

  private context !: any;
  
  projects: projectsFormat[] = [
  {
    id: 1,
    imgUrl: 'assets/p-1.png',
    title: 'News Site Project',
    description:
      'A dynamic PHP-based news website with user authentication, role-based access, and an admin panel for managing news, categories, and users.',
    techStack: 'PHP, HTML, CSS, MySQL',
    projectUrl: 'https://github.com/Ajij120386/News_Site_Project'
  },
  {
    id: 2,
    imgUrl: 'assets/p-2.png',
    title: 'E-commerce Project',
    description:
      'A PHP-based eCommerce platform with user authentication, product management, cart system, order tracking, and an admin panel for managing categories, orders, and users.',
    techStack: 'PHP, HTML, CSS, JS, MySQL',
    projectUrl: 'https://github.com/Ajij120386/Ecommerce-Project'
  },
  {
    id: 3,
    imgUrl: 'assets/p-3.png',
    title: 'University Website',
    description:
      'A responsive, mobile-friendly university website designed using Bootstrap, inspired by NSTU, with scalability and easy customization in mind.',
    techStack: 'HTML, CSS, Bootstrap',
    projectUrl: 'https://github.com/Ajij120386/University_Website'
  },
  {
    id: 4,
    imgUrl: 'assets/p-4.jpg',
    title: 'Machine Learning Project',
    description:
      'Explored ML concepts via projects like price prediction and IPL score prediction using regression, classification, and clustering algorithms.',
    techStack: 'Python, Pandas, Numpy, scikit-learn',
    projectUrl: ''
  }
];


  ngAfterViewInit(): void {
    this.context = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const timeline = gsap.timeline();
      timeline.from('#projects', {
        opacity: 0,
        duration: 0.5,
        filter: 'blur(10px)',
      })
    })
  }
}
