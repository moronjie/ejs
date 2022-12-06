const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

app.set('view engine', "ejs")
app.set("views", path.join(__dirname,'view'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({limit:'10mb', extended:false}))

const items = ["moro", "njie"]

app.get('/',(req,res)=>{
    res.render('index',{items})
})
app.post('/',(req,res)=>{
    //console.log(req.body.myinput);
    const item = req.body.myinput
    items.push(item)
    res.redirect('/')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.listen(3030, ()=>{
    console.log(`app is runing at http://localhost:3030`);
})