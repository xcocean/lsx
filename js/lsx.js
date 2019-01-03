/**
 * 根据jQuery v2.1.4
 * 作者：凌康
 * 邮箱;910405656@qq.com
 * lsx版本：1.0.1
 */
//@ sourceURL=lsx.js

// 注册类的右击键--层次1995
window.onload = function () {
    document.oncontextmenu = function (e) {
        if (e.target.className == 'lsx-right-click') {
            e.preventDefault();//阻止浏览器默认的右击事件
            console.log(e)
            var rightMenu = document.createElement('div');
            rightMenu.style.position = "fixed";         //通过样式指定该div的位置方式
            rightMenu.style.left = e.clientX + 'px';
            rightMenu.style.top = e.clientY + 'px';
            rightMenu.style.zIndex = '1995';
            rightMenu.style.width = '200px';
            rightMenu.style.height = '220px';
            rightMenu.style.backgroundColor = "red";   //设置样式透明 
            rightMenu.innerText = '123';
            document.body.appendChild(rightMenu);


        }
    }

}
