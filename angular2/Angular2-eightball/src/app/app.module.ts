import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BallService } from './ball.service';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// define the routes
const appRoutes: Routes = [

    { path: '**', component: AppComponent }
];

@NgModule({
    imports: [BrowserModule, HttpClientModule,
        FormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent],
    providers: [BallService],
    bootstrap: [AppComponent]
})
export class AppModule { }
