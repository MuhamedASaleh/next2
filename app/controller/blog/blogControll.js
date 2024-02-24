const router = require('express').Router()
const asyncHandler = require('express-async-handler')
const Blog = require('../../models/blog')


router.post("/blog", asyncHandler(async (req, res, next) => {
    try {
        const title = req.body.title
        const description = req.body.description
        const image = req.body.image

        console.log(title , description , image)

        const newBlog = await Blog.create({
            title, description, image
        });


        res.status(201).json({ newBlog });
    } catch (error) {
        console.error('Error creating new item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));

module.exports = router