import ClientError from "./client-error.js";

class NotFoundError extends Error {
    constructor(message){
        super(message)
        this.name = 'NotFoundError'
    }
}

export default NotFoundError