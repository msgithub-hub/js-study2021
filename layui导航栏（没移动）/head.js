layui.use(['element', 'jquery'], () => {
    let element = layui.element;
    let $ = layui.jquery;
    element.render();
    $(function () {
        // 媒体查询
        $('.head').on('click', 'h2', function () {
            $('.ulFa').show(500);
        });
        $('.head').on('click', '.close', function () {
            $('.ulFa').hide(500);
        });

        $('.ulFa li a').each(function () {
            if (this.href == String(window.location)) {
                $(this).parent().addClass('layui-this').siblings('.ulFa li ').removeClass('layui-this');
                if ($('.ulFa li dl dd a').hasClass('layui-this')) {
                    $('.ulFa li .a').removeClass('layui-this')
                }
            }
        });
    })
});