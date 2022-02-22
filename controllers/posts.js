const PostSchema = require("../models/posts");

class PostController {
   createOne = async (req, res) => {
      try {
         const post = await PostSchema.create(req.body);
         res.status(200).json(post);
      } catch (e) {
         res.status(500).json(e.message);
      }
   }

   getAll = async (req, res) => {
      try {
         const posts = await PostSchema.find();
         res.status(200).json(posts);
      } catch (e) {
         res.status(500).json(e.message);
      }
   }

   getOne = async (req, res) => {
      try {
         const post = await PostSchema.findById(req.params.id);
         res.status(200).json(post);
      } catch (e) {
         res.status(500).json(e.message);
      }
   }

   updateOne = async (req, res) => {
      try {
         const post = req.body;

         !post._id && res.status(400).json({ message: 'Id is not defined' });

         const updatedPost = await PostSchema.findByIdAndUpdate(post._id, post, { new: true });
         
         res.status(200).json(updatedPost);
      } catch (e) {
         res.status(500).json(e.message);
      }
   }

   deleteOne = async (req, res) => {
      try {
         !req.params.id && res.status(400).json({ message: 'Id is not defined' });

         const post = await PostSchema.findByIdAndDelete(req.params.id);

         res.status(200).json(post);
      } catch (e) {
         res.status(500).json(e.message);
      }
   }
}

module.exports = new PostController();
