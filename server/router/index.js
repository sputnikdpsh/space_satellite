const Router = require('express').Router;
const router = new Router();
const userController = require('../controllers/user-controller');
const fileController = require('../controllers/file-controller');
const eventController = require('../controllers/event-controller');
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');
const upload = require('../utils/multer');

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength( { min: 3, max: 32 }),
    userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);

router.post('/upload', upload.array('files', 10), fileController.uploadMultiple);
router.get('/download/:category/:directory/:filename', fileController.sendFile);
router.get('/get-files', fileController.getFiles);

router.post('/createEvent',upload.array('files', 10), eventController.createEvent);
module.exports = router;