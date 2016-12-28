import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MarkdownModule} from 'angular2-markdown';

import { AppComponent } from './app.component';
import { TopNavComponent } from './common/top-nav/top-nav.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MarkdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
