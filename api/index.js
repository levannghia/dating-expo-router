const express = require('express')
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const crypto = require("crypto")
const nodeMailer = require("nodemailer")

const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const jwt = require("jsonwebtoken")
const User = require("./models/user");
const Chat = require("./models/message");

mongoose.connect("mongodb+srv://meoem2712:2712000Nn@cluster0.cmentol.mongodb.net/").then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log("Error connect MongoDB");
})


app.listen(port, () => {
    console.log("Server is runing port " + port);
})

app, post('/register', async (req, res) => {
    try {
        const [name, email, password] = res.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            res.status(400).json({ message: "User không tồn tại" })
        }

        const newUser = new User({
            name,
            email,
            password
        });

        //generate the verification token
        newUser.verificationToken = crypto.randomBytes(20).toString("hex");

        //save the user to the database
        await newUser.save();

        //send the verification email to the registered user
        sendVerificationEmail(newUser.email, newUser.verificationToken);

        res.status(200).json({ message: "User registered successfully", userId: newUser._id });
    } catch (error) {
        console.log("Error registering user", error);
        res.status(500).json({ message: "Registration failed" });
    }
})

const sendVerificationEmail = async (email, verificationToken) => {
    const transpoter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "sujananand0@gmail.com",
            pass: "rnzcugnscqtqiefs",
        },
    });

    const mailOptions = {
        from: "matchmake.com",
        to: email,
        subject: "Email verification",
        text: `Please click on the following link to verify your email : http://localhost:3000/verify/${verificationToken}`,
    };

    //send the mail
    try {
        await transpoter.sendMail(mailOptions);
    } catch (error) {
        console.log("Error sending the verification email");
    }
};