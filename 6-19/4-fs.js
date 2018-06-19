'use strict';

var fs = require('fs');
// 异步读取文件
fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})
// 异步读取图片
fs.readFile('sample.jpg', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes');
        // 异步写入图片（传入一个buffer对象）
        fs.writeFile('output.jpg', data, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('ok.');
            }
        });
    }
});
// 同步读取没有回调，直接赋值
try {
    var data = fs.readFileSync('samplexxx.txt', 'utf-8');
    console.log(data);
} catch (err) {
    // 出错了
    console.log(err)
}

// 同步写入文件
fs.writeFileSync('./txt/output1.txt', data);
// 异步写入文件
var data = 'Hello, Node.js 重新覆盖';
fs.writeFile('output.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});

// 获取文件信息
fs.stat('./txt/output1.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});