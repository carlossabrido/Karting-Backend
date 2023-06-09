import express from "express";
import { createUser, deleteteUser, listAdmin, login, updateUser, userList, userListByID } from "./controller.js";
import { auth } from "../../core/middleware.js";
const router = express.Router();
router.get('/', auth, async (req, res, next) => {
    try {
        res.json(await userList(req));
    }
    catch (e) {
        next(e);
    }
});
router.get('/user', async (req, res, next) => {
    console.log('o');
    try {
        res.json(await listAdmin(req));
    }
    catch (e) {
        next(e);
    }
});
router.get('/:id', auth, async (req, res, next) => {
    try {
        res.json(await userListByID(req));
    }
    catch (e) {
        next(e);
    }
});
router.post('/', async (req, res, next) => {
    try {
        res.json(await createUser(req.body));
    }
    catch (e) {
        next(e);
    }
});
router.post('/login', async (req, res, next) => {
    try {
        res.json(await login(req.body));
    }
    catch (e) {
        next(e);
    }
});
router.put('/:id', auth, async (req, res, next) => {
    try {
        res.json(await updateUser(req));
    }
    catch (e) {
        next(e);
    }
});
router.delete('/:id', auth, async (req, res, next) => {
    try {
        res.json(await deleteteUser(req));
    }
    catch (e) {
        next(e);
    }
});
export default router;
//# sourceMappingURL=router.js.map