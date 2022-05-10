import Phaser from "phaser";
import TitleScene from "./TitleScene";
import LevelOne from "./LevelOne";


class MyGame extends Phaser.Scene {
    constructor() {
        super({key: 'MyGame'});
    }
}

const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 800 ,
    height: 604,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 450 },
            debug: false,
        },
    },
    scene: TitleScene,LevelOne
};

const game = new Phaser.Game(config);

