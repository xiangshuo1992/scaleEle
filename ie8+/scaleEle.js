(function ($) {
    /**
    *缩放插件
    *
    * @param String select       需要缩放的元素的ID或者类名等选择器
    * @param Number width       （设计稿）宽度，移动端需要算一半（750/2）
    * @param Number height      （设计稿）高度，移动端需要算一半（1206/2）
    * @param String mode         缩放模式，有cover和contain两种，默认contain模式
    * @param String position     该参数有center/top/bottom等关键字与css对应，默认居中;
    *                            IE8,IE9不支持该参数，设置无效，所以只能通过样式达到居中，而且无法实现固定在如左下角这样的特定位置;
    *                            IE10+和移动端支持三个参数，如：'left bottom 0px'。
    */
    function ScaleEle(config){
        //默认配置参数
        this.config = {
            select: null,
            width: null,
            height: null,
            mode: 'contain',
            position: 'center'
        };
        //配置参数合并
        this.config = $.extend(this.config, config);

        this.supCss3 = this.isCss3();
        this.getScale();
        this.setTrans();

        //响应屏幕变化
        var that = this;
        $(window).resize(function(){
            that.getScale();
            that.setTrans();
        })
    };

    //判断是否支持css3
    ScaleEle.prototype.isCss3 = function(){
        var style = document.createElement("div").style;
        console.log(style)
        for (var k in style) {
            if (k.toLowerCase().indexOf("animation") != -1) {
                return true;
            }
        }
        return false;
    };

    //获取缩放值
    ScaleEle.prototype.getScale = function(){
        var obj = this.config;
        var eleWidth = obj.width;
        var eleHeight = obj.height;
        
        var winWidth = $(window).width();
        var winHeight = $(window).height();
        
        if (obj.mode == 'cover') {
            this.eleScale = Math.max(winHeight / eleHeight, winWidth / eleWidth);
        }else if(obj.mode == 'contain'){
            this.eleScale = Math.min(winHeight / eleHeight, winWidth / eleWidth);
        }
    };

    //设置元素变换
    ScaleEle.prototype.setTrans = function(){
        var config = this.config;
        if (this.supCss3){
            $(config.select).css({
                '-webkit-transform-origin':config.position,
                'transform-origin':config.position,
                '-webkit-transform': 'scale('+this.eleScale+')',
                'transform': 'scale('+this.eleScale+')'
            });
        }
        else{
            $(config.select).css('zoom',this.eleScale);
        }
    };
    //扩展到jQuery对象上
    $.extend({
        scaleEle: function(config){
            new ScaleEle(config);
        }
    });
})(jQuery);