import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-vision-section',
  templateUrl: './vision-section.component.html',
  styleUrls: ['./vision-section.component.css'],
  animations: [
    // 🔹 Hover Animation (Grow Effect)
    trigger('hoverEffect', [
      state('normal', style({ transform: 'scale(1)', boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)' })),
      state('hovered', style({ transform: 'scale(1.05)', boxShadow: '0px 15px 50px rgba(0, 0, 0, 0.4)' })),
      transition('normal <=> hovered', animate('0.3s ease-in-out')),
    ]),

    // 🔹 Click Animation (Flip Effect)
    trigger('flipEffect', [
      state('front', style({ transform: 'rotateY(0deg)' })),
      state('back', style({ transform: 'rotateY(180deg)' })),
      transition('front <=> back', animate('0.6s ease-in-out'))
    ])
  ]
})
export class VisionSectionComponent {
  isHovered = false;
  isFlipped = false;

  toggleHover(state: boolean) {
    this.isHovered = state;
  }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
}
