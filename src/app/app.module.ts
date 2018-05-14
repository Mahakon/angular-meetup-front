import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OauthComponent } from './oauth/oauth.component';
import { MainChatComponent } from './chat/main-chat/main-chat.component';
import {
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatInputModule,
  MatCardModule} from '@angular/material';
import { ChatToolbarComponent } from './chat/chat-toolbar/chat-toolbar.component';
import { MessageInputComponent } from './chat/message-input/message-input.component';
import { UserService } from './services/user.service';
import { MessageComponent } from './chat/message/message.component';
import { WebSocetService } from './services/websocet.service';
import {ChatService} from './services/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    OauthComponent,
    MainChatComponent,
    ChatToolbarComponent,
    MessageInputComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [
    UserService,
    WebSocetService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
