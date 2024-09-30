'use strict';

class UserData {
    constructor(parameters) {
        
    }

    // 初期化
    init(gameData) {
        // 変数初期化
        this.costMap = {walk: [], fly: []}; //移動コスト地図
        this.phase = 'play'; // 進行状態
        this.waveCount = 0; // ウェーブカウンター
        this.enemyArr = []; // 敵配列
        this.bulletArr = []; // 弾配列
        this.coin = gameData.startCoin; //お金
        this.score = 0; // 得点
        this.selectButton = 0; // 選択ボタン
        this.selectIndex = -1; //場面選択位置
        this.timeSum = 0; // 時間合計
        this.timeWaveLast = this.timeSum - gameData.waveInterval + gameData.waveStart // 最後のウェーブ時間
        this.timeEndWaitStart = 0; // 終了時の待機開始時間 


        
        // 変数初期化
        const boardW = gameData.boardW;
        
    }





}