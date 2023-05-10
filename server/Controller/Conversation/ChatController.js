import chatModel from "../../Model/Chat.js";
import TurfAdminModel from "../../Model/TurfAdmin.js";
import notificationModel from "./../../Model/Notification.js";

export const GetMessageResApi = async (req, res, next) => {
    try {
        console.log(new Date(Date.now()));
        console.log(req.params.conversationId, " id");
        const find = await chatModel.find({
            conversationId: req.params.conversationId,
        });
        res.status(201).json({ result: find });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
};

export const AddMessageResApi = async (req, res, next) => {
    try {
        console.log(req.body);
        console.log(req.user.id);
        const createChat = await chatModel.create({
            sender: req.user.id,
            conversationId: req.body.conversationId,
            text: req.body.text,
        });
        // const newMessage = new Message(req.body);
        console.log(createChat);
        // const savedMessage = await newMessage.save();

        // res.status(201).json({ result: savedMessage });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
};

export const GetAdminPermissionResApi = async (req, res, next) => {
    try {
        const find = await TurfAdminModel.findOne({ _id: req.user.id });
        const findUser = await notificationModel.findOne({ sender: req.user.id, status: true });
        if (!findUser) {
            res.status(203).json({ result: findUser, status: true });
        } else if (findUser) {
            res.status(202).json({ status: "OK" });
        } else {
            const notifiCation = await notificationModel.create({
                sender: req.user.id,
                name: find.name,
                status: false,
            });
            res.status(201).json({ result: notifiCation });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
};
