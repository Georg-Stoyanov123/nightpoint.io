class Player {
    constructor() {

    }
    playerSprite() {
        
        var playerSprite = createSprite(100, 100, 100, 100)
        playerSprite.addImage(playerImage)
        playerSprite.scale = 3
    }
    aiSpritefunc() {
        var random1 = Math.round(random(1, 10000))
        var ai1Sprite = createSprite(100, 100, 100, 100)
        ai1Sprite.addImage(ai1);
        var ai2Sprite = createSprite(100, 100, 100, 100)
        ai2Sprite.addImage(ai2);
    }
    display() {
        this.playerSprite()
        this.aiSpritefunc()
    }
}