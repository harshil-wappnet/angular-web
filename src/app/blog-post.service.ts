import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  private apiUrl =
    'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9b0d9a59839f45c48098db472f900982'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
