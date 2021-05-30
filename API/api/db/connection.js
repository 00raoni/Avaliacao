const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/newway', {
    useNewUrlParser: true,
    useUnifiedTopology: true

}
).then(() => {
    console.log('connected db')
})
    .catch((err) => {
        console.log('erro connected db')
    });

const ChatSchema = new mongoose.Schema({
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
mongoose.model('chat', ChatSchema)
module.exports = mongoose
