import jwt from 'jsonwebtoken';
import confs from './conf.js';
export const auth = (req, res, next) => {
    if (!req.headers.authorization)
        return next(new Error('AUTH_REQUIRED'));
    const token = req.headers.authorization.split(' ')[1];
    if (!token)
        return next(new Error('AUTH_REQUIRED'));
    try {
        req.token = jwt.verify(token, confs.SECRET);
        next();
    }
    catch (e) {
        return next(new Error('TOKEN_INVALID'));
    }
};
//# sourceMappingURL=middleware.js.map