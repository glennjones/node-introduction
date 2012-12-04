var fs 		= require('fs'),
	path 	= require('path'),
	moment 	= require('moment');

function fileLastModified(filename, callback){
	var filePath = path.resolve(__dirname, '../' + filename);
	fs.stat(filePath, function(err, stat){
		if(err){
			callback(err, null)
		}else{
			var updated = moment(stat.mtime)
			callback(null, updated.fromNow())
		}
	})
}  

exports.fileLastModified = fileLastModified;