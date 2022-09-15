var rect1;
var rect2;
var rect3;
var rect4;
var rect5;
var rect6;
var documentHeight;

positions();
const widthProjects = rect1.RT[0]-rect1.LT[0];
const heightProjects = rect1.LB[1]-rect1.LT[1];



var sketch3 = function(p) {
   
    p.setup = function() {
        let cnv1 = p.createCanvas(p.windowWidth, documentHeight);
        cnv1.position(0,0);
        cnv1.style('z-index', '-1');
        p.background(13);
        
    };
    p.windowResized = function() {
        p.resizeCanvas(p.windowWidth, documentHeight);
        positions();
        
    }
    p.draw = function() {
        p.background(191, 182, 138);
        treDimensionale(p, rect6);
        treDimensionale(p, rect5);
        treDimensionale(p, rect4);
        treDimensionale(p, rect3);
        treDimensionale(p, rect2);
        treDimensionale(p, rect1);
        
        
    };
};




var myp5_3 = new p5(sketch3);



treDimensionale = function(p, quadrato) {
        
        p.fill(13, 13, 13);
        if((quadrato.center[0] - p.windowWidth/2) < 0){
            p.x = 10;
        }else if((quadrato.center[0] - p.windowWidth/2) > 0) {
             p.x = -10;
        }else{
            p.x = 0;
        };
       
        var middleScreen = window.scrollY + p.windowHeight/2;
        p.y = p.map(middleScreen - quadrato.center[1], -middleScreen, middleScreen, -20, 20);
        //p.y = p.lerp(0, 30, ((middleScreen + 200)/(p.windowHeight)))-15;
        
        // Shadow
        if(p.x>0){
            p.fill(13, 13, 13, 50);
            p.noStroke();
            p.beginShape();
            p.vertex(quadrato.LB[0]+p.x, quadrato.LB[1]+p.y);
            p.vertex(quadrato.LB[0]-2.2*p.x, quadrato.LB[1]-0.7*p.y);
            p.vertex(quadrato.LT[0]-2.2*p.x, quadrato.LT[1]-0.7*p.y);
            p.vertex(quadrato.LT[0]+p.x, quadrato.LT[1]+p.y);
            p.endShape();
        } else if(p.x<0){
            p.fill(13, 13, 13, 50);
            p.noStroke();
            p.beginShape();
            p.vertex(quadrato.RB[0]+p.x, quadrato.RB[1]+p.y);
            p.vertex(quadrato.RB[0]-2.2*p.x, quadrato.RB[1]-0.7*p.y);
            p.vertex(quadrato.RT[0]-2.2*p.x, quadrato.RT[1]-0.7*p.y);
            p.vertex(quadrato.RT[0]+p.x, quadrato.RT[1]+p.y);
            p.endShape();
        }
        if(p.y<0){
            p.beginShape();
            p.vertex(quadrato.LB[0]+p.x, quadrato.LB[1]+p.y);
            p.vertex(quadrato.LB[0]-2.2*p.x, quadrato.LB[1]-0.7*p.y);
            p.vertex(quadrato.RB[0]-2.2*p.x, quadrato.RB[1]-0.7*p.y);
            p.vertex(quadrato.RB[0]+p.x, quadrato.RB[1]+p.y);
            p.endShape();
        }else{
            p.beginShape();
            p.vertex(quadrato.LT[0]+p.x, quadrato.LT[1]+p.y);
            p.vertex(quadrato.LT[0]-2.2*p.x, quadrato.LT[1]-0.7*p.y);
            p.vertex(quadrato.RT[0]-2.2*p.x, quadrato.RT[1]-0.7*p.y);
            p.vertex(quadrato.RT[0]+p.x, quadrato.RT[1]+p.y);
            p.endShape();
        }



        p.fill(126,161,191);
        if(p.y<0){
            p.beginShape();
            p.vertex(quadrato.LT[0], quadrato.LT[1]);
            p.vertex(quadrato.LT[0]+p.x, quadrato.LT[1]+p.y);
            p.vertex(quadrato.RT[0]+p.x, quadrato.RT[1]+p.y);
            p.vertex(quadrato.RT[0], quadrato.RT[1]);
            p.endShape();
        }else{
            p.beginShape();
            p.vertex(quadrato.LB[0], quadrato.LB[1]);
            p.vertex(quadrato.RB[0], quadrato.RB[1]);
            p.vertex(quadrato.RB[0]+p.x, quadrato.RB[1]+p.y);
            p.vertex(quadrato.LB[0]+p.x, quadrato.LB[1]+p.y);
            p.endShape();
        };
        if(p.x>0){
            p.beginShape();
            p.vertex(quadrato.RT[0], quadrato.RT[1]);
            p.vertex(quadrato.RT[0]+p.x, quadrato.RT[1]+p.y);
            p.vertex(quadrato.RB[0]+p.x, quadrato.RB[1]+p.y);
            p.vertex(quadrato.RB[0], quadrato.RB[1]);
            p.endShape();
        }else if(p.x<0){
            p.beginShape();
            p.vertex(quadrato.LT[0], quadrato.LT[1]);
            p.vertex(quadrato.LT[0]+p.x, quadrato.LT[1]+p.y);
            p.vertex(quadrato.LB[0]+p.x, quadrato.LB[1]+p.y);
            p.vertex(quadrato.LB[0], quadrato.LB[1]);
            p.endShape();
        }
        





        p.stroke(13, 13, 13);

        p.line(quadrato.LT[0], quadrato.LT[1], quadrato.LT[0]+p.x, quadrato.LT[1]+p.y);
        p.line(quadrato.RT[0], quadrato.RT[1], quadrato.RT[0]+p.x, quadrato.RT[1]+p.y);
        p.line(quadrato.LB[0], quadrato.LB[1], quadrato.LB[0]+p.x, quadrato.LB[1]+p.y);
        p.line(quadrato.RB[0], quadrato.RB[1], quadrato.RB[0]+p.x, quadrato.RB[1]+p.y);
        if(p.x<0){
            p.line(quadrato.LT[0]+p.x, quadrato.LT[1]+p.y, quadrato.LB[0]+p.x, quadrato.LB[1]+p.y)
        }else if(p.x>0){
            p.line(quadrato.RT[0]+p.x, quadrato.RT[1]+p.y, quadrato.RB[0]+p.x, quadrato.RB[1]+p.y);
        };
        if(p.y<0){
            p.line(quadrato.LT[0]+p.x, quadrato.LT[1]+p.y, quadrato.RT[0]+p.x, quadrato.RT[1]+p.y);
        }else if(p.y>0){
            p.line(quadrato.LB[0]+p.x, quadrato.LB[1]+p.y, quadrato.RB[0]+p.x, quadrato.RB[1]+p.y);
        }
}


function positions(){
    documentHeight = document.body.offsetHeight;
    var el1 = document.getElementById('project1').getBoundingClientRect();
    rect1 = {
        LT : [el1.left+window.pageXOffset, el1.top+window.pageYOffset],
        RT : [el1.right+window.pageXOffset, el1.top+window.pageYOffset],
        LB : [el1.left+window.pageXOffset, el1.bottom+window.pageYOffset],
        RB : [el1.right+window.pageXOffset, el1.bottom+window.pageYOffset],
        center : [el1.left+window.pageXOffset + (el1.right+window.pageXOffset-el1.left+window.pageXOffset)/2, 
        el1.top+window.pageYOffset + (el1.top+window.pageYOffset-el1.top+window.pageYOffset)/2]
    }
    var el2 = document.getElementById('project2').getBoundingClientRect();
    rect2 = {
        LT : [el2.left+window.pageXOffset, el2.top+window.pageYOffset],
        RT : [el2.right+window.pageXOffset, el2.top+window.pageYOffset],
        LB : [el2.left+window.pageXOffset, el2.bottom+window.pageYOffset],
        RB : [el2.right+window.pageXOffset, el2.bottom+window.pageYOffset],
        center : [el2.left+window.pageXOffset + (el2.right+window.pageXOffset-el2.left+window.pageXOffset)/2, 
        el2.top+window.pageYOffset + (el2.top+window.pageYOffset-el2.top+window.pageYOffset)/2]
    }
    var el3 = document.getElementById('project3').getBoundingClientRect();
    rect3 = {
        LT : [el3.left+window.pageXOffset, el3.top+window.pageYOffset],
        RT : [el3.right+window.pageXOffset, el3.top+window.pageYOffset],
        LB : [el3.left+window.pageXOffset, el3.bottom+window.pageYOffset],
        RB : [el3.right+window.pageXOffset, el3.bottom+window.pageYOffset],
        center : [el3.left+window.pageXOffset + (el3.right+window.pageXOffset-el3.left+window.pageXOffset)/2, 
        el3.top+window.pageYOffset + (el3.top+window.pageYOffset-el3.top+window.pageYOffset)/2]
    }
    var el4 = document.getElementById('project4').getBoundingClientRect();
    rect4 = {
        LT : [el4.left+window.pageXOffset, el4.top+window.pageYOffset],
        RT : [el4.right+window.pageXOffset, el4.top+window.pageYOffset],
        LB : [el4.left+window.pageXOffset, el4.bottom+window.pageYOffset],
        RB : [el4.right+window.pageXOffset, el4.bottom+window.pageYOffset],
        center : [el4.left+window.pageXOffset + (el4.right+window.pageXOffset-el4.left+window.pageXOffset)/2, 
        el4.top+window.pageYOffset + (el4.top+window.pageYOffset-el4.top+window.pageYOffset)/2]
    }
    var el5 = document.getElementById('project5').getBoundingClientRect();
    rect5 = {
        LT : [el5.left+window.pageXOffset, el5.top+window.pageYOffset],
        RT : [el5.right+window.pageXOffset, el5.top+window.pageYOffset],
        LB : [el5.left+window.pageXOffset, el5.bottom+window.pageYOffset],
        RB : [el5.right+window.pageXOffset, el5.bottom+window.pageYOffset],
        center : [el5.left+window.pageXOffset + (el5.right+window.pageXOffset-el5.left+window.pageXOffset)/2, 
        el5.top+window.pageYOffset + (el5.top+window.pageYOffset-el5.top+window.pageYOffset)/2]
    }
    var el6 = document.getElementById('project6').getBoundingClientRect();
    rect6 = {
        LT : [el6.left+window.pageXOffset, el6.top+window.pageYOffset],
        RT : [el6.right+window.pageXOffset, el6.top+window.pageYOffset],
        LB : [el6.left+window.pageXOffset, el6.bottom+window.pageYOffset],
        RB : [el6.right+window.pageXOffset, el6.bottom+window.pageYOffset],
        center : [el6.left+window.pageXOffset + (el6.right+window.pageXOffset-el6.left+window.pageXOffset)/2, 
        el6.top+window.pageYOffset + (el6.top+window.pageYOffset-el6.top+window.pageYOffset)/2]
    }
}