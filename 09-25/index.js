import express from 'express';
const port = 3001;
const app = express();
import {orders} from './models/orders.js';
import {connect} from './db/connection.js';
import {orderModel} from './mongo/Order.js';


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get("/orders", async (req, res) => {
    const orders = await orderModel.find({}).exec();
    if (orders.length === 0 ) {
        return res.status(404).send("No orders found");
    }
    return res.send(orders);
});

app.post("/orders" , async (req, res) => {
    const order = new orderModel(req.body);
    await order.save();
    return res.send(order);
});

app.get("/orders/:id" , async (req, res) => {
    const order = await orderModel.findById(req.params.id).exec();
    if (!order) {
        return res.status(404).send("Order not found");
    };
    return res.send(order);
});

app.put("/orders/:id" , async (req, res) => {
    const order = await orderModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
    if (!order) { 
        return res.status(404).send("Order not found");
    };
    return res.send(order);
});

app.delete("/orders/:id" , async (req, res) => {
    const order = await orderModel.findByIdAndDelete(req.params.id).exec();
    if (!order) {
        return res.status(404).send("Order not found");
    };
    return res.send(order);
});






app.listen(port, () => {
    connect();
    console.log(`Server running on port: ${port}`);
});