module.exports = function (inputField, caretPos) {
    var element = document.getElementById(inputField);
    if (element.createTextRange) {
        var range = element.createTextRange();
        range.move('character', caretPos);
        range.select();
    } else {
        if (element.selectionStart || element.selectionStart === 0) {
            element.focus();
            element.setSelectionRange(caretPos, caretPos);
        } else {
            element.focus();
        }
    }
};

