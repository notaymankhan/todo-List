const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
var todos =[];
var workItems =[];

app.get("/", function (req, res) {

  let thisDay = date.getDate();
  




res.render("list", { listTitle: thisDay ,addedItems : todos });
console.log(req.body);

  // res.send();
});

app.post("/",function(req,res){
    var listType = req.body.list;
    var todo = req.body.todo;
    if (listType ==="Work List"){
        workItems.push(todo);
        
        console.log(todo);
        console.log(listType);
        console.log("added to work list");
        res.redirect("/work");

    } 
    else{
        todos.push(todo);
        console.log(todo);
        console.log(listType);
        res.redirect("/");
        console.log("added to default list");

    }
    
})


app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",addedItems:workItems});
});
app.post("/work",function(req,res){
    let todo = req.body.todo;
    workItems.push(todo);
    console.log(todo);
    console.log("Added to work list");
    res.redirect("/work");
    
});

app.listen(3000, function () {
  console.log("listening on port 3000");
});
