class Tables {
    init(connection) {
        this.connection = connection        
        this.createChat()
    }
    createChat() {
        const ChatSchema = new connection.Schema({
            from: {
                type: Number,
                require: true
            },
            target_id: {
                type: Number,
                require: true
            },
            media: {
                type: Boolean,
                require: true
            },
            message: {
                type: String,
                require: true
            }
        });
        connection.model('chat', ChatSchema)
    }
}
