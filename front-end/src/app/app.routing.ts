import {ChatComponent} from "./components/chat/chat.component";
import {RouterModule} from "@angular/router";
/**
 * Created by aram.hovhannisyan on 3/16/2017.
 */

let routes = [
    {path: '', component: ChatComponent}
];

export const routing = RouterModule.forRoot(routes);