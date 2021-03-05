const fs = require('fs');
const path = require('path');

//File System

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if (err) throw err

//     console.log("Folder creation");
// })

// fs.writeFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'Hello World!',
//     (err) => {
//         if (err) throw err
//         console.log('File creation')

//         fs.appendFile(
//             path.join(__dirname, 'notes', 'mynotes.txt'),
//             '\nFrom append file',
//             (err) => {
//                 if (err) throw err
//                 console.log('File edit')

//                 fs.readFile(
//                     path.join(__dirname, 'notes', 'mynotes.txt'),
//                     'utf-8',
//                     (err, data) => {
//                         console.log(data);
//                     }
//                 )
//             }
//         )
//     }
// );


fs.rename (
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if (err) throw err
        console.log ('File rename')
    }
)




