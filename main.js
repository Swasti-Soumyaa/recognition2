function setup(){
    canvas= createCanvas(270,270)
    canvas.center();

    video=createCapture(VIDEO)
    video.size(270,270)
    video.hide()

    classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Jkx6pccaJ/model.json',modelLoaded)

}

function draw(){
    image(video,0,0,270,270)
    classifier.classify(video,gotResult)
}

function gotResult(error,result){
    if(error){
        console.error(error);
    }
    else {
        console.log(result)
        document.getElementById("object_name").innerHTML=result[0].label;
        confidence=result[0].confidence;
        percentage=confidence*100;
        document.getElementById("object_accuracy").innerHTML=percentage.toFixed(1)+"%"
    }
}

function modelLoaded(){
    console.log('Model Loaded!')
}


       
        
