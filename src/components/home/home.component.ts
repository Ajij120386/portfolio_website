import { NgClass } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, signal, ViewChild } from '@angular/core';
import gsap, { ScrollTrigger } from 'gsap/all';
import { Subscription } from 'rxjs';
import { techFormat } from '../../models/techFormat';
import { theme } from '../../models/theme';
import { ThemeService } from '../../services/themeToggle/theme.service';

@Component({
  selector: 'app-home',
  imports: [NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  techStackFirst: techFormat[] = [
  {
    id: 1,
    logo: 'assets/c.webp',
    name: 'C',
    description:
      'General-purpose programming language known for performance and system-level access.',
  },
  {
    id: 2,
    logo: 'assets/cpp.webp',
    name: 'C++',
    description:
      'Powerful object-oriented programming language widely used in competitive programming and software development.',
  },
  {
    id: 3,
    logo: 'assets/python.webp',
    name: 'Python',
    description:
      'High-level programming language known for readability and extensive libraries in data science and development.',
  },
  {
    id: 4,
    logo: 'assets/php.jpg',
    name: 'PHP',
    description:
      'Popular server-side scripting language for creating dynamic web applications.',
  },
  {
    id: 5,
    logo: 'assets/angular.webp',
    name: 'Angular',
    description:
      'Comprehensive framework for building dynamic, scalable front-end web applications.',
  },
];
testStackSecond: techFormat[] = [
  {
    id: 6,
    logo: 'assets/html.webp',
    name: 'HTML',
    description:
      'Standard markup language for creating and structuring content on the web.',
  },
  {
    id: 7,
    logo: 'assets/css.jpg',
    name: 'CSS',
    description:
      'Style sheet language used to describe the look and formatting of HTML documents.',
  },
  {
    id: 8,
    logo: 'assets/javascript.png',
    name: 'JavaScript',
    description:
      'Versatile programming language enabling dynamic and interactive features on websites.',
  },
  {
    id: 9,
    logo: 'assets/sql.webp',
    name: 'MySQL',
    description:
      'Reliable relational database management system used for structured data storage and queries.',
  },
  {
    id: 10,
    logo: 'assets/github.png',
    name: 'Git & GitHub',
    description:
      'Version control system and platform for collaboration and code management.',
  },
];

  themeType = signal('dark');
  private subscription!: Subscription;
  private context!: any;
  @ViewChild('description') desRef !: ElementRef;

  ngAfterViewInit(): void {
    this.context = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const timeline1 = gsap.timeline();
      timeline1.from([this.desRef.nativeElement, '.contentType', '.subheading'], {
        opacity: 0,
        duration:0.5,
        filter: 'blur(10px)',
      });

    });
  }

  constructor(private theme: ThemeService) {
    this.subscription = this.theme.themeListener$.subscribe((value: theme) => {
      this.themeType.set(value);
    });
  }

  ngOnDestroy(): void {
    this.context.revert();
  }
}
