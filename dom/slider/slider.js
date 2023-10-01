const btnLeft = document.querySelector("#left");
const btnRight = document.querySelector("#right");
const itemsList = document.querySelector("#items");
const items = document.querySelectorAll(".item");
const slider = document.querySelector(".slider");
const computedStyles = getComputedStyle(itemsList);

const minRight = 0;
const itemWidth = getComputedStyle(items[0]).width;
const step = parseInt(itemWidth);
const preShownItems = parseInt(getComputedStyle(slider).width) / step;
const maxRight = (items.length - preShownItems) * step;
let currentRight = minRight;

btnRight.addEventListener("click", (e) => {
    if (currentRight < maxRight) {
        currentRight = currentRight + step;
        itemsList.style.right = `${currentRight}px`;
    }
}
)

btnLeft.addEventListener("click", (e) => {
    if (currentRight > minRight) {
        currentRight = currentRight - step;
        itemsList.style.right = `${currentRight}px`;
    }
}
)