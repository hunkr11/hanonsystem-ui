//모든 input창 focusout때 trim처리
$(document).ready(function () {
    $(document).on("focusout", "input", function () {
        $(this).val($.trim($(this).val()));
    });
});

//금액 콤마찍기
function Fn_numberFormat(num) {
    num = num.replace(/^\s*|\s*$/g, "");
    if (num == "" || isNaN(num)) {
        return num;
    } else {
        var pattern = /(-?[0-9]+)([0-9]{3})/;
        while (pattern.test(num)) {
            num = num.replace(pattern, "$1,$2");
        }
        return num;
    }
}

//TEXT를 받아 HTML 태그를 제거후 반환
function RemoveHTMLText(text) {
    var objReg = new RegExp();
    objReg = /[<][^>]*[>]/gi;
    text = text.replace(objReg, "");
    return text;
}

//TEXT를 받아 Script 태그를 제거후 반환
function RemoveScriptText(text) {
    var objReg = new RegExp();
    objReg = /<script[^>]*>(.*?)<\/script>/gi;
    text = text.replace(objReg, "");

    objReg = /<script[^>]*>/gi;
    text = text.replace(objReg, "");

    objReg = /<\/script>/gi;
    text = text.replace(objReg, "");
    return text;
}

//NAME명을 받아 Script태그를 제거후 해당 input에 삽입
function RemoveScript(name) {
    $("[name='" + name + "']").val(RemoveScriptText($("[name='" + name + "']").val()));
}

//이메일 형식 체크
function emailFormCheck(text) {
    var objReg = new RegExp();
    objReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
    //이메일형식 오류
    if (text.length < 6 || !objReg.test(text)) {
        return false;
    } else {
        return true;
    }
}

// <, > 특수문자 체크
function tagCheckByFormId(id, language) {
    var tagYn = false;
    $("[id='" + id + "'] input").each(function () {
        if ($(this).attr("name") != undefined && $(this).attr("name").indexOf("_html") == -1) {
            if ($(this).val().indexOf("<") > -1 || $(this).val().indexOf(">") > -1) {
                if (language == "En") {
                    alert("You can't insert <,> or a special character.");
                } else {
                    alert("<, > 특수 문자는 사용하실 수 없습니다.");
                }
                $(this).focus();
                tagYn = true;
            }
        }
    });
    $("[id='" + id + "'] textarea").each(function () {
        if ($(this).attr("name") != undefined && $(this).attr("name").indexOf("_html") == -1 && $(this).attr("name") != "tseHtmlSource") {
            if ($(this).val().indexOf("<") > -1 || $(this).val().indexOf(">") > -1) {
                if (language == "En") {
                    alert("You can't insert <,> or a special character.");
                } else {
                    alert("<, > 특수 문자는 사용하실 수 없습니다.");
                }
                $(this).focus();
                tagYn = true;
            }
        }
    });

    return tagYn;
}