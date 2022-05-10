import Phaser from "phaser";
import LevelOne from "./LevelOne";


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

        let title_text = this.add.text(350,250,"START");
        title_text.setColor("#18215D");
        title_text.setFontSize(40);
        title_text.setFontFamily("ArcadeClassic")
        title_text.setFontStyle("bold")

        let title_credits = this.add.text(325,300, "CREDITS");
        title_credits.setColor("#18215D");
        title_credits.setFontSize(40);
        title_credits.setFontFamily("ArcadeClassic");
        title_credits.setFontStyle("bold");

        title_text.addListener('pointerdown', ()=> this.scene.start('LevelOne'));
    }

    update(){

    }
}

export default TitleScene;