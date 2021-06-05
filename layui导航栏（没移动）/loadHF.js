layui.use(['element', 'layer', 'jquery'], () => {
    let $=layui.jquery;
    $(function () {
        $('#tou').load('head.html',function () {
            let sc =  document.createElement("script");
            sc.src= "./head.js";
            $("body").append(sc);
        });

    })

})