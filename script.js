// const A = document.querySelector('#A')
// const B = document.querySelector('#B')
// const C = document.querySelector('#C')

// let count = 0

// A.addEventListener('click', () => {
//     count++;
//     // 奇数偶数の判定
//     if (count%2===1){
//         A.textContent = '〇'
//     } else {
//         A.textContent = '×'
//     }
// })

// B.addEventListener('click', () => {
//     count++;
//     // 奇数偶数の判定
//     if (count%2===1){
//         B.textContent = '〇'
//     } else {
//         B.textContent = '×'
//     }
// })

// C.addEventListener('click', () => {
//     count++;
//     // 奇数偶数の判定
//     if (count%2===1){
//         C.textContent = '〇'
//     } else {
//         C.textContent = '×'
//     }
// })

// これは配列が入る
const masu = document.querySelectorAll('.board div');
console.log(masu);

let count = 0

// 判定するための関数
const judge = (a, b, c) => {
    return masu[a].textContent === '〇' &&
        masu[b].textContent === '〇' &&
        masu[c].textContent === '〇'
}


for (let i = 0; i < 9; i++) {
    masu[i].addEventListener('click', () => {
        count++;

        // 奇数偶数の判定
        if (count % 2 === 1) {
            masu[i].textContent = '〇'
            masu[i].classList.add('maru');
        } else {
            masu[i].textContent = '×'
            masu[i].classList.add('batu');
        }

        // 勝敗の判定
        if (judge(0, 1, 2)) {
            console.log('〇の勝ち！')
        } else if (judge(3, 4, 5)) {
            console.log('〇の勝ち！')
        }
        else if (judge(6, 7, 8)) {
            console.log('〇の勝ち！')
        } else if (
            masu[0].textContent === '〇' &&
            masu[3].textContent === '〇' &&
            masu[6].textContent === '〇'
        ) {
            console.log('〇の勝ち！')
        } else if (
            masu[1].textContent === '〇' &&
            masu[4].textContent === '〇' &&
            masu[7].textContent === '〇'
        ) {
            console.log('〇の勝ち！')
        } else if (
            masu[2].textContent === '〇' &&
            masu[5].textContent === '〇' &&
            masu[8].textContent === '〇'
        ) {
            console.log('〇の勝ち！')
        } else if (
            masu[0].textContent === '〇' &&
            masu[4].textContent === '〇' &&
            masu[8].textContent === '〇'
        ) {
            console.log('〇の勝ち！')
        } else if (
            masu[2].textContent === '〇' &&
            masu[4].textContent === '〇' &&
            masu[6].textContent === '〇'
        ) {
            console.log('〇の勝ち！')
        }
    })
}


// イベントの外は読み込んだ瞬間に実行される
// if (masu[0].textContent === '〇'){
//     console.log(masu[0].textContent)
//     console.log('〇の勝ち！')
// }