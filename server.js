const express = require('express');
const app = express();
const port = 8081;
app1.disable("x-powered-by");

//app.use('/static', express.static('public'))
app.use(express.static('public'))
app.listen(port, () => console.log(`listening on port ${port}!`));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
