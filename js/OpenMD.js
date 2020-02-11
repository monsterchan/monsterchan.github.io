var spawn = require('child_process').exec;
hexo.on('new', function(data){
  spawn('start  "G:/Mardown/MarkdownPad2.exe" ' + data.path);
});
