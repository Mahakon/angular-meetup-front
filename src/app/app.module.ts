import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { ChatService } from './services/chat.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { ChatGuard } from './chat/chat.guard';
import { ChatResolver } from './chat/chat.resolver';
import { AnimatedBotComponent } from './animated-bot/animated-bot.component';

@NgModule({
  declarations: [
    AppComponent,
    MainChatComponent,
    ChatToolbarComponent,
    MessageInputComponent,
    MessageComponent,
    AuthComponent,
    AnimatedBotComponent
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
    ChatService,
    AuthGuard,
    ChatGuard,
    ChatResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
