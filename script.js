let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let jcImage = document.getElementById("jcImage");
let praaImage = document.getElementById("praaImage");
let prss2Image = document.getElementById("prss2Image");
let sgImage = document.getElementById("sgImage");

let clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
    "...", 
    "....", 
    "..... ", 
    "......", 
    "......"
];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 20;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // 让图片和文字往上移动
    let moveUp = clickCount * 25; // 每次上移 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 5 次变化）
    if (clickCount <= 4) {
        noButton.innerText = noTexts[clickCount - 1];
    }
 // 隐藏所有图片
    jcImage.style.opacity = 0;
    praaImage.style.opacity = 0;
    prss2Image.style.opacity = 0;
    sgImage.style.opacity = 0;
    // 图片变化（前 5 次变化）
    if (clickCount === 1) {
        sgImage.style.opacity = 1; // 显示 SG.png
    } else if (clickCount === 2) {
        sgImage.style.opacity = 0;
        prss2Image.style.opacity = 1; // 显示 PRSS2.png
    } else if (clickCount === 3) {
        prss2Image.style.opacity = 0;
        jcImage.style.opacity = 1; // 显示 JC.png
    } else if (clickCount === 4) {
        jcImage.style.opacity = 0;
        praaImage.style.opacity = 1; // 显示 PRAA.png
    }
});

// Yes 按钮点击后，进入页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text"> </h1>
            <img src="images/特蕾西娅.jpg" alt="拥抱" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});