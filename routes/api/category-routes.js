const router = require('express').Router();
const { Category } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    Category.findAll({

    }).then(dbCategoryData => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.get('/:id', (req, res) => {


});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;
