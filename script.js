let html = document.querySelector("html");
let btn = document.createElement("button");

html.style.scrollBehavior = "smooth";

btn.innerHTML = "Top";
btn.style.display = "none";
btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "30px";
btn.style.zIndex = "999999";
btn.style.border = "none";
btn.style.outline = "none";
btn.style.backgroundColor = "red";
btn.style.color = "white";
btn.style.cursor = "pointer";
btn.style.padding = "12px";
btn.style.borderRadius = "10px";
btn.style.fontSize = "16px";

btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = '#555';
});

btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = 'red';
});

html.appendChild(btn);

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

btn.addEventListener('click', topFunction);