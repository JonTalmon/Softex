import mongoose from 'mongoose';


export const connect = async () => {
    try {
        await mongoose.connect("mongodb+srv://jontalmon0:eGj8x3YItOIxmRzx@cluster0.o2eek.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected to database");
    } catch (error) {
        console.log("Error connecting to the database");
    }
};

