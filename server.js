const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const path = require('path'); // Add this line to import the 'path' module

app.use(bodyParser.urlencoded({extended:false}));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public'))); // to access the file within same folder, remove everything after comma

//Route to our homepage
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/home.html');
});

//Route to the login page
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/login.html');
});

app.post('/login',(req,res)=>{
    let username=req.body.name;
    let password=req.body.pw;
    res.render(__dirname+'/response.ejs', {username:username, password:password});
});

app.listen(3000, ()=>{
    console.log('Server listening on port 3000');
});
