    const navliList =Array.from(document.querySelectorAll("nav li"));   // 不重要 
    const gouwuche= document.querySelector("#shopcar .num");

    let cookie2 = new Cookiefn();


    initStyle();
    function initStyle(){
    navliList.forEach((item,index)=>{
    item.style.float = index<4 ? "left" : "right";
    })
    }
    
    
    !function($){
    class  oneMenu{
    // 下拉框需要父元素 添加的title数组  数组对应的跳转数组  ul 的宽度  ul 相对于父元素的位置 左上角 或 右上角
    constructor(option){
    Object.assign(this,option)
    this.width = !this.width ? this.$fat.innerWidth() : this.width;
    this.liList = new Array();
    this. init();
    }
    //初始化 通过
    init(){
    //  应为需要定位父元素   用到绝对定位   所以父元素需要相对定位  自家加上
    this.$fat.css("position","relative")
    // 创建 一个ul 用作定位父元素    绝对定位 父元素可视宽度                  相对父元素 位置  top 父元素高度
    this.ul = this.ce("div",{position:"absolute",background:"#fff",width:this.width+"px",display:"none"
    ,overflowY:this.sroll ? "scroll" : "none",height: this.height ? this.height+"px": "none",zIndex:"300",
    left:this.direction ? 0 :"none",border :"1px solid #ccc",
    borderTop : "none",
    right:this.direction ? "none":0,top:this.$fat.height()-2+"px"
    },this.$fat);
    //  遍历 添加的一级菜单的 数组   创建 li 并添加 跳转数组
    $.each(this.titleList,(index,item)=>{
    this.liList[index] = this.ce("p",{height:this.$fat.height()+"px",fontSize:"12px"
    ,lineHeight:this.$fat.height()+"px",textIndent:"1em"
    ,cursor:"pointer",background:"#fff"},$(this.ul));
    this.liList[index].index = this.hrefList[index];
    this.liList[index].textContent = item;
    })

    $(this.liList).on("click",function(){
    $(this.parent).css("display","none");
    window.location.href =  this.index
    })

    $(this.liList).hover(
        function(){
        this.style.background="#f5f5f5";
        },function(){
            this.style.background="#fff";
        })
        

    this.$fat.hover(
    ()=>{
    this.ul.style.display="block"
    },()=>{
    this.ul.style.display="none"
    })
    }
    // 创建
    ce(type,style,parent){
    let elem = document.createElement(type);
    Object.assign(elem.style,style);
    parent.append(elem);
    return elem;
    }
    }
    $.oneMenu = oneMenu;
    }(jQuery)



    let arr1 = ['全国','中国大陆','中国香港','中国台湾','中国澳门','韩国','马来西亚','澳大利亚','澳大利亚','新加坡'];
    let arr2 = ['http://10.31.162.16/taobao','http://10.31.162.16/taobao','http://10.31.162.16/taobao',
    'http://10.31.162.16/taobao','http://10.31.162.16/taobao','http://10.31.162.16/taobao','http://10.31.162.16/taobao',
    'http://10.31.162.16/taobao','http://10.31.162.16/taobao','http://10.31.162.16/taobao'];

                new $.oneMenu({
                    titleList: arr1,
                    hrefList: arr2,
                    width: 120,
                    height:150,
                    sroll: 1,
                    $fat: $(".SelectArea"),
                    direction: 1
                });
    
                new $.oneMenu({
                    titleList: ['已买到的宝贝','我的足迹'],
                    hrefList: arr2,
                    width:100,
                    $fat: $(".our_taobao"),
                    direction: 1
                });
               
                new $.oneMenu({
                    titleList: ['收藏的宝贝','收藏的店铺'],
                    hrefList: arr2,
                    width:80,
                    $fat: $(".collection"),
                    direction: 1
                });
                arr1 = ['免费开店','已卖出的宝贝','出售中的宝贝','卖家服务市场','卖家培训中心','体检中心','问商友']
                new $.oneMenu({
                    titleList: arr1,
                    hrefList: arr2,
                    width:120,
                    $fat: $(".maijiaconter"),
                    direction: 1
                });
                new $.oneMenu({
                    titleList: ['消费者客服','卖家客服'],
                    hrefList: arr2,
                    width:100,
                    $fat: $(".CustomerService"),
                    direction: 1
                });

                new $.oneMenu({
                    titleList: ['消费者客服','卖家客服'],
                    hrefList: arr2,
                    width:1200,
                    $child:$("#Webnavigation .Webnavigation"),
                    $fat: $("#Webnavigation"),
                    direction: 0
                });


gouwuchejingru();
                //  购物车小图标方法    记录id数量
function gouwuchejingru(){
    if(cookie2.selectCookie('arrsid')){
    if(cookie2.selectCookie('arrsid').split(",").length==0){
        gouwuche.style.display = "none";
     }else{
        gouwuche.innerHTML= cookie2.selectCookie('arrsid').split(",").length;
        gouwuche.style.display = "block" ;
     }
    }
}

// 获取cookie  验证密码和账户 点击验证防火墙 并 实现购物车的保存和传出
!function($){
     
    class shopcarInitialize{
        constructor(option){
        Object.assign(this,option);
        this.password = this.cookie.selectCookie("password");
        this.email = this.cookie.selectCookie("email");
        this.init();
        }

         init(){
         
            if(this.password){
                this.Pleaselogin.html(this.email);
                this.Pleaselogin.parent().next().css("display","none");
                this.arrclick.forEach((item,index)=>{
                    item.attr("href",this.arrhref[index]);
                })

            //   console.log(this.arrclick[this.shopcar])  
            }else{
                this.arrclick.forEach((item,index)=>{
                    index == this.mytaobao ? item.html("我的淘宝") : "";
                    item.attr("href","http://10.31.162.16/taobao/denglu.html");
                })
            }
          


         }
          

         // 购物车 商品添加  并获取后台数据，添加到 页面中。
         creat(){

         }

                
         ce(type,style,parent){
            let elem = document.createElement(type);
            Object.assign(elem.style,style);
            if(parent)
            parent.append(elem);
            return elem;
        }
       

    }

$.shopcarInitialize = shopcarInitialize;
}(jQuery)

//  购物车验证类   传入 在用户登录前后不同点击的按钮  
let arrclick = [$("#shopcar"),$("#favorites"),$("#mytaobao")];
//  购物车验证类 传入 在用户登录后点击的按钮 的 跳转   和按钮一一对应
let arrhref = ["http://10.31.162.16/taobao/shopcar.html","http://10.31.162.16/taobao/shopcar.html","http://10.31.162.16/taobao/shopcar.html"];

new $.shopcarInitialize({cookie : new Cookiefn(),
    arrclick:arrclick
    ,arrhref:arrhref
    ,Pleaselogin:$("#Pleaselogin"),
    shopcar:0});








