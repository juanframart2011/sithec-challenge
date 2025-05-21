import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts: Post[] = [
    {
      id: 1,
      title: 'Argentina Campeón del mundo',
      date: '2025-05-01',
      summary: 'This is a summary of the first post.',
      content: 'Full content of the first post.',
      image: 'assets/images/argentina-campeon-mundo.jpg',
    },
    {
      id: 2,
      title: 'Argentina Campeón de América',
      date: '2025-05-01',
      summary: 'This is a summary of the first post.',
      content: 'Full content of the first post.',
      image: 'assets/images/argentina-campeon-america.jpg',
    },
    {
      id: 3,
      title: 'America Campeón de la Finalissima',
      date: '2025-05-01',
      summary: 'This is a summary of the first post.',
      content: 'Full content of the first post.',
      image: 'assets/images/argentina-campeon-finalissima.jpg',
    },
    {
      id: 4,
      title: 'Messi y sus campeonatos',
      date: '2025-05-01',
      summary: '',
      content: 'Full content of the first post.',
      image: 'assets/images/messi-campeonatos.jpg',
    },
  ];

  getPosts(): Post[] {
    return this.posts;
  }

  getPostById(id: number): Post | undefined {
    return this.posts.find((post) => post.id === id);
  }
}