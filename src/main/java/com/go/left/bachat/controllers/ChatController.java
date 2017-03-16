package com.go.left.bachat.controllers;

import com.go.left.bachat.dao.ChatMessageRepo;
import com.go.left.bachat.models.ChatMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by aram.hovhannisyan on 3/16/2017.
 */
@RestController
@RequestMapping("/chat")
public class ChatController {
    private ChatMessageRepo chatMessageRepo;

    @Autowired
    public ChatController(ChatMessageRepo chatMessageRepo) {
        this.chatMessageRepo = chatMessageRepo;
    }

    @CrossOrigin("*")
    @RequestMapping(method = RequestMethod.GET)
    public List<ChatMessage> getMessages() {
        return this.chatMessageRepo.getChatMessages();
    }

    @CrossOrigin("*")
    @RequestMapping(method = RequestMethod.POST)
    public List<ChatMessage> addMessage(@RequestBody ChatMessage message) {
        this.chatMessageRepo.addMessage(message);

        return this.chatMessageRepo.getChatMessages();
    }
}
