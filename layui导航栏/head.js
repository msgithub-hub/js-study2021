layui.use( 'jquery', () => {
    let element = layui.element;
    let $=layui.jquery;
    // let layer=layui.layer;
    element.render();
    $(function () {
        // 媒体查询
        $('.head').on('click', 'h2',function () {
            $('.layui-nav-tree1').show(500);
        });
        $('.head').on('click', '.close',function () {
            $('.layui-nav-tree1').hide(500);
        });

        $('.ulFa li a').each(function(){
            if($($(this))[0].href==String(window.location))
                $(this).parent().addClass('layui-this').siblings('.layui-this').removeClass('layui-this');
        });

    })

});