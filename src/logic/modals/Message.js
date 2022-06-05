class Message{
    constructor(type, data, time, sender, recipient){
        this.type = type;
        this.data = data;
        this.time = time;
        this.sender = sender;
        this.recipient = recipient;
    }
}

export default Message;