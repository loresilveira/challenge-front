import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { User } from "src/app/model/user";
import { StorageService } from "src/app/services/storage.service";
import { UserService } from "src/app/services/user.service";
import { FollowingComponent } from "../following/following.component";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
  })

  export class UserComponent implements OnInit {

    @Input() user: User | undefined;
    @Output() emitFollow = new EventEmitter();

    isFollowing: boolean = false;

    constructor(private _userService: UserService, private _storage: StorageService, private spinnerService: NgxSpinnerService){}
  

    readonly LIST_FOLLOWING = 'listFollowing';
    readonly FOLLOW = 'Follow';
    followTextButton: string = 'Follow';
    tryNextOneTextButton: string = 'Try the Next One';

    ngOnInit(): void {
    }
  
    tryNextOneButton(){
      this.isFollowing = false;
      this.followTextButton = this.FOLLOW;
      this.getUser();
    }
  
    getUser(){
      this.spinnerService.show();
      this._userService.getUser().subscribe(res => {
        this.spinnerService.hide();
        this.user = res.results[0]; 
      });
    }

    getStorage(): User[] {
      return this._storage.get(this.LIST_FOLLOWING);
    }

    followButton(event: User){
      if(event){
        this.emitFollow.emit(event);
        this.isFollowing = true;
        this.followTextButton = "Following";
      }
    }
      
  }