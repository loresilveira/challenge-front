import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './services/user.service';
import { AppComponent } from './home/app.component';
import { StorageService } from './services/storage.service';
import { UserComponent } from './components/user/user.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { FollowingComponent } from './components/following/following.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SuggestionsComponent,
    FollowingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
  ],
  providers: [ UserService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
