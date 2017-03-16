package com.go.left.bachat.dao;

import com.go.left.bachat.models.ChatMessage;
import org.springframework.stereotype.Controller;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by aram.hovhannisyan on 3/16/2017.
 */
@Controller
public class ChatMessageRepo {
    private List<ChatMessage> chatMessages;

    public ChatMessageRepo() {
        this.chatMessages = new ArrayList<>();
    }

    public void addMessage(ChatMessage chatMessage) {
        this.chatMessages.add(chatMessage);
    }

    public List<ChatMessage> getChatMessages() {
        return this.chatMessages;
    }
}
