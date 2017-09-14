/**
 * Created by lmy on 17-9-14.
 */
$(function(){
    //展示层
    function showLayer(id){
        var layer = $('#'+id),
            layerwrap = layer.find('.hw-layer-wrap');
        layer.fadeIn();
        //屏幕居中
        layerwrap.css({
            'margin-top': -layerwrap.outerHeight()/2
        });
    }

    //隐藏层
    function hideLayer(){
        $('.hw-overlay').fadeOut();
    }

    $('.hwLayer-ok,.hwLayer-cancel,.hwLayer-close').on('click', function() {
        hideLayer();
    });

    //触发弹出层
    $('.show-layer').on('click',  function() {
        var layerid = $(this).data('show-layer');
        showLayer(layerid);
    });

    //点击或者触控弹出层外的半透明遮罩层，关闭弹出层
    $('.hw-overlay').on('click',  function(event) {
        if (event.target == this){
            hideLayer();
        }
    });

});