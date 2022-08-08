// phone-hide => show
var getDiv = document.querySelector(".phone-show-menu");
var isopen = true;
    // 1.点击
    getDiv.addEventListener('click',function()
    {
        isopen = !isopen;
        if(isopen){
            // 隐藏
            document.querySelector(".phone-hide").classList.remove("show");
            document.querySelector(".del").classList.remove("active");
        }else{
            // 显示
            document.querySelector(".phone-hide").classList.add("show");
            document.querySelector(".del").classList.add("active");
        }
        
    });
    // 2.点击别处
    document.addEventListener('click',function(){
        // 隐藏
        isopen = true;
        document.querySelector(".phone-hide").classList.remove("show");
        document.querySelector(".del").classList.remove("active");
        })
    // 3.阻止事件冒泡
    getDiv.addEventListener('click',function(event){
        var e=event||window.event;
        if(e.cancelBubble){
            e.cancelBubble=true;//ie 阻止事件冒泡
        }else{
            e.stopPropagation();// 其余浏览器 阻止事件冒泡
        }
    })
// 创作者中心菜单
var getDiv1 = document.querySelector(".more");
var isopen1 = true;
    // 1.点击
    getDiv1.addEventListener('click',function()
    {
        isopen1 = !isopen1;
        if(isopen1){
            // 隐藏
            document.querySelector(".del2").classList.remove("active");
            document.querySelector(".more-list").classList.remove("active");
        } else{
            // 显示
            document.querySelector(".del2").classList.add("active");
            document.querySelector(".more-list").classList.add("active");
        }
        
    });
    // 2.点击别处
    document.addEventListener('click',function(){
        // 隐藏
        isopen1 = true;
        document.querySelector(".del2").classList.remove("active");
        document.querySelector(".more-list").classList.remove("active");
        })
    // 3.阻止事件冒泡
    getDiv1.addEventListener('click',function(event){
        var e=event||window.event;
        if(e.cancelBubble){
            e.cancelBubble=true;//ie 阻止事件冒泡
        } else{
            e.stopPropagation();// 其余浏览器 阻止事件冒泡
        }
    });
// 头像菜单
var getDiv2 = document.querySelector(".menu");
var isopen2 = true;
    getDiv2.addEventListener('click',function(){
        isopen2 = !isopen2;
        if(isopen2){
            document.querySelector(".user-dropdown-list").classList.remove("active");
        } else{
            document.querySelector(".user-dropdown-list").classList.add("active");
        }
    });
    document.addEventListener('click',function(){
        isopen2 = true;
        document.querySelector(".user-dropdown-list").classList.remove("active");
    });
    getDiv2.addEventListener('click',function(event){
        var e=event||window.event;
        if(e.cancelBubble){
            e.cancelBubble=true;//ie 阻止事件冒泡
        } else{
            e.stopPropagation();// 其余浏览器 阻止事件冒泡
        }
    });

    // 搜索框active
    var getDiv3 = document.querySelector(".search-form");
    getDiv3.addEventListener('click', function(){
        
        document.querySelector(".search-input").setAttribute("placeholder","搜索文章/小册/标签/用户");
    })
    document.addEventListener('click',function(){
        
        document.querySelector(".search-input").setAttribute("placeholder","探索稀土掘金");
    })
    getDiv3.addEventListener('click',function(event){
        var e=event||window.event;
        if(e.cancelBubble){
            e.cancelBubble=true;//ie 阻止事件冒泡
        } else{
            e.stopPropagation();// 其余浏览器 阻止事件冒泡
        }
    });
//  !!!!!同时点击创作者中心和个人中心都会打开，sad
// 下滑一定程度main-header消失,view-nav置顶
function hideHeader(){
    var getDiv6 = document.querySelector(".main-header"); 
    var getDiv7 = document.querySelector(".view-nav");
    window.addEventListener("scroll", function(){
        var osTop1 = document.documentElement.scrollTop || document.body.scrollTop;
        if (osTop1 >= 400) {
            getDiv6.classList.remove("visible");
            getDiv7.classList.add("top");
        }
        else{
            getDiv6.classList.add("visible");
            getDiv7.classList.remove("top");
        }
    })
}
hideHeader();

// 回到顶部
function toTOP(){
    var getDiv4 = document.querySelector(".to-top-btn");
    getDiv4.onclick = function(){
        window.scrollTo(0,0);
    }
    window.addEventListener("scroll", function(){
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (osTop >= 900) {
            getDiv4.style.display = 'block';
        }else{
            getDiv4.style.display = 'none';
        }
    })
}
toTOP();

// 反馈
var getDiv5 = document.querySelector(".meiqia-btn");
getDiv5.onclick = function(){
    window.open('https://juejin.cn/pin/club/6824710202692993037?sort=newest');
}
