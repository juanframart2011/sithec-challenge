import { Component } from '@angular/core';
import { Post } from 'src/app/core/models/post.model';
import { BlogService } from 'src/app/core/services/blog.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts: Post[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.posts = this.blogService.getPosts();

    const lastViewed = localStorage.getItem('lastViewedPost');
    if (lastViewed) {
      var post: Post = JSON.parse(lastViewed);
    }
  }
}