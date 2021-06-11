/* 
Quy bài toán về tìm vị trí hai phần tử trong mảng thỏa mãn tổng của hai phần tử đó bằng một số cho trước.
- Các bước giải quyết vấn đề. 
B1 Tạo ra một object có các key là hiệu của phần tử trong mảng với số cho trước(golden_number) và value là vị trí của phần tử đó;
B2 Chạy vòng lặp qua mảng
  Kiểm tra phần tử hiện tại(penny_number) có giá trị là hiệu của bất kì phần tử nào trước nó với số cho trước(golden_number) hay không ?
  => Có: return một mảng bao gồm 2 phần tử,giá trị thứ nhất là value ứng với key là penny_number trong memoize, giá trị thứ 2 là vị trí của penny_number.
  => Không: tính hiệu(difference) của golden_number và penny_number rồi gán difference là key, value là vị trí của penny_number.
B3 Vòng lặp kết thúc không có giá trị thỏa mãn trả về mảng [-1,-1]
Time complexity: O(N)
Space complexity:O(N)
*/
function findLuckyCouple(penny_numbers, golden_number) {
  const memoize = {};
  for (let i = 0; i < penny_numbers.length; i++) {
    const penny_number = penny_numbers[i];
    if (penny_number in memoize) {
      return [memoize[penny_number], i];
    } else {
      const difference = golden_number - penny_number;
      memoize[difference] = i;
    }
  }
  return [-1, -1];
}

module.exports = findLuckyCouple;
