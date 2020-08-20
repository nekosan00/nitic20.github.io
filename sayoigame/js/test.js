let omikuji = {
    results: ["a","i","u","e","o"],
    getResult: function(){
        let results = this.results;
        return results[Math.floor(Math.random() * results.length)];
    }
}

let sava = document.getElementById('getResult');
let result = document.getElementById('result');

sava.addEventListener('click', function(){
    result.innerHTML = '結果は「' + omikuji.getResult() + '」でした';
});