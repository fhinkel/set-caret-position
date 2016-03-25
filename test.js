var setCaretPosition = require('./index.js');


document = {
    getElementById: function() {
        return element;
    }
};

var element = {
    range: {
        move: function () {
        },
        select: function () {
        }
    },
    createTextRange: function () {
        return this.range
    }
};
setCaretPosition(element);

console.log('Done testing. All good');