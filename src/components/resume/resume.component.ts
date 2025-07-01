import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {educationFormat} from '../../models/education';
import {experienceFormat} from '../../models/experience';
import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements AfterViewInit {

  education: educationFormat[] = [
  {
    id: 1,
    year: '2020 - 2025',
    courseName: 'B.Sc. in Information and Communication Engineering',
    institute: 'Noakhali Science and Technology University, Bangladesh'
  },
  {
    id: 2,
    year: '2017 - 2019',
    courseName: 'Higher Secondary Certificate (Science)',
    institute: 'Kutubdia Government College, Cox’s Bazar'
  }
];

 experience: experienceFormat[] = [
  {
    id: 1,
    year: 'Feb 2024 - Apr 2024',
    position: 'Internship Trainee',
    companyName: 'Business Automation Ltd.'
  },
  {
    id: 2,
    year: '2020 - Present',
    position: 'Problem Solver & Competitive Programmer',
    companyName: 'Online Judges: Codeforces, LeetCode, CodeChef'
  }
];

  private context !: any;

  @ViewChild('exp') educationRef !: ElementRef;

  ngAfterViewInit(): void {
    this.context = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const timeline = gsap.timeline();
      timeline.from([this.educationRef.nativeElement], {
        opacity: 0,
        duration: 0.5,
        filter: 'blur(10px)',
      })
    })
  }


}
