module.exports = function (inputField, caretPos) {
    if (inputField.createTextRange) {
        var range = inputField.createTextRange();
        range.move('character', caretPos);
        range.select();
    } else {
        if (inputField.selectionStart || inputField.selectionStart === 0) {
            inputField.focus();
            inputField.setSelectionRange(caretPos, caretPos);
        } else {
            inputField.focus();
        }
    }
};
