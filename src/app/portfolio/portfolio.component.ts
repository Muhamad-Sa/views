import { Component } from '@angular/core';
@Component({ selector: 'app-portfolio', templateUrl: './portfolio.component.html', styleUrls: ['./portfolio.component.css'] })
export class PortfolioComponent {
  portfolio = [
    { title: 'Luxury Apartments', category: 'residential', image: 'assets/portfolio1.jpg' },
    { title: 'Corporate Offices', category: 'commercial', image: 'assets/portfolio2.jpg' },
    { title: 'Retail Spaces', category: 'commercial', image: 'assets/portfolio3.jpg' },
  ];
  filteredPortfolio = this.portfolio;
  filter(category: string) {
    this.filteredPortfolio = category === 'all' ? this.portfolio : this.portfolio.filter(item => item.category === category);
  }
}