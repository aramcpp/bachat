package com.go.left.bachat.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by aram.hovhannisyan on 3/16/2017.
 */
@RestController
@RequestMapping("/chat")
public class ChatController {
    @RequestMapping(method = RequestMethod.GET)
    public String chatHome() {
        return "banan";
    }
}
