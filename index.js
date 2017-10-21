var faces = require('./faces').faces;

exports.get = function(amount) {
    if (arguments.length === 0) {
        return faces[getRandomNumber()];
    } else {
        var finalFaces = [];

        for (var i = 0; i < amount; i++) {
            finalFaces.push(faces[getRandomNumber()]);
        }

        return finalFaces;
    }
};

function getRandomNumber() {
    return Math.floor(Math.random() * faces.length);
}