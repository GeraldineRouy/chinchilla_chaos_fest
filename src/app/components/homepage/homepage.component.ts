import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [NgIf, NgForOf],
  templateUrl: './homepage.component.html',
  standalone: true,
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  title: string = 'Fluff meets Fury !';
  heroImageUrl: string = '/images/fest-hero.png';
  textLines: string[] = [
    'Get ready for the most absurdly epic metal festival of the year.',
    'At the heart of the chaos: chinchillas — cute, fierce, and louder than ever.',
    'From black metal screams to industrial roars, our lineup of fictional fur-fueled bands will melt your face and warm your heart.',
    '🐾 Join the rebellion. Worship the fluff. Embrace the noise.',
    'Let the chaos begin.'
  ];
  isActive: boolean = false;

  display():void {
    this.isActive = !this.isActive;
  }

  ngOnInit(): void {
  }

}
