class Form {
    constructor() {
        this.logoImage = "nightpoint.png";
        this.logo = createImg(this.logoImage);
        this.login = createButton("Play!")
        this.name = createElement("h1")
        this.name = createInput("").attribute("placeholder", "Enter your name...")
        this.welcome = createElement("h2");
    }
    setElementPosition() {
        this.login.position(width / 2 - 100, height / 2)
        this.logo.position(500, 20)
        this.name.position(width / 2 - 120, height / 2 - 50)
        this.welcome.position(width / 2 - 120, height / 2 - 160);
        this.welcome.hide()
    }
    setElementStyle() {
        this.login.class("customButton")
        this.name.class("customInput")
    }
    hideElements() {
        this.login.hide();
        this.logo.hide();
        this.name.hide();
    }
    play(){
            createCanvas(4096, 4096)
            image(mapImg, 0, 0, 4096, 4096);
           // welcome.hideElements()
            player = new Player();
            player.display()
        }
    
    async handleMousePressed() {
        await this.login.mousePressed(()=>{
            var message = `Hello, ${this.name.value()}!`
            this.hideElements()
            this.welcome.show()
            this.welcome.html(message)
            this.welcome.position(50,50)
            gameState = "playing"
            this.play();
           /* player1 = new Player();
            if (gameState === "playing") {
                player1.display()
            }*/
        })
    }
    handlePlayerControls() {
        if (keyCode === 87) {
            characterSprite.y -= 5
        }
        if (keyCode === 83) {
            characterSprite.y += 5
        }
        if (keyCode === 65) {
            characterSprite.x -= 5
        }
        if (keyCode === 68) {
            characterSprite.x += 5
        }

    }
    display() {
        this.setElementPosition()
        this.setElementStyle()
        this.handleMousePressed()
    }
}