var rotating_angle = +0;

function resetAngle(){
    rotating_angle = +0;
    document.getElementById("angle").value = 0;
    applyRotation();
}

function getAngle(){
    return document.getElementById("angle").value
}

function getEngine(){
    return document.getElementById("engine");
}

function applyRotation(){
    motor = getEngine();
    motor.style.transform = `rotate(${rotating_angle}deg)`;
}

function setRotatingAngle(engine_angle){
    rotating_angle = +rotating_angle + +engine_angle;
}


function rotateEngine(){
    engine_angle = getAngle();
    setRotatingAngle(engine_angle);
    applyRotation();
}