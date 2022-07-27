const express = require('express');
const app = express();
const News = require('./news/news')

app.use(express.static('public'));

const news = new News();
news.cteate({ title: 'some title', content: 'some content' });
app.listen(3000, () => {
    console.log('Port is listing.');
});