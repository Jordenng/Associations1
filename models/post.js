var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/blog_demo_2", {useNewUrlParser: true, useUnifiedTopology: true});

// POST = title, content //

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
module.exports = mongoose.model("Post", postSchema);
