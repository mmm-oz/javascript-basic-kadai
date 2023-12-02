const btn = document.getElementById('btn');
const text = document.getElementById('text');

const changeText = [text];

btn.addEventListener('click', ()=> {

    // text.style.display.none
    // innerText

    // 新しいh2要素を追加し、テキスト「ボタンをクリックしました」を追加した
//     const addText = document.createElement('h2');
//     addText.textContent = 'ボタンをクリックしました';
//     // 作成したh2要素を#textの末尾に追加する
//     document.getElementById('text').appendChild(addText);

    text.textContent ='ボタンをクリックしました'
})