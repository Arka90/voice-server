import Post from "../models/Post.js";

export const createComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    post.comments.push(req.body.comment);
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
