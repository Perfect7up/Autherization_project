import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import bodyParser from 'body-parser';


dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

app.use("/backend/user", userRoutes);
app.use("/backend/auth", authRoutes);

app.get("/backend/auth/signin", (req, res) => {
    res.send('Signin GET route hit');
});

app.post("/backend/auth/signin", (req, res, next) => {
    console.log('Signin route hit');
    next();
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});
