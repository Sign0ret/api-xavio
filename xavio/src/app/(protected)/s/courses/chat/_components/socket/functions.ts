import { useState, useEffect } from 'react';
import { io, Socket } from "socket.io-client";
import {Message} from "../messages/message"


const useChatSocket = () => {
    // start websocket logic
    const [socket, setSocket] = useState<Socket | null>(null);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);
    const [updatedMessage, setUpdatedMessage] = useState("");

  useEffect(() => {
    const newSocket = io("ws://localhost:3001");
    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("Connected to WebSocket server");
      newSocket.emit("client:fetchMessages");
    });

    newSocket.on("disconnect", () => {
      console.log("Disconnected from WebSocket server");
    });

    newSocket.on("server:loadmessages", (messages) => {
      console.log("Received messages from server:", messages);
      setMessages(messages);
    });

    newSocket.on("server:newMessage", (newMessage) => {
      console.log("Received new message from server:", newMessage);
      setMessages(prevMessages => [...prevMessages, newMessage]);
    });

    newSocket.on("server:messageDeleted", (deletedMessageId) => {
      setMessages(prevMessages =>
        prevMessages.filter(msg => msg._id !== deletedMessageId)
      );
    });
    
    newSocket.on("server:messageUpdated", (updatedMessage) => {
      setMessages(prevMessages =>
        prevMessages.map(msg =>
          msg._id === updatedMessage._id ? updatedMessage : msg
        )
      );
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (socket) {
      const newMessage: Message = {
        _id: "",
        sender: 'Messi',
        message: message,
        block: 1,
        createdAt: "",
        updatedAt: "",
        __v: 0
      };
      socket.emit("client:saveMessage", newMessage);
      console.log("Message sent:", newMessage);
      setMessage("");
    }
  };
  
  const selectMessage = (messageId: string) => {
    setSelectedMessageId(messageId);
  };

  const updateMessage = () => {
    if (socket && selectedMessageId) {
      socket.emit("client:updateMessage", { messageId: selectedMessageId, message: updatedMessage });
      setUpdatedMessage(""); // Clear the input field after updating
      setSelectedMessageId(null); // Clear the selected message
    }
  };

  const deleteMessage = (messageId: string) => {
    if (socket) {
      socket.emit("client:deleteMessage", messageId);
    }
  };

  return {
    socket,
    message,
    setMessage,
    messages,
    selectedMessageId,
    updatedMessage,
    sendMessage,
    selectMessage,
    updateMessage,
    deleteMessage
  };
};

export default useChatSocket;