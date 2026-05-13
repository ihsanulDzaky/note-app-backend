import ClientError from "./client-error.js";

class InvariantError extends Error {
    constructor(message){
        super(message);
        this.name = 'InvariantError'
    }
}

export default InvariantError