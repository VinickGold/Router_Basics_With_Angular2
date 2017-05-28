import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Route , RouterModule } from '@angular/router';
import { GreenComponent } from './green/green.component';
import { PinkComponent } from './pink/pink.component';
import { GrayComponent } from './gray/gray.component';
import { BlackComponent } from './black/black.component';
import { RedComponent } from './red/red.component';
import { BlueComponent } from './blue/blue.component';

const routes : Route[] = 
[
  // Basic navigation with children
  { path: 'red' ,  component: RedComponent , children: 
      [
        { path: 'pink' , component: PinkComponent },
        { path: 'green' , component: GreenComponent }
      ] 
  },
  // Basic navigation with children and default route
  { path: 'blue' ,  component: BlueComponent , children: 
      [
        // Redirect to gray as default
        { path: '' , redirectTo: 'gray' , pathMatch: 'full'},
        { path: 'black' , component: BlackComponent },
        { path: 'gray' , component: GrayComponent }
      ] 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GreenComponent,
    PinkComponent,
    GrayComponent,
    BlackComponent,
    RedComponent,
    BlueComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
