!function(a){a.easy={rotate:function(b){var c={selector:".rotate",initPause:0,pause:7e3,randomize:!1,callback:function(){}};"string"==typeof b&&(c.selector=b);var b=a.extend(c,b);return a(b.selector).each(function(){function c(){var a=Math.floor(Math.random()*g)+1;return a}function d(){if(b.randomize){for(var d=c();d==h;)d=c();h=d}else h=h==g?1:h+1;a(f).children().hide(),a(f).children(":nth-child("+h+")").fadeIn("slow",function(){b.callback()})}function e(){d(),setInterval(d,b.pause)}var f=a(this),g=a(f).children().length,h=0;g>1&&setTimeout(e,b.initPause)})}}}(jQuery),$(function(){$.easy.rotate()});