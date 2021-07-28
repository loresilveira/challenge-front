import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { User } from "src/app/model/user";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: 'app-suggestions',
    templateUrl: './suggestions.component.html',
    styleUrls: ['./suggestions.component.scss']
  })

  export class SuggestionsComponent implements OnInit {

   @Input() listFollowing: User[] = [];
   @Output() emitFollow = new EventEmitter();
   users: User[] | undefined;

    constructor(private _userService: UserService, private spinnerService: NgxSpinnerService){}
  

    ngOnInit(): void {
        this.getUsers()
    }

   
    getUsers(){
      this.spinnerService.show();
      this._userService.getListUser().subscribe((res: any) => {
        this.users = res.results;  
        this.filterSuggestions();
        this.spinnerService.hide();
      });
    }

    filterSuggestions(){
      if(this.users && this.listFollowing){
        this.listFollowing.forEach(u => {
          const index = this.users?.findIndex(i => i.id?.value === u.id?.value);
          if(index && index != -1){ 
            this.users?.splice(index, 1)
          }
        })
        
      }
    }

    follow(event: User){
      const index = this.users?.findIndex(i => i.id?.value == event.id?.value);
      if(index && index != -1){ 
        this.users?.splice(index, 1)
        if(this.users?.length == 1){
          this.getUsers();
        }
      }
      this.emitFollow.emit(event);
      
    }

  }