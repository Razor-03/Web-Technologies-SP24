import express from "express"; 
const app = express();

import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js"

app.use('/api/posts', postRoutes);
app.use("/", authRoutes);

app.get('/', (req, res) => {
    res.send('Running');
    console.log('It works');
});

app.listen(3000, (req, res) => {
    console.log('Server running on port 3000');
})