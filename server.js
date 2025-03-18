import express from "express";
import cors from "cors";
const app =express();
const port = 3003;
const N_NUMBERS = 17;

const origins = [
    /https?:\/\/localhost(:\d+)?/,
    "https://www.google.com",
    /^https:\/\/(.*\.)*vccs\.edu$/,
];
const corsOpts = {
    origin: origins,
};

app.use(cors(corsOpts));

function getRandom() {
    return Math.floor(Math.random() *101);
}

app.get ("/", (req,res) => {
    res.json(Array.from({length: N_NUMBERS }, getRandom));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});