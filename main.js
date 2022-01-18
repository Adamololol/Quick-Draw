
quick_draw_data_set=["glasses","white out"," helmet"," bracelet ","checkbook","bottle ","rubber ","band ","soap ","cat ","food "," book ","box ", "keyboard" , "twister ","wallet" , "bowl", "sponge" ,"toothpicks" ,"spoon"];
random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);
Element_of_array = quick_draw_data_set[random_number];
document.getElementById("sketch_to_be_drawn").innerHTML = "Sketch to be Drawn:"+Element_of_array;
timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;
sketch = Element_of_array;
function setup(){
    canvas = createCanvas(280, 280);
    background("white");
    canvas.position(600, 400)
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
    }
    function preload(){
        classifier = ml5.imageClassifier('DoodleNet');
    }
    function draw(){
    check_sketch();
    if(drawn_sketch == sketch){
    answer_holder = "set";
    score = score + 1;
    document.getElementById("score").innerHTML = "Score - "+score;
    }
        strokeWeight(13);
        stroke(0);
        if (mouseIsPressed) {
            line(pmouseX, pmouseY, mouseX, mouseY);
        }
    }
    function check_sketch(){
        timer_counter++;
        document.getElementById("timer").innerHTML = "Timer - "+timer_counter;
        if (timer_counter == 400){
        timer_counter = 0;
        timer_check = "completed";
        }
        if(timer_check == "completed"  || answer_holder == "set"){
            timer_check = "";
            answer_holder = "";
            updateCanvas();
        }
    }
    function updateCanvas(){
        background("white");
        sketch = Element_of_array;
        document.getElementById("sketch_to_be_drawn").innerHTML = "sketch to be Drawn - "+sketch;
    }
    function clearCanvas(){
    
        background("white");
    }
    function classifyCanvas(){
        classifier.classify(canvas, gotResult);
    }
    function gotResult(error, results){
    if (error) {
        console.error(error);
    }

    }