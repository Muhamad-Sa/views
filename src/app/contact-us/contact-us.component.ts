import { Component } from '@angular/core';
@Component({ selector: 'app-contact-us', templateUrl: './contact-us.component.html', styleUrls: ['./contact-us.component.css'] })
export class ContactUsComponent {
  contact = { name: '', email: '', message: '' };
  onSubmit() { console.log('Contact Form Submitted', this.contact); }
}