import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  // Mock data for reviews
  private reviews = [
    { name: 'Esther Howard', review: 'Completed the task and added the required documentation, can someone please ....' },
    { name: 'Wade Warren', review: 'Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers.' },
    { name: 'Brooklyn Simmons', review: 'Twenty 30-second applications within half an hour is well in excess.' },
    { name: 'Robert Fox', review: 'An interesting implication of the 2007 study concerns the use of hand sanitizers.' },
    { name: 'Dianne Russell', review: 'I found a 2007 study on effects of hand sanitizers on blood alcohol level in adults.' },
    { name: 'Ralph Edwards', review: 'The principal alcohol in Purell hand sanitizer (to take the most talked-about brand).' },
    { name: 'Theresa Webb', review: 'Alcohol based exposures through inadvertently consuming hand sanitizer.' },
    { name: 'Arlene McCoy', review: "I'm grateful for the supportive work environment during personal challenges." },
  ];

  constructor() {}

  // Method to fetch reviews
  getReviews() {
    return [...this.reviews];
  }
}
