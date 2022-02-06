const express = require('express');

const app = express(); 

app.get('/articles', (req, res) => {
    res.json([
        {
            title: 'HP', author: 'JK'
        },
        {
            title: 'LOTR', author: 'IFORGET'
        },
        {
            title: 'DM', author: 'BK'
        },
    ])
})

app.listen(80, () => {
    console.log('server listening...')
})