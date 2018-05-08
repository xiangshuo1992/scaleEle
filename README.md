## Introduction

ScaleEle是一个单屏（全屏）适配解决方案及jQuery插件。默认支持IE10+，适用移动端，如果需要适配IE8+，请选择IE8+版本。

## Application.js

```
//= require jquery
...
//= require scaleEle
```

## Configuration

| Name      | Type    |  Default  | Description |
| --------  | ------  | --------- | ------------ |
| select     | Boolean  |   null   | 需要缩放的元素的ID或者类名等选择器 |
| width     | Number  |   null   | （设计稿）宽度，移动端需要算一半（750/2） |
| height      | Number |   null    | （设计稿）高度，移动端需要算一半（1206/2） |
| mode     	| String |   'contain'    | 缩放模式，有cover和contain两种，默认contain模式 |
| position     	| String |   'center'    | 该参数有center/top/bottom等关键字与css对应，默认居中;IE8,IE9不支持该参数，设置无效，只能通过样式达到居中，而且无法实现固定在如左下角这样的特定位置;IE10+和移动端支持三个参数，如：'left bottom 0px'。 |

## Examples

```
<style>
    *{margin: 0;padding: 0;}
    html,body{width: 100%;height: 100%;}
    .page{position: absolute;top: 0;left: 0;right: 0;bottom: 0;background-color: #000;overflow: hidden;}
    .page__inner,.page__bg{position: absolute;width: 375px;height: 603px;top: 50%;left: 50%;margin: -301.5px 0 0 -187.5px;background-color: #fff;}
    .page__bg{background-color: blue;}
    .box{position: absolute;width: 100px;height: 100px;left: 0;bottom: 0;background-color: red;z-index: 1;}
</style>

<div class="page">
    <!-- 可以裁切的背景层 cover-->
    <div class="page__bg"></div>
    <!-- 需要完整展示的主内容 contain-->
    <div class="page__inner"></div>
    <!-- 其他元素 -->
    <div class="box"></div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="scaleEle.js"></script>

<script>
$(function(){
    $.scaleEle({
        select: '.page__inner',
        width: 375,
        height: 603,
        mode: 'contain',
        position: 'center'
    });

    $.scaleEle({
        select: '.page__bg',
        width: 375,
        height: 603,
        mode: 'cover',
        position: 'center'
    });

    $.scaleEle({
        select: '.box',
        width: 375,
        height: 603,
        mode: 'contain',
        position: 'left bottom 0px'
    });
})
</script>
```

## License

The MIT License(http://opensource.org/licenses/MIT)

Please feel free to use and contribute to the development.

## Contribution

If you have any ideas or suggestions to improve ScaleEle, welcome to submit an issue/pull request.
