import Phaser from "phaser";


class TitleScene extends Phaser.Scene{
    constructor() {
        super({key: 'TitleScene'});
    }

    preload(){
        this.load.image('background_image', 'src/assets/start_game.png');
    }

    create(){
        let background = this.add.sprite(0,0, 'background_image');
        background.setOrigin(0,0);

    }
}

export default TitleScene;