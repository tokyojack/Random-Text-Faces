var faces = require('./faces').faces;

exports.get = function(amount) {
    var rn = Math.floor(Math.random() * faces.length);
    if (arguments.length === 0) {
        return faces[rn];
    } else {
        var finalFaces = [];
        
        for (var i = 0; i < amount; i++) {
            finalFaces.push(faces[rn]);
        }
        
        return finalFaces;
    }
};