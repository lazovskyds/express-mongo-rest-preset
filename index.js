const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const postRouter = require("./routes/posts");

const port = config.get('port') || 5000;
const app = express();

app.use(express.json());
app.use('/api/posts', postRouter);

const start = async () => {
   try {
      await mongoose.connect(config.get('DBURL'));
      app.listen(port, () => console.log('Server started on port ' + port));
   } catch (e) {
      console.log(e);
   }
}

start();
