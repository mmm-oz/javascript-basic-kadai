// 配列
const holidays = ['正月', '成人の日', '建国記念日', '天皇誕生日', '春分の日', '昭和の日', '憲法記念日', 'みどりの日', 'こどもの日', '海の日', '山の日', '敬老の日', '秋分の日', 'スポーツの日', '文化の日', '勤労感謝の日' ];

let index = 0;

// whileによる出力

// 正月の出力
console.log(holidays[0]);

// holidays の16番目の要素以外の時は
while (holidays[index] !== '勤労感謝の日' ) {

// holidaysの要素を1番目の要素から順番に出力し続ける
    index++ ;

// コンソールに出力する
    console.log(holidays[index]);
}

// forによる出力

// 16番目の要素以下の時、1番目の要素から1ずつ順番に出力する。
for (index = 0; index<=15; index += 1) {
    console.log(holidays[index]);
}