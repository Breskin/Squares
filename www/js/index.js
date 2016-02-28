var Canvas = document.getElementById("canvas");
var Context = Canvas.getContext("2d");
var Scale = {x: 1, y: 1};
var GameState = "Menu";

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        Canvas.width = window.innerWidth;
        Canvas.height = window.innerHeight;
        
        Canvas.addEventListener("click", OnTouch, false);
        
        Scale.x = Canvas.width / 320;
        Scale.y = Canvas.height / 512;
        
        setInterval(function() {Update();}, 18);
    }
};

function OnTouch(e) {
    var X = e.clientX;
    var Y = e.vlientY;
}

var Pos = 0;

function Update() {
    Context.fillStyle = "#000";
    Context.beginPath();
    Context.rect(0, 0, Canvas.width, Canvas.height);
    Context.closePath();
    Context.fill();
    
    Context.fillStyle = "#ff0000";
    Context.fillRoundedRect(0,Pos,50,50,10);
    Context.fillRoundedRect(60,Pos,50,50,10);
    Context.fillRoundedRect(120,Pos,50,50,10);
    Context.fillRoundedRect(180,Pos,50,50,10);
    
    Context.fillRoundedRect(0,Pos + 60,50,50,10);
    Context.fillRoundedRect(60,Pos + 60,50,50,10);
    Context.fillRoundedRect(120,Pos + 60,50,50,10);
    Context.fillRoundedRect(180,Pos + 60,50,50,10);
    
    Context.fillRoundedRect(0,Pos + 120,50,50,10);
    Context.fillRoundedRect(60,Pos + 120,50,50,10);
    Context.fillRoundedRect(120,Pos + 120,50,50,10);
    Context.fillRoundedRect(180,Pos + 120,50,50,10);
    
    Context.fillRoundedRect(0,Pos + 180,50,50,10);
    Context.fillRoundedRect(60,Pos + 180,50,50,10);
    Context.fillRoundedRect(120,Pos + 180,50,50,10);
    Context.fillRoundedRect(180,Pos + 180,50,50,10);
    
    Context.fillRoundedRect(0,Pos + 240,50,50,10);
    Context.fillRoundedRect(60,Pos + 240,50,50,10);
    Context.fillRoundedRect(120,Pos + 240,50,50,10);
    Context.fillRoundedRect(180,Pos + 240,50,50,10);
    
    Pos += 3;
}

CanvasRenderingContext2D.prototype.fillRoundedRect = fillRoundedRect;
 
function fillRoundedRect(x, y, w, h, r){
    this.beginPath();
    this.moveTo(x+r, y);
    this.lineTo(x+w-r, y);
    this.quadraticCurveTo(x+w, y, x+w, y+r);
    this.lineTo(x+w, y+h-r);
    this.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
    this.lineTo(x+r, y+h);
    this.quadraticCurveTo(x, y+h, x, y+h-r);
    this.lineTo(x, y+r);
    this.quadraticCurveTo(x, y, x+r, y);
    this.closePath();
    this.fill();
}