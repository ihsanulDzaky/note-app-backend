import response from '../utils/response.js'
import ClientError from '../exceptions/client-error.js'

const ErrorHandler = (err, req, res, next) => {

    console.log('err instanceof ClientError:', err instanceof ClientError);
    console.log('err.constructor.name:', err.constructor.name);
    console.log('err.statusCode:', err.statusCode);
    
    if (err instanceof ClientError) {
        return response(res, err.statusCode, err.message, null)
    }

    if (err.isJoi) {
        return response(res, 400, err.details[0].message, null);
    }
    const status = err.statusCode || err.status || 500;
    const message = err.message || 'Internal Server Error'

    console.error('Unhandled error:', err)
    return response(res, status, message, null)
}

export default ErrorHandler