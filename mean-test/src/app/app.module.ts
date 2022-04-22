import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { CapstoneComponent } from './capstone/capstone.component';
import { WarningMessageComponent } from './warning-message/warning-message.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { SelectorComponent } from './selector/selector.component';
import { FormsModule } from '@angular/forms';
import { AnimalImageDirective } from './animal-image.directive';
import { TuneInComponent } from './tune-in/tune-in.component';
import { PlaylistsComponent } from './tune-in/components/playlist/playlists.component';
import { HomeComponent } from './tune-in/components/home/home.component';
import { ReviewsComponent } from './tune-in/components/reviews/reviews.component';
import { SubscriptionsComponent } from './tune-in/components/subscriptions/subscriptions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CapstoneService } from './capstone.service';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { Routes, RouterModule } from '@angular/router';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { NotFoundComponent } from './not-found/not-found.component';



const appRoutes: Routes = [ {
  path: '',  //default component to display
  component: NameEditorComponent
},
{
  path: 'addProject',   
  component: CapstoneComponent
},
 {
  path: 'listProjects',  
  component: ListProjectsComponent
}, {
  path: 'editProject/:_id',  
  component: CapstoneComponent 
},{
  path: '**',  
  component: NotFoundComponent
}
];




@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    CapstoneComponent,
    WarningMessageComponent,
    SuccessMessageComponent,
    SelectorComponent,
    AnimalImageDirective,
    TuneInComponent,
    PlaylistsComponent,
    HomeComponent,
    ReviewsComponent,
    SubscriptionsComponent,
    NavigationMenuComponent,
    ListProjectsComponent,
    NotFoundComponent,

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
  providers: [CapstoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
