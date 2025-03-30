import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  defaultImage = '/sampleimages/sample.png';

  charts = [
    { title: 'Sales Overview', image: '', alt: 'Sales overview chart' },
    { title: 'User Growth', image: '', alt: 'User growth analysis' }, // Missing image, fallback will be used
    { title: 'Revenue Breakdown', image: '', alt: 'Revenue breakdown chart' },
    { title: 'Product Performance', image: '', alt: 'Product performance metrics' }, // Missing image
    { title: 'Customer Retention', image: '', alt: 'Customer retention trends' },
    { title: 'Traffic Analysis', image: '', alt: 'Website traffic analysis' }, // Missing image
    { title: 'Order Trends', image: '', alt: 'Order trends visualization' },
    { title: 'Conversion Rates', image: '', alt: 'Conversion rate statistics' } // Missing image
  ];
}
