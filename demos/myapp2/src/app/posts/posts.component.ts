import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts : Post[];
  private url: string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { 

        //construct an http get request
        this.http.get<Post[]>(this.url)
                  .subscribe( 
                    (response)=>{
                      console.log('Data received from server succuessfully')
                      console.log(response)
                      this.posts = response;
                    },
                    (error) => {
                      console.log('something went wrong...')
                      console.log(error)
                    }
                  )
  }


  ngOnInit(): void {
  }

  handleAddPost(){
    const newPostObject = {title: "this is new title", body: "this is new body", userId: 1}

      //construct a post request
      this.http.post<Post>(this.url, newPostObject)
                .subscribe(
                  (response) => {
                      this.posts.unshift(response);
                  },
                  (error)=>{}
                )
  }


  handleDeletePost(post){
      this.http.delete(this.url + '/' + post.id)
                  .subscribe(
                    (response) => {
                      const index = this.posts.indexOf(post)
                      this.posts.splice(index, 1);
                    },
                    (error)=>{
                      console.log(error)
                    }
                  )
  }

  handleUpdatePost(post){

     const newPost = {title: "This is new Title", body: "this is new body", userId: post.userId}

      this.http.put<Post>(this.url+ '/' + post.id, newPost)
                .subscribe(
                  (response) => {
                    const index = this.posts.indexOf(post);
                    this.posts[index] = response;
                  },
                  (error)=>{
                    console.log(error)
                  }
                )

  }

}
