window.onload = () => {

    // 取得單一元素
    // var test = document.getElementById("test");

    // 取得所有元素，同時也是個陣列
    var elements = document.getElementsByTagName("*");

    // 搜尋有data-gte的元素
    for (let i = 0; i < elements.length; i++) {
        const e = elements[i];
        
        e.onclick=()=>{
            var target = e.getAttribute("data-gte-target");
            var offset = e.getAttribute("data-gte-offset");
    
            // 用 if 過濾沒有data-gte的元素
            if (target){
                var element = document.getElementById(target);
                
                // 畫面移動
                window.scrollTo({
                    top: element.offsetTop-offset,
                    behavior: "smooth" 
                });
            }
        }
    }
}