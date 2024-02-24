const router = require('express').Router()
const asyncHandler = require('express-async-handler')
const Item = require('../../models/item')


router.post('/', asyncHandler(async (req, res, next) => {
    try {
        const title = req.body.title
        const description = req.body.description
        const photo = req.body.photo

        console.log(title, description, photo)


        const newItem = await Item.create({
            title,
            description,
            photo
        });

        res.status(201).json({ newItem });
    } catch (error) {
        console.error('Error creating new item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));

module.exports = router