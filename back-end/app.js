import express from "express";
import axios from "axios";
import morgan from "morgan";
import cors from "cors";

const app = express(); // instantiate an Express object

// use the morgan middleware to log all incoming http requests
app.use(morgan("dev"));

// use express's builtin body-parser middleware to parse any data included in a request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// make 'public' directory publicly readable with static content
app.use("/public", express.static("public"));

// adding CORS middleware
app.use(cors());

// use routes
// app.use(accountSettings);


export default app;
