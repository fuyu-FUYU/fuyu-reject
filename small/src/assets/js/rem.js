export default function() {
    // var devicePixelRatio = 1;
    // var scale = 1 / devicePixelRatio;
    // document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
    // 7.5根据设计稿的横向分辨率/100得来
    
    function setRemUnit(){
        //获取屏幕宽度
        var deviceWidth = document.documentElement.clientWidth;
        // 屏幕宽度 / 7.5  ? 方便计算。 
        // 1. ui给的设计图宽度一般：750px
        // 2. 把屏幕宽度进行切割750份，每一份可以容纳设计稿1px的宽度。
        //3. 浏览器最小能识别的font-size为12px, 所以*100
        //4.html font-size ===100px     1rem==100px;
        // 5.在计算的时候， 200px 就用2rem表示。


         // if(deviceWidth > 750) {
            // deviceWidth = 750;
        //     deviceWidth = 7.5 * 50;
        // }
 
        document.documentElement.style.fontSize = deviceWidth / 377 * 100+ 'px';
    }
    setRemUnit();
      // reset rem unit on page resize
    window.addEventListener('resize', setRemUnit)
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
        setRemUnit()
        }
    })
    // 禁止双击放大
    document.documentElement.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, false);
    var lastTouchEnd = 0;
    document.documentElement.addEventListener('touchend', function (event) {
        var now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}
