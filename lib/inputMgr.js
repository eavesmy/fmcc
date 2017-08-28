module.exports = {
    input: function() {
        var mainInput = document.querySelector(cosDefine.mainInput);

        inputText = mainInput.value;

        inputText = inputText.split(" ");

        var str = "";

        for (let i = 0; i < inputText.length; i++) {
            let opt = inputText[i];

            let _ = cosDefine.urlSplice[i];

            if (!_) _ = "";

            let _splice = !!i ? `/${opt}` : opt;

            str += _splice
        }

        return {
            url: str,
            program: inputText[0],
            parma: inputText[1]
        }
    },

    isEnter: function(e) {
        return e.keyCode === cosDefine.ENTER_CODE && !e.ctrlKey;
    },

    format: function() {
        var mainInput = document.querySelector(cosDefine.mainInput);

        inputText = mainInput.value.split(" ");
        parmas = inputText.slice(1, inputText.length);

        return {
            program: inputText[0],
            parmas: parmas
        }
    }
}
