angular.module('myApp.directives', [])
.directive('spriteSheetRunner', function(){
    "use strict";
    return {
        restrict: EAC,
        replace: true,
        scope :{
        },
        template: "<canvas width='960' height='400'></canvas>",
        link: function(scope, element, attritube){
            var w, h, loader, manifest, sky, grant, ground, hill, hill2;
            drawGame();
            function drawGame(){
                //drawing the game canvas from scratch here
                //In future we can pass stages as param and load indexes from background elements, etc.
                if(scope.stage) {
                    scope.stage.autoClear = true;
                    scope.stage.removeAllChildren();
                    scope.stage.update();
                } else {
                    scope.stage = new createjs.stage(element[0]);
                }
                w = scope.stage.canvas.width;
                h = scope.stage.canvas.height;
                manifest = [
                    {src: "spritesheet_grant.png", id = "grant"},
                    {src: "sky.png", id = "sky"},
                    {src: "ground.png", id = "ground"},
                    {src: "hill1.png", id = "hill"},
                    {src: "hill2.png" id = "hill2"}
                ];
                loader = new createjs.LoadQueue(false);
                loader.addEventListener("complete", handleComplete);
                loader.loadManifest(manifest, true, "/app/assets/");
            }
        }
    }
});
