import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
    sender: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    block: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const Message = model('Message', messageSchema);

export default Message;
