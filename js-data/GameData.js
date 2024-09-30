'use strict';

class GameData {
    // コンストラクター
    constructor() {
        // セレクター
        this.selector = '#app';

        // 描画用設定
        const w = 960; //横幅
        const h = 1280; //高さ
        const u = 64; // unit単位数値
        this.w = w; // 描画領域 横幅
        this.h = h; // 描画領域 高さ
        this.u = u; // 描画単位
        this.bg = '#000'; //背景色

        this.layerMax = 3; //最大レイヤー

        //レイヤーID
        this.layerIds = {
            bg: 0, //背景
            middle: 1, //中
            front:2 //前
        };

        // キー操作
        this.keyControl = {
            start: ' ', //開始
            screenshot: '^' //スクリーンショット
        };

        // ボタン
        this.button = {w: u * 1.5, h: u * 1.5};

        // レイアウト
        this.rectBoard = {x: u * 1, y: u / 2, w: w - u * 2, h: h - u * 4}; //盤面
        this.rectInfo = {x: u / 2, y: h - u * 3.25, w: w - u, h: u}; //情報部分
        this.rectUI = {x: u / 2, y: h - u * 3.25, w: w - u, h: u * 1.5}; //UI部分

        // 盤面種類とマスの色
        this.squareType = {black: 0, wall:1, hole:2}; //盤面種類
        this.squareColor = [ //マスの色
            [['#aab', '#eef'], ['#445', '#556']],
            ['#400', '#800'],
            ['#012', '#000']
        ];

        // その他
        this.buttonId = {level: 3, pause: 4, size: 5}; //ボタンID
        this.xors = new GameUtil.xors(+new Data()); // 乱数

        //盤面
       this.board = {w: this.rectBoard.w / u | 0, h: this.rectBoard.h / u | 0};
       this.board.costMax = (this.board.w * this.board.h) << 2;

       //スタート位置, ゴール位置
       this.goal = {x: this.board.w / 2 | 0, y: this.board.h - 1};
       this.start = [
            {x: 2, y: 0},
            {x: this.board.w / 2 | 0, y: 0},
            {x: this.board.w - 3, y: 0}
       ]
       console.log(this.start[0].x); // 2
       console.log(this.start[0].y); // 0

       // ゲーム設定
       this.enemy = [
            {name: 'Pawn', hp:100, moveTime: 2.0, move: 'walk'},
            {name: 'Knignt', hp:200, moveTime: 1.5, move: 'walk'},
            {name: 'Eagle', hp:300, moveTime: 3.0, move: 'fly'},
            {name: 'Angel', hp:500, moveTime: 2.0, move: 'fly'},
            {name: 'King', hp:2000, moveTime: 5.0, move: 'walk'},
       ];

       this.wave = [0,0,1,2,  0,1,2,3,  1,2,3,4]; // 適登場順
       this.waveStart = 5 * 1000; // ウェーブ開始
       this.waveInterval = 30 * 1000; // ウェーブ間隔
       this.enemyPerWave = {base: 8, up: 8}; // ウェーブ当たりの敵数

       // 塔
       this.tower = [
            {
                name: 'Gun', levelMax: 5, price: 30,
                base: {pow: 10, interval: 0.5, range: 1},
                up: {pow: 2, interval: -0.04, range: 0.2}
            },
            {
                name: 'Missle', levelMax: 5, price: 100,
                base: {pow: 10, interval: 1.0, range: 3},
                up: {pow: 2, interval: -0.06, range: 0.2}
            },
            {
                name: 'Frozen', levelMax: 5, price: 200,
                base: {pow: 3, interval: 1.0, range: 3},
                up: {pow: 0.5, interval: -0.06, range: 0.2}
            },
       ];

       this.startCoin = 100; // 開始時コイン

       // 表示
       this.gameName = 'UgBattle';
       this.copyright = '(C) UgGames';
       this.hashtag = 'UgGames';
       this.urlThis = 'https://x.com/Q9RZThlIWtV3qWT';

       // 表示の初期化
       GameData.initView(this);
    }
}


