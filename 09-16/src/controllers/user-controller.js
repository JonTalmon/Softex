import { user } from "../models/user.js";

export function getAllUsers(req, res) {
    res.json(user);
};

export function getUserByID(req, res) {
    const { id } = req.params;
    const findUser = user.find((value) => value.id === Number(id));
    if(!findUser) return res.send("User not found");
    res.send(findUser);
};

