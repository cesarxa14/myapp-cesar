const MessageChat = require('../models/MessageChat');
const Chat = require('../models/Chat');

const createMessageChat = async (req, res) => {
    try{
        const {content, sender, chat} = req.body;
        const newMessageChat = new MessageChat({
            content: content,
            sender: sender,
            chat: chat
        });
        const messageChatCreated = await newMessageChat.save();
        const chatUpdated = await Chat.findByIdAndUpdate(newMessageChat.chat, {"$push": {messagesChat: messageChatCreated}})
        res.status(201).json({data: chatUpdated});
    } catch(err) {
        console.log('err', err);
    }  
}



// const deleteRole = async (req, res) => {
//     const {id} = req.params;
//     const roleDeleted = await Role.findByIdAndDelete(id);
//     if(!roleDeleted){
//         return res.status(404).send({message: "Role not found"})
//     }
//     return res.status(200).json({message: 'Role deleted', data: roleDeleted});
// }



module.exports.MessageChatController = {
    createMessageChat
}