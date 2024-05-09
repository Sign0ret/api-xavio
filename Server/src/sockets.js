// server.js
import Message from './models/Message';

export default (io) => {
    io.on('connect', (socket) => {
        const emitMessages = async () => {
            try {
                const messages = await Message.find();
                console.log(messages);
                io.emit('server:loadmessages', messages);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        socket.on('client:saveMessage', async (message_data) => {
            console.log(message_data);
            try {
                const newMessage = new Message({
                    sender: message_data.sender,
                    message: message_data.message,
                    block: message_data.block
                });
                const messageSaved = await newMessage.save();
                console.log(messageSaved);
                io.emit('server:newMessage', messageSaved);
            } catch (error) {
                console.error('Error saving message:', error);
            }
        });

        socket.on('client:updateMessage', async ({ messageId, message }) => {
            try {
                const updatedMessage = await Message.findByIdAndUpdate(messageId, { message }, { new: true });
                console.log(updatedMessage);

                io.emit('server:messageUpdated', updatedMessage);
            } catch (error) {
                console.error('Error updating message:', error);
            }
        });

        socket.on('client:deleteMessage', async (messageId) => {
            try {
                await Message.findByIdAndDelete(messageId);
                io.emit('server:messageDeleted', messageId);
            } catch (error) {
                console.error('Error deleting message:', error);
            }
        });

        socket.on('client:fetchMessages', emitMessages);
    });
};
