const express = reqire('express');
const app = express();

app.get('/' , (req,res)=>{
        res.send("Welcome here");
});

app.listen(3000, function(){
        console.log("app listening on port 3000");
});