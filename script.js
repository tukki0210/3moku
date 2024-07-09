const A = document.querySelector('#A')

let count = 0

A.addEventListener('click', () => {
    count++;
    // 奇数偶数の判定
    if (count%2===1){
        A.textContent = '〇'
    } else {
        A.textContent = '×'
    }
})