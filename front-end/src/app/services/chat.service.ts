import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";

import {environment} from '../../environments/environment';
import {Observable} from "rxjs/Rx";
import {ChatMessage} from "../models/chat-message.model";

import 'rxjs/add/operator/map';

@Injectable()
export class ChatService {
    private serverURL = `${environment.serverURL}/chat`;

    constructor(private http: Http) {
    }

    public loadMessages(): Observable<ChatMessage[]> {
        return Observable.interval(500)
            .switchMap(() => this.http.get(this.serverURL)
                .map((response:Response) => {
                    return response.json() as ChatMessage[];
                })
            );
    }

    public sendMessage(chatMessage: ChatMessage) {
        return this.http.post(this.serverURL, chatMessage).map(response => {
            return 'ok';
        }, error => {
            return 'error';
        });
    }
}
