import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UIRouterModule, UIView } from 'ui-router-ng2';

export function resolveData() {
  return Promise.resolve('RESOLVE DATA');
}

export const STATES = [
  {
    name: 'home', 
    url: '/home', 
    component: AppComponent,
    resolve: [
      { token: 'resolvedata', resolveFn: resolveData },
    ],
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UIRouterModule.forRoot({ states: STATES, otherwise: '/home' }),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [UIView],
})
export class AppModule { }


