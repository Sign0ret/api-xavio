import { connect } from 'mongoose';
import { MONGODB_URI } from './config';

export const connectDB = async () => {
    try {
        await connect(MONGODB_URI, {
            dbName: 'Chats'
        });
        console.log(`Connected to database: Chats`); // Corrected log statement
    } catch (err) {
        console.error('Error connecting to database:', err);
    }
};
