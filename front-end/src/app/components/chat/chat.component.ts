import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ChatService} from "../../services/chat.service";
import {ChatMessage} from "../../models/chat-message.model";
import {Observable} from "rxjs/Rx";

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
    private messages: ChatMessage[];
    private chatObservable: Observable<any>;
    private chatMessage: any;

    @ViewChild("chatWindow") private chatWindow: ElementRef;

    constructor(private chatService: ChatService, private elementRef: ElementRef) {
        this.chatMessage = {};
    }

    ngOnInit() {
        // this.scrollToBottom();
        // this.chatObservable = this.getMessages();
        this.getMessages();
    }

    ngViewAfterChecked() {
        // this.scrollToBottom();
    }

    getMessages() {
        return this.chatService.loadMessages().subscribe(data => {
            this.messages = data;
            this.scrollToBottom();
        });
    }

    sendMessage() {
        this.chatService.sendMessage(this.chatMessage).subscribe(response => {
        }, error => {
            alert('Message failed to send.');
        });
    }

    scrollToBottom() {
        let div = this.elementRef.nativeElement.querySelector('div');

        div.scrollTop = div.scrollHeight;
    }
}
