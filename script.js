// テキストを変換
function textTrans() {

    // 元の文字列を取得
    const before = $('.beforeText').val();
    // 元の文字列を1文字ずつ入れる
    const beforeText = before.split('');
    // 元の文字列の長さを取得
    const textLengs = beforeText.length;
    let afterText;
    let classText;

    // 1文字ずつ判断して入れる
    for (var i = 0; i < textLengs; i++) {
        if (i == 0) {
            afterText = beforeText[i] + '\n';
            classText = check(beforeText[i]) + '\n';
        } else {
            if (beforeText[i] == '\n') {
                afterText = afterText + '\n';
                classText = classText + '\n';
            } else {
                afterText = afterText + beforeText[i] + '\n';
                classText = classText + check(beforeText[i]) + '\n';
            }
        }
    }

    $('#afterText').html(afterText);
    $('#classificationText').html(classText);
}

// 種類チェック
function check(str) {
    console.log(str);
    if (str.match(/^[ぁ-ん]*$/)) { //"ー"の後ろの文字は全角スペースです。
        return 'ひらがな';
    } else if (str.match(/^[ァ-ヶ]+$/)) {
        return 'カタカナ';
    } else if (str.match(/^[a-zA-Z]+$/)) {
        return 'アルファベット';
    } else if (str.match(/^[0-9]+$/)) {
        return '数字';
    } else {
        return '＊';
    }
}

$(function() {
    // ボタンクリックで縦書きにする
    $('.transformButton').click(function() {
        textTrans();
    });

    // ボタンクリックでクリア
    $('.clearBtn').click(function() {
        $('.beforeText').val("");
    });

    // ボタンクリックでコピー
    $('.copyAfterText').click(function() {
        const copyText = document.getElementsByTagName("textarea")[1];
        copyText.select();
        document.execCommand("copy");
    });
    $('.copyClassText').click(function() {
        const copyText = document.getElementsByTagName("textarea")[2];
        copyText.select();
        document.execCommand("copy");
    });
});