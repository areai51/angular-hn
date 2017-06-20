import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Post} from './post.interface';

@Injectable()
export class HackerNewsService {
baseUrl:string
  constructor(private _http:Http) {
    this.baseUrl='https://node-hnapi.herokuapp.com'
    }

  // getFeed(feedType:string):Observable<Post[]>{
  //   return fetchAsync(`${this.baseUrl}/${feedType}`);
  // }


getFeed(feedType:string):Observable<Post[]>{

return this._http
.get(`${this.baseUrl}/${feedType}`)
.map(response=>response.json()

);

}

    
}





function fetchAsync(url) {
return new Observable(fetchObserver=>{
  let cancelToken=false;
fetch (url)
.then(res=>{
  if(!cancelToken){
  return res.json()
  .then(data =>{
    fetchObserver.next(data);
    fetchObserver.complete()
  });
}
}).catch(err => fetchObserver.error(err))
return()=>{
  cancelToken =true;
}
  }
)
  }