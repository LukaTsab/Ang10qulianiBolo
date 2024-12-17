// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-reviews-page',
//   standalone: true,
//   imports: [],
//   templateUrl: './reviews-page.component.html',
//   styleUrl: './reviews-page.component.css'
// })
// export class ReviewsPageComponent {

// }


// 2

import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../services/reviews.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reviews-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews-page.component.html',
  styleUrl: './reviews-page.component.css',
})
export class ReviewsPageComponent implements OnInit {
  reviews: any[] = []; // Full list of reviews
  filteredReviews: any[] = []; // Filtered list for display

  constructor(private reviewsService: ReviewsService) {}

  ngOnInit(): void {
    // Fetch reviews on initialization
    this.reviews = this.reviewsService.getReviews();
    this.filteredReviews = [...this.reviews]; // Initialize filtered list
  }

  // Search functionality
  search(event: Event): void {
    const query = (event.target as HTMLInputElement).value.toLowerCase();

    this.filteredReviews = this.reviews.filter((review) =>
      review.name.toLowerCase().includes(query) ||
      review.review.toLowerCase().includes(query)
    );
  }

  // Get initials for display
  getInitials(name: string): string {
    if (!name) return '';
    const [firstName, lastName] = name.split(' ');
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  }
}
