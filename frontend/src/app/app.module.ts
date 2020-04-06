import { UserService } from './user.service';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { NavbarComponent } from './navbar/navbar.component';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { HomeTopSongsComponent } from './home-top-songs/home-top-songs.component';
import { HomeTopArtistsComponent } from './home-top-artists/home-top-artists.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddNewSongComponent } from './add-new-song/add-new-song.component';
import { MultiselectDropdownComponent } from './multiselect-dropdown/multiselect-dropdown.component';
import { AddNewArtistComponent } from './add-new-artist/add-new-artist.component'

@NgModule({
  declarations: [
    HomepageComponent,
    AppComponent,
    routingComponents,
    NavbarComponent,
    HomeTopSongsComponent,
    HomeTopArtistsComponent,
    StarRatingComponent,
    AddNewSongComponent,
    MultiselectDropdownComponent,
    AddNewArtistComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MDBBootstrapModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    ModalModule.forRoot()
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
