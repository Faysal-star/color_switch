let vals = document.querySelectorAll('.box');
// val.style.backgroundColor = 'green';
// let vals = document.getElementById("box1");

vals.forEach(function (val){
    val.addEventListener('click',function (e){
        const style = e.currentTarget.classList;
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        let rgb = `rgb(${r},${g},${b})`
        if(style.contains("box")){
            val.style.backgroundColor = rgb;
        }
    });
});

