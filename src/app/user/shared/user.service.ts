import { Injectable } from '@angular/core';
import {BackendService} from '../../core/firebase/backend.service';
import {User, USERS_RESOURCE_PATH} from './user.model';
import {DateUtils} from '../../shared/DateUtils';
import {Observable} from 'rxjs/Observable';
import {ListCache} from '../../core/firebase/ListCache';
import {ModelFactory} from "../../core/firebase/model";

@Injectable()
export class UserService {

  private listCache: ListCache<User>;

  constructor(private backend: BackendService) {
    this.listCache = new ListCache<User>();
  }

  public newDefault(): User {
    return User.newDefault();
  }

  public findAll(): Observable<User[]> {
    return this.listCache
      .find(this.backend.database(), USERS_RESOURCE_PATH)
      .map(list => list.map(each => ModelFactory.toClass(User, each)));
  }

  public add(user: User): Observable<User> {
    if (!user.created) {
      user.created = DateUtils.todayISOString();
    }
    return this.listCache.add(user);
  }

  public delete(user: User): Observable<User> {
    return this.listCache.delete(user);
  }

}
