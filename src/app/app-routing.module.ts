import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainChatComponent } from './chat/main-chat/main-chat.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { ChatGuard } from './chat/chat.guard';
import { ChatResolver } from './chat/chat.resolver';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'chat',
    component: MainChatComponent,
    canActivate: [ ChatGuard ],
    resolve: { messageList: ChatResolver }
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' }
];

@NgModule({
  exports:  [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes, {enableTracing: false}) ]
})
export class AppRoutingModule { }
