import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  cards = [
    { title: 'Design', content: 'At Views Investments, we pride ourselves on being a leading real estate brokerage with over seven years of extensive experience across Egypt.', image: 'assets/views logos rgb-13.png', bgColor: '#bcc0c4' },
    { title: 'Community', content: 'Our deep expertise and comprehensive market knowledge have established us as a trusted name in the industry.', image: 'assets/views logos rgb-15.png', bgColor: '#FB923C' },
    { title: 'Technology', content: 'Our commitment is to be the most reliable and preferred choice for our clients,', image: 'assets/views logos rgb-07.png', bgColor: '#60A5FA' },
    { title: 'Sustainability', content: 'offering unparalleled service and insight in the dynamic real estate market.', image: 'assets/views logos rgb-05.png', bgColor: '#34D399' }
  ];
  
  selectedCard = 0;
  leavingCard = -1;  // Track the card that is leaving

  showNextCard() {
    this.leavingCard = this.selectedCard; // Mark current card as leaving

    setTimeout(() => {
      this.selectedCard = (this.selectedCard + 1) % this.cards.length;
      this.leavingCard = -1; // Reset the leaving card
    }, 500); // Delay to allow smooth transition effect
  }
}
