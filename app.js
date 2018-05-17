var express=require('express');
var app=express();
var http=require('http').Server(app);
var io=require('socket.io')(http);
app.set('view engine','ejs')
app.use(express.static('./public'))
app.get('/',function(req,res){
	res.render('index',{
		title:'聊天室'
	})
})
io.on('connection',function(socket){
	socket.on("fasong",function(msg){
		console.log(msg);
		io.emit("jieshou",msg)
	})
})
// 注意是http在监听
http.listen(3000)