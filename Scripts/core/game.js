/* core game script */
// IIFE - Immediately Invoked Function Expression
(function () {
    //CreateJS Variables
    var canvas;
    var stage;
    //Game Variables
    var helloLabel;
    function Start() {
        canvas = document.getElementById("canvas"); // get ref to canvas element
        stage = new createjs.Stage(canvas); // creating a new stage object
        createjs.Ticker.framerate = 60; //set fps to 60
        createjs.Ticker.on("tick", Update); // calls the Update function every frame
        Game();
    }
    function Update(event) {
        helloLabel.rotation += 5; //rotate clockwise 5 degrees every frame
        stage.update(); //manually redraws the stage
    }
    function Game() {
        console.log("Game Started...");
        helloLabel = new createjs.Text("Hello, World!", "40px Consolas", "#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = 160;
        helloLabel.y = 240;
        stage.addChild(helloLabel);
    }
    window.onload = Start; //calls the start function when the window finishes loading
})();
//# sourceMappingURL=game.js.map