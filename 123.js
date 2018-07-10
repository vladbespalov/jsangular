var fs = require('fs');

var text='qweasodjawiudhasdyehy8awdasiudjaoidyushasy';
var news = 'рашка отлетела по пенальти';


var cont =  fs.writeFileSync('nod.txt',text)
var newasd = fs.readFileSync('nod.txt','utf-8');
console.log(newasd);
var copyFile = fs.copyFileSync('nod.txt','copy.txt')
var asdasd = fs.readFileSync ('copy.txt','utf-8')
console.log(asdasd);
// var del = fs.unlinkSync('copy.txt');
// var asdasd = fs.readFileSync ('copy.txt','utf-8')
// console.log(asdasd);
fs.appendFileSync('news.txt',news);
var newsread = fs.readFileSync('news.txt','utf-8')
console.log(newsread)

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'log',
        pass: 'pass'
    }
});

console.log('created');
transporter.sendMail({
from: 'my@gmail.com',
  to: 'my2@gmail.com',
  subject: 'hello world!',
  text: 'hello world!'
});