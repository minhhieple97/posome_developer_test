// Quy bài toán về tìm vị trí của hai phần tử trong mảng thỏa mãn tổng của hai phần tử đó bằng một số cho trước.
// Mục tiêu:
// B1 Tạo ra một object (memoize)
// B2 Chạy vòng lặp qua mảng
// Ở mỗi lần lặp cần thực hiện 3 bước sau
// B1: Tìm ra giá trị (difference) là hiệu của tổng cho trước (golden_number) và phần tử trong mảng ở lần lặp hiện tại (penny_number)
// B2:
// Time complexity: O(N)
// Space complexity:O(N)
function findLuckyCouple(penny_numbers, golden_number) {
  const memoize = {};
  for (let i = 0; i < penny_numbers.length; i++) {
    const penny_number = penny_numbers[i];
    const difference = golden_number - penny_number;
    if (penny_number in memoize) {
      return [memoize[penny_number], i];
    } else {
      memoize[difference] = i;
    }
  }
  return [-1, -1];
}

module.exports = findLuckyCouple;
