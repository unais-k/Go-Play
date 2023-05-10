import AdminModel from "../../Model/Admin.js";
import chatModel from "../../Model/Chat.js";
import conversationModel from "../../Model/Conversation.js";
import TurfAdminModel from "../../Model/TurfAdmin.js";
//new conversation

export const NewConversationReqApi = async (req, res, next) => {
    try {
        console.log(req.user.id, "token", req.body.receiverId, "user");
        const find = await conversationModel.findOne({
            members: { $in: [req.body.receiverId] },
        });
        console.log(find);
        if (find) {
            console.log("user exist");
            res.status(201).json({ response: true });
        } else {
            console.log("new mem");
            const newConversation = new conversationModel({
                members: [req.user.id, req.body.receiverId],
                status: true,
            });
            const savedConversation = await newConversation.save();
            res.status(201).json({ result: savedConversation });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
};

//get conversation of a user

export const GetConversationResApi = async (req, res, next) => {
    try {
        console.log(req.params.userId);
        const conversation = await chatModel.find({
            conversationId: req.params,
        });
        res.status(200).json(conversation);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
};

// get owner list to add

export const GetOwnerListReqApi = async (req, res, next) => {
    try {
        const find = await TurfAdminModel.find({});
        res.status(201).json({ result: find });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};

export const GetAdminListReqApi = async (req, res, next) => {
    try {
        const find = await AdminModel.find({});
        res.status(201).json({ result: find });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};
function multiIntersect(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                continue;
            }
            result = result.concat(arr[i].filter((value) => arr[j].includes(value)));
        }
    }
    return Array.from(new Set(result));
}

export const GetConversationListResApi = async (req, res, next) => {
    try {
        let event = [];
        const find = await conversationModel.find({});
        for (let i = 0; i < find.length; i++) {
            // event = find[i].eventAvailable;
            event.push(find[i].members);
        }
        const concatArray = multiIntersect(event);
        if (concatArray.indexOf(req.user.id) !== -1) {
            // Remove the value 3 from the array using splice()
            concatArray.shift();
        }

        res.status(201).json({ result: find });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};
