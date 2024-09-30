'use strict';

// 読み込み後開始
document.addEventListener('DOMContentLoaded', function() {
    // データの初期化
    const gameData = new GameData(); // ゲーム　データ
    const userData = new UserData(); // ユーザー　データ
    console.log('Document loaded. Initializing game...');

    // 各種初期化
    gameData.canvasArr = GameCanvas.initCanvasArr(gameData); // Canvasの初期化
    console.log('Canvas initialized:', gameData.canvasArr);

    GameView.init(gameData); // 表示の初期化
    console.log('GameView initialized.');

    GameScreenshot.init(gameData); // スクリーンショットの初期化
    console.log('GameScreenshot initialized.');

    // リソース
    const promiseArr = [];

    // フォントの読み込み
    promiseArr.push(GameFont.load(gameData.fontDefault));
    promiseArr.push(GameFont.load(gameData.fontTitle));
    console.log('Font loading initiated.');

    // 画像の読み込み
    promiseArr.push(GameImage.load('logo', 'image/logo.png'));
    promiseArr.push(GameImage.load('button', 'image/button.png'));
    promiseArr.push(GameImage.load('enemy', 'image/enemy.png'));
    promiseArr.push(GameImage.load('tower', 'image/tower.png'));
    promiseArr.push(GameImage.load('bullet', 'image/bullet.png'));
    console.log('Image loading initiated.');

    // リソース読み込み後開始
    Promise.all(promiseArr).then(agr => {
        console.log('All resources loaded:', agr);

        SceneTitle.start(gameData, userData); // タイトル開始
        console.log('SceneTitle started.');
        
        GameAnim.start(); // アニメーション開始
        console.log('Game animation started.');
    }).catch(error => {
        console.error('Error loading resources:', error);
    });
});
