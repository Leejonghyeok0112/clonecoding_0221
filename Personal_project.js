let $bannerBox = $(".banner-box");
let $bannerImgs = $(".banner-img");

let bannerWidth=1150;
let currentIdx = 0;
let slideCnt = $bannerImgs.length;

console.log(`slideCnt : ${slideCnt}`);

$(".next").on("click",moveNext);
function moveNext(){
    console.log('슬라이드 다음 클릭');
    currentIdx++;
    console.log(`currentIdx : ${currentIdx}`);

    $bannerBox.css("left",-(currentIdx * bannerWidth));
    $bannerBox.css("transition","0.5s ease");
    checkEnd();
}

function moveFirst(){
    currentIdx = 0;
    checkEnd();
    $bannerBox.css("transition","none");
    $bannerBox.css("transition","0.5s ease");
    $bannerBox.css("left",0);
}

$(".prev").on("click",function(){
    console.log(`슬라이드 이전 클릭`);
    currentIdx--;
    console.log(`currentIdx : ${currentIdx}`);
    $bannerBox.css("left",-(currentIdx*bannerWidth));
    $bannerBox.css("transition","0.5s ease");
    checkEnd();
});

checkEnd();

function checkEnd(){
    if(currentIdx <=0){
        $(".prev").css("display","none");
    }
    else{
        $(".prev").css("display","block");
    }
    if(currentIdx >= slideCnt -1){
        $(".next").css("display","none");
    }
    else{
        $(".next").css("display","block");
    }
}

setInterval(function(){
    if(currentIdx==slideCnt-1){
        moveFirst();
    }
    else{
        moveNext();
    }

},3000);

