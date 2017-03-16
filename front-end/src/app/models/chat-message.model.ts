/**
 * Created by aram.hovhannisyan on 3/16/2017.
 */

export class ChatMessage {
    private _id: number;
    private _username: string;
    private _message: string;

    get id():number {
        return this._id;
    }

    set id(value:number) {
        this._id = value;
    }

    get username():string {
        return this._username;
    }

    set username(value:string) {
        this._username = value;
    }

    get message():string {
        return this._message;
    }

    set message(value:string) {
        this._message = value;
    }
}