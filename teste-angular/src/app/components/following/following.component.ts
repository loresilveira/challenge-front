import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { User } from "src/app/model/user";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: 'app-following',
    templateUrl: './following.component.html',
    styleUrls: ['./following.component.scss']
  })

  export class FollowingComponent implements OnInit {

    @Input() users: User[] | undefined;
    @Input() show: boolean = false;
    @Input() countFollowing: number = 0;
    @Output() emitFollow = new EventEmitter();



    ngOnInit(): void {
        console.log(this.users)

    }

    unfollowButton(event: any){
      if(event){
        this.emitFollow.emit(event);
      }
    }
  
  

   
      
  }