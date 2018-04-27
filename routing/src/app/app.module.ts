import { UserService } from './user.service';
import { LoggedInGuard } from './logged-in.guard';
import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PrivateComponent } from './private/private.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "about", component: AboutComponent },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "private", canActivate: [AuthGuard, LoggedInGuard], component: PrivateComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PrivateComponent,
    LoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [AuthGuard, LoggedInGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
