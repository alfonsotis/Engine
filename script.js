var rotating_angle = +0;


function rotate(){
    engine = document.getElementById("engine");
    engine_angle = document.getElementById("angle").value
    rotating_angle = +rotating_angle + +engine_angle;
    console.log("rotating", rotating_angle);
    engine.style.transform = `rotate(${rotating_angle}deg)`
}