import { usersService } from "../services/index.js";

const getAllUsers = async (req, res) => {
    try {
        const users = await usersService.getAll();
        res.status(200).json({ status: "success", payload: users });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
};

const getUser = async (req, res) => {
    try {
        const userId = req.params.uid;
        const user = await usersService.getUserById(userId);
        if (!user) {
            return res.status(404).json({ status: "error", error: "User not found" });
        }
        res.status(200).json({ status: "success", payload: user });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
};

const createUser = async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body;
        if (!first_name || !last_name || !email || !password) {
            return res.status(400).json({ status: "error", error: "Incomplete values" });
        }
        const newUser = await usersService.create({ first_name, last_name, email, password });
        res.status(201).json({ status: "success", payload: newUser });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const userId = req.params.uid;
        const updateData = req.body;
        const updatedUser = await usersService.update(userId, updateData);
        if (!updatedUser) {
            return res.status(404).json({ status: "error", error: "User not found" });
        }
        res.status(200).json({ status: "success", message: "User updated", payload: updatedUser });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.uid;
        const deletedUser = await usersService.delete(userId);
        if (!deletedUser) {
            return res.status(404).json({ status: "error", error: "User not found" });
        }
        res.status(200).json({ status: "success", message: "User deleted" });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
};

export default {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};