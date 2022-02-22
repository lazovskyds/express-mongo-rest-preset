const Router = require("express");
const PostController = require("../controllers/posts");

const router = new Router();

router.get('/', PostController.getAll);
router.get('/:id', PostController.getOne);
router.post('/', PostController.createOne);
router.put('/', PostController.updateOne);
router.delete('/:id', PostController.deleteOne);

module.exports = router;
