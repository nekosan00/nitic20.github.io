let Callgatya = {
    naiyou:["星5　剣　アルトリア・ペンドラゴン",
            "星5　剣　モードレッド",
            "星5　剣　アルテラ",
            "星5　剣　ディオスクロイ",
            "星5　剣　アルテラ",
            "星5　弓　オリオン",
            "星5　弓　二コラ・テスラ",
            "星5　弓　アルジュナ",
            "星5　弓　ナポレオン",
            "星5　槍　カルナ",
            "星5　槍　エルキドゥ",
            "星5　槍　アルトリア・ペンドラゴン"
    ],

    getResult: function() {
        let results = this.naiyou;
        return results[Math.floor(Math.random() * results.length)];
    }

}

let sava = document.getElementById('gatyabotton');
let kekka = document.getElementById('keka');

sava.addEventListener('click', function(){
    kekka.innerHTML = '結果は「' +
    Callgatya.getResult()+
    Callgatya.getResult()+
    Callgatya.getResult()+
    Callgatya.getResult()+
    Callgatya.getResult()+
    Callgatya.getResult()+
    Callgatya.getResult()+
    Callgatya.getResult()+
    Callgatya.getResult()+
    Callgatya.getResult()+
    '」でした';
});