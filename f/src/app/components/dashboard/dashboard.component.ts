import { Component, OnInit } from '@angular/core';
import { LogRegService } from '../../services/log-reg.service'

class Post {
  id: number;
  content: string;
  comments?: string[];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'myApp';
  id = 0;

  data : any = [{}];

  post: string = '';
  posts: Post[] = [];
  comment: string = '';


  public oneAtATime: boolean = true;


  constructor (private LogRegService: LogRegService) { }

  ngOnInit() {
  }

  getData(){
    this.LogRegService.view_single_details().subscribe((res) =>
    {
      console.log(res);

      this.data = res.results;
    })
  }


/*   add_post(){
    console.log('Post Added');
    this.LogRegService.add_post(this.post).subscribe(data=> {
      console.log(data);
    })

  } */


  add_post () {
    console.log( this.post );

    let myLocalPost = {
      id: ++this.id,
      content: this.post,
      comments: []
    }

    this.posts.push( myLocalPost ); 


  }


  delete_post (i) {
    
    this.posts.pop();
    console.log(i);

  }


  add_comment ( i, comment ) {
    this.posts[ i ].comments.push( comment.value );
    this.comment = '';
    console.log( this.posts[ i ] );


  }


  delete_comment ( i, comment ) {
    
    this.posts[ i ].comments.pop();
    this.comment = '';
    console.log( i );

  }


  //like&dislike

  numberofLikes: number = 0;

  likeButtonClick() {

    this.numberofLikes++;
  }

  disLikeButtonClick () {
    if(this.numberofLikes>0)
    this.numberofLikes--;
  }


}
