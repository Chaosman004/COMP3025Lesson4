/* core game script */
/// <reference path="./_reference.ts"/>


// IIFE - Immediately Invoked Function Expression

(function () {
    //CreateJS Variables
    let canvas: HTMLElement;
    let stage: createjs.Stage;

    //Game Variables
    let helloLabel: objects.Label;
    let clickMeButton: objects.Button;

    function Start(): void {
        canvas = document.getElementById("canvas"); // get ref to canvas element
        stage = new createjs.Stage(canvas);// creating a new stage object
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;//set fps to 60
        createjs.Ticker.on("tick", Update);// calls the Update function every frame

        Game();
    }

    function Update(event: createjs.Event): void {

        /*helloLabel.rotation += 5;//rotate clockwise 5 degrees every frame*/

        stage.update();//manually redraws the stage
    }

    function Game(): void {
        console.log("Game Started...");

        helloLabel = new objects.Label("Hello, World!", "40px Consolas", "#000000", 160, 240, true);
        stage.addChild(helloLabel);

        //add clickme button
        clickMeButton = new objects.Button("../../Assets/images/ClickMeButton.png", 160, 300, true)
        stage.addChild(clickMeButton);

        clickMeButton.on("click", (event: createjs.MouseEvent) => {
            helloLabel.text = "Good bye!";
        });
    }

    window.onload = Start;//calls the start function when the window finishes loading
})();
