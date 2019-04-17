


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});


app.get("/completeform", function(req,res){
	
	var fid = req.query.fid;
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/"
}

	MongoClient.connect(url, function(err, db){

	if (err) throw err;
	var dbo = db.db("webform");
	var query = {formname:fid};
	dbo.collection("formdef").findOne({},
		function(err, result){
		var fields = result.fields;

		db.close(;)
		}
	}