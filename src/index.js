import Phaser from 'phaser';
import sky from "./assets/sky.png";
import ground from "./assets/platform.png";
import star from "./assets/star.png";
import bomb from "./assets/bomb.png";
import player from "./assets/dude.png";

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image("sky", sky);
        this.load.image("ground", ground);
        this.load.image("star", star);
        this.load.image("bomb", bomb);

        this.load.spritesheet("player", player,{
            frameWidth: 32,
            frameHeight: 48
        })
    }
      
    create ()
    {
        this.add.image(400,300,"sky");
        const platforms = this.physics.add.staticGroup();
        platforms.create(400,568. "ground").setScale(2).refresh()

        platforms.create(600,400, "ground");
        platforms.create(50,250, "ground");
        platforms.create(750,220, "ground");

        this.player = this.physics.add.sprite(100,450,"player");
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.physics.add.collider(this.player, platforms);

        this.anims.create({
            key: "turn",
            frames : [{key: "player", frame : 4}],
            frameRate: 20,
        });

        this.anims.create({
            key: "right",
            frames:this.anims.generateFramesNumbers("player",{start: 5, end: 8}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "left",
            frames:this.anims.generateFramesNumbers("player",{start: 0, end: 3}),
            frameRate: 10,
            repeat: -1
        });
    }

    update ()
    {
        const cursors = this.input.keyboard.createCursorKeys();
        if(cursors.left.isDown){
            this.player.setVelocityX(-160);
            this.anims.play("left", true)
        }else if(cursors.right.isDown){
            this.player.setVelocityX(160);
            this.anims.play("right", true)
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
      default : 'arcade',
      arcade: {
          gravity: {y: 450},
          debug : true
      }
    },
    scene: MyGame
};

const game = new Phaser.Game(config);
