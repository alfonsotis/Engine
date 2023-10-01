var rotating_angle = +0;

function resetAngle(){
    rotating_angle = +0;
    rotateEngine();

}



function rotateEngine(){
    engine = document.getElementById("engine");
    engine_angle = document.getElementById("angle").value
    rotating_angle = +rotating_angle + +engine_angle;
    console.log("rotating", rotating_angle);
    engine.style.transform = `rotate(${rotating_angle}deg)`;
}