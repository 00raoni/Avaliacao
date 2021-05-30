const connection = require('../db/connection')
class Chat {

    insert(chat, res) {
        
        const c = connection.model('chat')

        new c(chat).save().then(() => {            
            var result = chat
            result["message_status"]=true
            res.status(201).json(result) //or 200
        }).catch((error) => {
            res.status(400).json({"message_status":false})
        })
    }
    
    listAll(res) {
        const c = connection.model('chat')
        c.find({}, (error, result) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(result)
            }
        })
    }
    listMessage(message, res) {
        const c = connection.model('chat')
        c.find({},(error, result) => {

            if (error) {
                res.status(400).json(error)
            } else {                                
                res.status(200).json(result)
            }
        }).where('message').equals(message)        
    }
    listTarget_id(target_id, res) {
        const c = connection.model('chat')
        c.find({},(error, result) => {

            if (error) {
                res.status(400).json(error)
            } else {                                
                res.status(200).json(result)
            }
        }).where('target_id').equals(target_id)        
    }
    listFrom(from, res) {
        const c = connection.model('chat')
        c.find({},(error, result) => {

            if (error) {
                res.status(400).json(error)
            } else {                                
                res.status(200).json(result)
            }
        }).where('from').equals(from)        
    }
    listMedia(media, res) {
        const c = connection.model('chat')
        c.find({},(error, result) => {

            if (error) {
                res.status(400).json(error)
            } else {                                
                res.status(200).json(result)
            }
        }).where('media').equals(media)        
    }
}
module.exports = new Chat