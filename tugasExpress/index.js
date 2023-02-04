const  express= require('express');
const log = require('./middlewares/logger');
const router = require('./routes')
const app = express();
const path = require('path');

app.use(log);
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/public',express.static(path.join(__dirname,'uploads')));
app.use(router)
app.use((req,res,next) => {
    res.send({
        status:'failed',
        message:'Resource' + req.originalUrl + 'Not Found'
    })
})

app.listen(3000,() => console.log('Server is running at http://localhost:3000'))