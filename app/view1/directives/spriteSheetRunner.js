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
                }
            }
        }
    }
});
