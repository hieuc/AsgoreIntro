class Asgore {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/asgore.png");

        this.action = 0; // 0 = static, 1 = intro, 2 = brandish, 3 = post-brandish

        this.scale = 2;

        this.animations = [];
    }

    loadAnimations() {
        this.animations[0] = new Animator(this.spritesheet, 175, 0, 170, 127, 1, 99999999, 5, false, false);

        this.animations[1] = new Animator(this.spritesheet, 0, 0, 170, 127, 3, 1.5, 5, false, false);

        this.animations[2] = new Animator(this.spritesheet, 0, 131, 285, 127, 11, 0.1, 5, false, false);

        this.animations[3] = new Animator(this.spritesheet, 0, 259, 285, 127, 2, 1, 5, false, true);
    }

    update() {
        if (this.animations[this.action].isDone()) {
            this.action++;
            if (this.action === 2) {
                var au = new Audio("./audio/bladeswing.wav");
                au.volume = 0.3;
                au.play();
            }
        }
    }

    draw(ctx) {
        this.animations[this.action].drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scale);
    }
}