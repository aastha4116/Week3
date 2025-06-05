const os = require('os');

console.log('System Information:');
console.log('OS Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('Total Memory (MB):', (os.totalmem() / 1024 / 1024).toFixed(2));
console.log('CPU Count:', os.cpus().length);
