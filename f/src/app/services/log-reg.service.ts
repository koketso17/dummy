import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogRegService {

  url: string = "http://localhost:5000/reg";
  url_auth: string = "http://localhost:5000/auth";
  allPosts: string = "http://localhost:5000/viewallposts";
  addpost: string = "http://localhost:5000/addposts";
  viewSingleDetail: string = "http://localhost:5000/viewsingledetails";

  constructor(private http: HttpClient) { }


  public add_user(name, surname, email, password) {

    return this.http.post(this.url, { name, surname, email, password});

  }

  public check_user ( email, password ) {

    return this.http.post<any>(this.url_auth, { email: email, password: password});

  }

  public add_post (post) {

    return this.http.post(this.addpost, {post});

  }

  public view_single_details() {

    return this.http.get<any>(this.viewSingleDetail);

  }


}
