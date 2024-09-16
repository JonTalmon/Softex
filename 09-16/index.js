import express from 'express';
export const app = express();
const port = 3000;
import { route } from "./src/routes/user-routes.js"

//middleware
app.use(express.json());
app.use("/user", route);


app.listen(port, () => {
    console.log(`http://localhost:${port}/user`);
});