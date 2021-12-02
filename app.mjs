import express from 'express'
import mongoose from "mongoose"
import cors from "cors"
import path from "path";
const __dirname = path.resolve();
import { createServer } from "http";
import { Server } from "socket.io";

const PORT = process.env.PORT || 5000
const app = express()

mongoose.connect(`mongodb://abdurrehman:Disccompact890@cluster0-shard-00-00.7d9p9.mongodb.net:27017,cluster0-shard-00-01.7d9p9.mongodb.net:27017,cluster0-shard-00-02.7d9p9.mongodb.net:27017/CRICKET?ssl=true&replicaSet=atlas-wpbp4z-shard-0&authSource=admin&retryWrites=true&w=majority`)
.then(res => console.log("Connected to DB"))
const Score = mongoose.model('MatchRecord', {
    // tournament: String,
    // matchDate: String,
    // inning: String,
    // teamOne: String,
    // teamOneScore: Number,
    // teamOneWicket: Number,
    // teamTwo: String,
    // teamTwoScore: Number,
    // teamTwoWicket: Number,
    // player1: String,
    // player2: String,
    // bowler1: String,
    // bowler2: String,
    // teamOneOvers: Number,
    // teamTwoOvers: Number,
    // target: Number,
    // toss: String,
    // headline: String,
    tournament: String,
    RunOut: String,
    over:String,
    Playerone: String,
    plyonerun: String,
    playertwo: String,
    plytworun: String,
    Runrate: String,
    baller1: String,
    balOneOver: String,
    balOneRun: String,
    baller2: String,
    balTwoOver: String,
    balTwoRun: String,
    Targets: String,
    created: { type: Date, default: Date.now },
});

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5000"],
}))

app.use('/', express.static(path.join(__dirname, 'web/build')))
// app.get("/", (req, res, next) => {
//     res.sendFile(path.join(__dirname, "./web/build/index.html"))
// })

app.post('/api/v1/data',  (req, res) => {

   
        const newScore =  new Score({
            tournament: req.body.tournament,
             RunOut: req.body.RunOut,
        over:req.body.over,
        Playerone: req.body.Playerone,
        plyonerun: req.body.plyonerun,
        playertwo: req.body.playertwo,
        plytworun: req.body.plytworun,
        Runrate: req.body.Runrate,
        baller1: req.body.baller1,
        balOneOver: req.body.balOneOver,
        balOneRun: req.body.balOneRun,
        baller2: req.body.baller2,
        balTwoOver: req.body.balTwoOver,
        balTwoRun: req.body.balTwoRun,
        Targets: req.body.Targets,


        })
        newScore.save(() => {
            console.log("data saved")
            res.send('score created')
        })

      
        io.emit("matchData", {
            tournament: req.body.tournament,
            RunOut: req.body.RunOut,
        over:req.body.over,
        Playerone: req.body.Playerone,
        plyonerun: req.body.plyonerun,
        playertwo: req.body.playertwo,
        plytworun: req.body.plytworun,
        Runrate: req.body.Runrate,
        baller1: req.body.baller1,
        balOneOver: req.body.balOneOver,
        balOneRun: req.body.balOneRun,
        baller2: req.body.baller2,
        balTwoOver: req.body.balTwoOver,
        balTwoRun: req.body.balTwoRun,
        Targets: req.body.Targets,
        });
        
    
})

// app.get('/api/v1/data', (req, res) => {
//     Score.findOne({}, {}, { sort: { 'created': -1 } }, (err, data) => {
//         if (err) {
//             res.status(500).send("error in getting database")
//         } else {
//             res.send(data)
//             // console.log(res.body)
//         }
//     })
// })

app.get('/api/v1/data', (req, res) => {

    Score.findOne({})
        .sort({ _id: "desc" })
        .exec(function (err, data) {
            res.send(data);
        });
});

app.get("/**", (req, res, next) => {
    // res.redirect("/")
    res.sendFile(path.join(__dirname, "./web/build/index.html"))
})

// app.listen(PORT, () => {
//     console.log(`Example app listening at http://localhost:${PORT}`)
// })

const server = createServer(app);
const io = new Server(server, { cors: { origin: "*", methods: "*", } });
io.on("connection", (socket) => {
    console.log("New client connected with id: ", socket.id);
    // to emit data to a certain client
    socket.emit("topic 1", "some data")
    // collecting connected users in a array
    // connectedUsers.push(socket)
    socket.on("disconnect", (message) => {
        console.log("Client disconnected with id: ", message);
    });
});

setInterval(() => {
    // to emit data to all connected client
    // first param is topic name and second is json data
    io.emit("Test topic", { event: "ADDED_ITEM", data: "some data" });
    console.log("emiting data to all client");
}, 2000)

server.listen(PORT, function () {
    console.log("server is running on", PORT);
})