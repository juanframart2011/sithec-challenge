import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/core/models/post.model';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input() post!: Post;

  constructor(private router: Router) {}

  goToDetail(): void {
    this.router.navigate(['/post', this.post.id]);
  }
}