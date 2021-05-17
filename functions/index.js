const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51Irc8uSB2SLNhiaJQLyfHpv0VLWizElBou159r9X5S0ZR6qyH9Cje42BPF0Ok4aRQSF9eEWfxaHjEpKoeTvADPe100nQ8q95xd");

// api

// App config
const app = express();

// Middlewares
app.use(cors({origin:true}));
app.use(express.json());

// API routes
app.get('/',(request,response)=>response.status(200).send("Hello world"));

app.post('/payments/create',async (request,response)=>{
    const total = request.query.total;
    console.log("Payment request recieved for this amount",total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits
        currency: "inr" //showing dolars but to show in stripe i am using inr
    });

    // ok created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// Listen command
exports.apt = functions.https.onRequest(app);
// http://localhost:5001/challenge-a1ad3/us-central1/apt