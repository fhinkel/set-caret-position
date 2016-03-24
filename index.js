module.exports = function (inputField, caretPos) {
    if (inputField != null) {
        if (inputField[0].createTextRange) {
            var range = inputField[0].createTextRange();
            range.move('character', caretPos);
            range.select();
        } else {
            if (inputField[0].selectionStart || $(inputField)[0].selectionStart ===
                0) {
                inputField[0].focus();
                inputField[0].setSelectionRange(caretPos, caretPos);
            } else {
                inputField[0].focus();
            }
        }
    }
};
