import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../blog-post.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent implements OnInit {
  blogs: any[] = [];
  constructor(private blogService: BlogPostService) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((data) => {
      this.blogs = data?.articles;
    });
    console.log('blog', this.blogs); // Move console.log here
  }
}
