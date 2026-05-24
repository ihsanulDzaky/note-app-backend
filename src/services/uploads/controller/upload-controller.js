import InvariantError from '../../../exceptions/invariant-error.js';
import response from '../../../utils/response.js';

export const uploadImages = async (req, res, next) => {
    console.log(req.file);
    console.log(req.headers);
    if (!req.file) {
        return next(new InvariantError('No file uploaded'));
    }

    const host = process.env.HOST || 'localhost';
    const port = process.env.PORT || 5000;

    const encodedFilename = encodeURIComponent(req.file.filename);

    const fileLocation = `http://${host}:${port}/uploads/${encodedFilename}`;

    return response(
        res,
        201,
        'Gambar berhasil diunggah',
        { fileLocation }
    );
};