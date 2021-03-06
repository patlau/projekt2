import { Injectable } from '@angular/core';
import {BackendService} from '../../core/firebase/backend.service';
import {SessionService} from '../../core/firebase/session.service';
import {Observable} from 'rxjs/Observable';
import {ObjectRef} from '../../core/firebase/ObjectRef';
import {SHOWS_RESOURCE_PATH, Show} from '../shared/show.model';
import {Post, POSTS_RESOURCE_PATH} from '../../post/shared/post.model';
import {ModelFactory} from '../../core/firebase/model';
import {TraceService} from '../../core/trace/trace.service';

@Injectable()
export class ShowDetailsService {

  private object: ObjectRef<Show> = null;

  constructor(private backend: BackendService, private session: SessionService, private trace: TraceService) {
    this.object = new ObjectRef<Show>(backend, SHOWS_RESOURCE_PATH);
  }

  public get(id: string): Observable<Show> {
    this.trace.log('ShowDetailsService', 'get', id, this);
    return this.object.getId(id)
      .map(obj => {
        const result = ModelFactory.toClass(Show, obj);
        this.trace.log('ShowDetailsService', 'result', id, obj, result);
        return result;
      });
  }

  public delete(show: Show): Observable<Show> {
    if (!(show.user === this.session.currentUser().uid)) {
      return Observable.of(null);
    }
    return this.object.delete();
  }

  public save(changes: any): Observable<Show> {
    this.trace.log('ShowDetailsService', 'save', changes, this);
    return this.object.update(changes);
  }

  public removePost(post: Post): Observable<Post> {
    return this.updatePost(post, {show: {key: null, index: null}});
  }

  public updatePost(post: Post, data: any): Observable<Post> {
    const obj: ObjectRef<Post> = new ObjectRef<Post>(this.backend, POSTS_RESOURCE_PATH);
    return obj.getId(post['$key'])
      .first()
      .flatMap(
        result => {
          return obj.update(data);
        }
    );
  }

  // TODO: Find out how to do multiple or batch updates within one observable
  public updatePosts(posts: Post[], postsToRemove: Post[]): Observable<Post> {

    const updates: Observable<Post>[] = new Array();
    postsToRemove.forEach(each => {
      updates.push(this.removePost(each));
    });

    let idx = 0;
    posts.forEach(each => {
      if (postsToRemove.indexOf(each) < 0) {
        each.show.index = idx++;
        updates.push(this.updatePost(each, {show: each.show}));
      }
    });

    this.trace.log('ShowDetailsService', 'updatePosts', posts, postsToRemove, updates);

    return Observable.merge(...updates);

  }

}
