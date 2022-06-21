const express = require("express");
const app = express();
const https = require("https");

app.get("/",function(req,res){
  const url = "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=3268c34ad4b503758529949398f0ff33";
  https.get(url , function(response){
    console.log(response.statusCode);
    response.on("data" , function(data){
      const weatherData = JSON.parse(data);
      console.log(weatherData);
      const temp = weatherData.main.temp;
      console.log(temp);
      const description = weatherData.weather[0].description;
      console.log(description);
      res.write("weather description is " + description);
      res.write("Temp in chennai is " + temp);
      res.send();
    })
  })


})




app.listen(3000,function(){
  console.log("server is running at port 3000");
})
