//common js 
const fs = require('fs');

// b= fs.mkdir('Abhay', (err)=>{
//     console.log('folder created')
// })

// a = fs.writeFile('./Abhay/file1.txt','unsolve mistery present here',(err)=>{
//     console.log('new file ')
//     console.log('a')
// })

// fs.appendFile('./Abhay/file1.txt', 'change u r openion',()=>{
//     console.log('text change')
// })

// fs.readFile('file1.txt','utf8', (err,data)=>{
//         console.log(data)
//         console.log("finish reading")
//     })
    

// fs.rename('./Abhay/file1.txt','./Abhay/myth.txt',()=>{
//     console.log('rename')
// })

fs.unlink('./Abhay/myth.txt',()=>{
    console.log('file deleted')
})

fs.rmdir('./Abhay',()=>{
    console.log('folder delete')
})