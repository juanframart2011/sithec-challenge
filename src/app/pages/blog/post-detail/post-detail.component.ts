import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/core/models/post.model';
import { BlogService } from 'src/app/core/services/blog.service';

import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class PostDetailComponent {
  post?: Post;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const foundPost = this.blogService.getPostById(id);

    if (!foundPost) {
      this.router.navigate(['/']);
      return;
    }

    this.post = foundPost;

    // Guardar en localStorage
    localStorage.setItem('lastViewedPost', JSON.stringify(this.post));
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}