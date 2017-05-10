$(function() {
    var $son = $("#accordion .panel-default .panel-heading .panel-title a");
    var $parent = $("#accordion .panel-default");
    var $iconfont = $(".iconfont");
    $parent.click(function() {
        if ($son.eq($(this).index()).attr("aria-expanded") == undefined || $son.eq($(this).index()).attr("aria-expanded") == "false") {
            $iconfont.html("&#xe8f5;");
            $iconfont.eq($(this).index()).html("&#xe8f2;");
        } else if ($son.eq($(this).index()).attr("aria-expanded") == "true") {
            $iconfont.eq($(this).index()).html("&#xe8f5;");
        }
    });
});
