const Chat = require('../models/chat')
const cors = require('cors')

module.exports = app => {
    app.use(cors())
    app.post('/api/v1/chat', (req, res) => {
        const chat = req.body;
        Chat.insert(chat, res)
    })
    app.get('/api/v1/chat', (req, res) => {
        Chat.listAll(res)
    })
    app.get('/api/v1/chat/message/:message', (req, res) => {
        const message = req.params.message

        Chat.listMessage(message, res)
    })
    app.get('/api/v1/chat/target_id/:target_id', (req, res) => {
        const target_id = parseInt(req.params.target_id)

        Chat.listTarget_id(target_id, res)
    })
    app.get('/api/v1/chat/media/:media', (req, res) => {
        const media = parseInt(req.params.media)

        Chat.listMedia(media, res)
    })    
}