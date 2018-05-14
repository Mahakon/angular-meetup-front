import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OauthComponent } from './oauth/oauth.component';
import { MainChatComponent } from './chat/main-chat/main-chat.component';

const routes: Routes = [
  {
    path: 'oauth',
    component: OauthComponent,
  },
  {
    path: 'chat',
    component: MainChatComponent
  },
  { path: '', redirectTo: 'chat', pathMatch: 'full' }
];

@NgModule({
  exports:  [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes, {enableTracing: false}) ]
})
export class AppRoutingModule { }
