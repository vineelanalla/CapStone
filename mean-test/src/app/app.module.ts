import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { Routes, RouterModule } from '@angular/router';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';
import { TuneinComponent } from './tunein/tunein.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { UsereditComponent } from './useredit/useredit.component';

const appRoutes: Routes = [ {
  path: '',  //default component to display  
  component: UsersComponent
},{
  path: 'Open',   
  component: TuneinComponent
},{
  path: 'listUsers',  
  component: ListProjectsComponent
}, {
  path: 'editUser/:_id',  
  component: UsereditComponent 
},
{
  path: 'subscriptions',  
  component: SubscriptionsComponent 
},
{
  path: 'reviews',  
  component: ReviewsComponent 
},
{
  path: 'playlists',  
  component: PlaylistsComponent 
},
{
  path: '**',  
  component: NotFoundComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    ListProjectsComponent,
    NotFoundComponent,
    UsersComponent,
    TuneinComponent,
    PlaylistsComponent,
    ReviewsComponent,
    SubscriptionsComponent,
    UsereditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
