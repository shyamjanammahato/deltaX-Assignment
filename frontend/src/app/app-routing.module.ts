import { AddNewSongComponent } from './add-new-song/add-new-song.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '' , redirectTo: 'signin', pathMatch: 'full' },
    { path: 'signin' , component: SigninComponent},
    { path: 'signup' , component: SignupComponent},
    { path: 'homepage', component: HomepageComponent },
    { path: 'add-new-song' , component: AddNewSongComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [SigninComponent, SignupComponent];