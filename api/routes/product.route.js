const express = require("express");
const router = express.Router();
const multer = require('multer');

const authorize = require('../middleware/auth');
const productController = require('../controllers/product.controler');


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});


router.get("/", productController.products_get_all);

router.post("/", authorize, upload.single('productImage'), productController.products_create);

router.get("/:productId", productController.products_get_by_id);

router.patch("/:productId", authorize, productController.products_update);

router.delete("/:productId", authorize, productController.products_delete);

module.exports = router;
