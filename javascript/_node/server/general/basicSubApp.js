const app = express();
const blog = express();

app.use('/blog', blog);


blog.get('/feed', (req, res, next) => {
  res.send('Blog Feed');
})