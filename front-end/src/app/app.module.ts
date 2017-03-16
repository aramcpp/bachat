import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ChatService} from "./services/chat.service";
import { ChatComponent } from './components/chat/chat.component';
import {routing} from "./app.routing";

@NgModule({
    declarations: [
        AppComponent,
        ChatComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [
        ChatService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
