// todayを定義
const today = new Date();

/* 最後の()が抜けると、
「function getFullYear() { [native code] }年」
になる。
関数とみなされない？
*/

const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();

const showToday = () => {
    console.log(year+'年', month+1+'月', date+'日');
}

showToday();