import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { StorageService } from '../services/storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'teste-angular';
  userObject:  User | undefined;
  status = false;
  listFollowing: User[] = [];
  readonly LIST_FOLLOWING = 'listFollowing';

  public isCollapsed = true;

  public countFollowing: number = 0;

  constructor(private _storage: StorageService){}

  ngOnInit(): void {
    this.userObject = {
      name: { last: 'Santos', first: 'Lorena'},
      location: {city: 'Salvador', country: 'Brasil'},
      nat: 'BR',
      registered: { age: 29},
      email: 'lima.lory@gmail.com',
      phone: '71 99200-6722',
      picture: {large:'../../../assets/lore.jpg', medium: '../../../assets/lore.jpg', thumbnail: '../../../assets/lore.jpg'}
    }

    this._storage.clear();
    
  }

  get user(){
    return this.userObject;
  }


  follow(event: User){
    if(event){
      this.isCollapsed = true;
      this.countFollowing =  this.countFollowing + 1;
      this.listFollowing.push(event);
      this.addToStorage(this.LIST_FOLLOWING, this.listFollowing);
    }
  }

  addToStorage(key: string, value: any){
    /* o ideal seria armazenar o id, mas a api não fornece consulta por id */
    this._storage.set(key, value);
  }

  getStorage(): User[] {
    return this._storage.get(this.LIST_FOLLOWING);
  }

  removeStorage(key: string): boolean{
    return this._storage.remove(key);
  }

  unfollow(event: any){
    if(event){
      const index = this.isFollowIndex(event.id?.value);
      if(index != -1){
        this.listFollowing.splice(index, 1);
        this.unfollowUser(this.listFollowing);
      }
    }
  }

  unfollowUser(list: User[]){
    if(this.removeStorage(this.LIST_FOLLOWING)){
      this.countFollowing = this.countFollowing - 1;
      this.addToStorage(this.LIST_FOLLOWING, list);
    }
  }

  isFollowIndex(id: string): number{
    this.listFollowing = this.getStorage();
    const index = this.listFollowing.findIndex(i => i.id?.value === id);
    return index;
  }

  isFollow(event: any){
    const index = this.isFollowIndex(event.id?.value);
    return (index != -1);
  }

  collapseFollowing(){
    if(this.isCollapsed){
      this.isCollapsed = false
    }else{
      this.isCollapsed = true;
    }
  }
}
