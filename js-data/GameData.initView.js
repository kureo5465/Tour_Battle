'use strict';

// 表示の初期化
GameData.initView = function (_this) {
    // フォント
    _this.fontDefalult = 'BPdots-reqular'; // フォント デフォルト
    _this.fontTitle = 'Spin-Cycle'; // フォント タイトル

    // タイトルの各部品の描画用設定
    _this.drawPropTitle = {
        head: {
            font: `150px ${_this.fontTitle}`,
            lineWidth: 8,
            strokeStyle: '#fff',
            fillStyle: '#a00'
        },
        message: {
            font: `${_this.u}px ${_this.fontTitle}`,
            lineWidth: 8,
            strokeStyle: '#fff',
            fillStyle: '#a00',
            globalAlpha: 1,
            textAlign: 'center',
            textBaseline: 'middle'
        },
        copyright: {
            font: `32px ${_this.fontDefalult}`,
            fillStyle: '#fff'
        }
    };

    // 防衛の描画用設定
    _this.drawPropDefense = {
        base: { 
            globalAlpha: 0.8,
            fillStyle: '#123'
        },
        info: {
            font: `30px ${_this.fontDefalult}`,
            globalAlpha: 1,
            fillStyle: '#fff',
            textAlign: 'center',
            textBaseline: 'middle'
        },
        coin: {
            font: `35px ${_this.fontDefalult}`,
            globalAlpha: 1,
            textAlign: 'right',
            textBaseline: 'middle',
            fillStyle: '#fff',
        },
        score: { // コスト表描画設定
            textAlign: 'center',
            textBaseline: 'middle',
            font: `${_this.u * 0.4}px sans-serif`,
            lineWidth: 4,
            strokeStyle: '#000',
            fillStyle: '#fff'
        }
    };
};
