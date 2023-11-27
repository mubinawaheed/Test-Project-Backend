const sendResponse=(res, code=200, obj={}) =>{
    return res.status(code).json(obj);
}

const sendResponseMsg=(res, message, success = true, code = 200)=>{
    return res.status(code).json({ message, success })
}

module.exports={
    sendResponse,
    sendResponseMsg
}