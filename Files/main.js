class Product {
    constructor(price, number) {
        this.price = price;
        this.number = number;
        this.element = `
        <div class="product">
            <span class="img"><img src="images/image-product-1-thumbnail.jpg" alt="sora"></span>
            <span class="txt">
                <span class="name">Fall Limited Edition sneakers.</span>
                <span class="price">
                    <span class="bef">$${this.price} * ${this.number}</span>
                    <b style="color:black;">$</b><span class="finp">${this.price * this.number}</span>
                </span>
            </span>
            <span class="del">
                <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <path
                            d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                            id="a" />
                    </defs>
                    <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
                </svg>
            </span>
        </div>`;
    }
}

// Start Header
let proNum = document.querySelector(".pro");
proNum.style.opacity = "0";

let menu = document.querySelector(".menu");
let linksList = document.querySelector(".links");
let closeX = document.querySelector(".close");
let overlay = document.querySelector(".overlay");

let cartbtn = document.querySelector(".right .icon svg");
let basket = document.querySelector(".basket");
let mainBasket = document.querySelector(".mainBasket");
let checktxt = `<div class="checkout">checkout</div>`
mainBasket.innerHTML = "Your cart is emtpy.";



menu.addEventListener("click", () => {
    linksList.style.left = "0";
    overlay.style.zIndex = "3";
    overlay.style.backgroundColor = "rgba(0, 0, 0, .25)";
    closeX.style.left = "10px";
})

closeX.addEventListener("click", () => {
    linksList.style.left = "-100%";
    overlay.style.zIndex = "-1";
    closeX.style.left = "-100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
})
// End Header

// Start main
let products = 0;

let arrows = document.querySelectorAll(".sahm");

let bigImg = document.querySelector(".sora img");

// lightbox


let lightBox = document.querySelector(".light-box");
let mainImg = document.querySelector(".light-box .sora img");
let galleryImgs = document.querySelectorAll(".light-box .gallery .img");
let closebtn = document.querySelector(".light-box .close")
let currentImg = 1;
galleryImgs[currentImg - 1].classList.add("selected");

let cImg = document.querySelector(".left .sora");
let cgalleryImgs = document.querySelectorAll(".left .gallery .img");

cgalleryImgs.forEach((img) => {
    img.addEventListener("click", () => {
        lightBox.style.opacity = "1";
        lightBox.style.zIndex = "3";
        overlay.style.backgroundColor = "rgba(0, 0, 0, .75)";
        overlay.style.zIndex = "2";
    })
})

if (window.innerWidth >= 768) {

    cImg.addEventListener("click", () => {
        lightBox.style.opacity = "1";
        lightBox.style.zIndex = "3";
        overlay.style.backgroundColor = "rgba(0, 0, 0, .75)";
        overlay.style.zIndex = "2";
    })
}


closebtn.addEventListener("click", () => {
    lightBox.style.opacity = "0";
    lightBox.style.zIndex = "-2";

    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    overlay.style.zIndex = "-1";
})


galleryImgs.forEach((img, index) => {
    img.addEventListener("click", () => {
        mainImg.src = `images/image-product-${index + 1}.jpg`;
        bigImg.src = `images/image-product-${index + 1}.jpg`;
        galleryImgs[currentImg - 1].classList.remove("selected");
        galleryImgs[index].classList.add("selected");
        cgalleryImgs[currentImg - 1].classList.remove("selected");
        cgalleryImgs[index].classList.add("selected");
        currentImg = index + 1;
    })
})

arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
        let temp = currentImg;
        if (arrow.classList.contains("right-a") && currentImg < 4) {
            currentImg++;
        } else if (currentImg > 1 && !arrow.classList.contains("right-a")) {
            currentImg--;
        }
        mainImg.src = `images/image-product-${currentImg}.jpg`;
        bigImg.src = `images/image-product-${currentImg}.jpg`;
        galleryImgs[temp - 1].classList.remove("selected");
        galleryImgs[currentImg - 1].classList.add("selected");
        cgalleryImgs[temp - 1].classList.remove("selected");
        cgalleryImgs[currentImg - 1].classList.add("selected");
    })
})

let plusbtn = document.querySelector(".plus");
let minusbtn = document.querySelector(".minus");
let num = document.querySelector(".num");

plusbtn.addEventListener("click", () => {
    num.innerHTML = parseInt(num.innerHTML) + 1;
})

minusbtn.addEventListener("click", () => {
    if (parseInt(num.innerHTML) > 0) {
        num.innerHTML = parseInt(num.innerHTML) - 1;
    }
})


let addToCartbtn = document.querySelector(".addToCart");

addToCartbtn.addEventListener("click", () => {
    if (parseInt(num.innerHTML) > 0) {
        if (mainBasket.innerHTML === "Your cart is emtpy.") {
            mainBasket.innerHTML = checktxt;
        }

        let one = new Product(150, parseInt(num.innerHTML));
        let temp = mainBasket.innerHTML;
        mainBasket.innerHTML = one.element;
        mainBasket.innerHTML += temp;
        products++;
        proNum.style.opacity = "1";
        proNum.innerHTML = products;

        let delbtn = document.querySelectorAll(".del");
        delbtn.forEach((ele) => {
            ele.addEventListener("click", () => {
                ele.parentElement.remove();
                products--;
                proNum.innerHTML = products;
                if (products === 0) {
                    mainBasket.innerHTML = "Your cart is emtpy.";
                    proNum.style.opacity = "0";
                }
            })
        })
    }
    num.innerHTML = 0;
})


// End main

// Start cart


cartbtn.addEventListener("click", () => {
    if (basket.style.display === "block") {

        basket.style.display = "none";
    } else {
        basket.style.display = "block";
    }
})



// End cart
