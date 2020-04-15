//Bạn nên comment số thứ tự từng bài để người chấm dễ check hơn !!!

// Ex 3: Đề bài yêu cầu in ra các số NT <= N, b thiếu trường hợp = N

// let a = Number(prompt("Nhap vao 1 so bat ky"));

// for (let c = 2; c < a; c++) {

//   if (c === 2) {
//     console.log(c);
//   } else if (c === 3) {
//     console.log(c);
//   } else {
//     let count = 0;

//     for (let i = 2; i <= Math.sqrt(c); i++) {
//       if (c % i === 0) {
//         count++;
//       }
//     }

//     if (count === 0) {
//       console.log(c);
//     }
//   }
// }

// Ex 1: B nên để ý khi đặt tên biến ("tong" và "tongLe" đang bị đặt nhầm + gậy hiểm nhầm cho người đọc)

// let a = Number(prompt("Nhap vao 1 so bat ky"));
// let tong = 0;
// for (let i = 0; i <= a; i++) {
//   if (i % 2 == 1) {
//     tong += i;
//   }
// }
// console.log("Tong cac so le la " + tong);

// let tongLe = 0;
// for (let j = 0; j <= a; j++) {
//   if (j % 2 == 0) {
//     tongLe += j;
//   }
// }
// console.log(tongLe);


// Ex 2: Bạn chưa xử lý trường hợp input < 2

// let a = Number(prompt("Nhap vao 1 so bat ky"));

// let count = 0;

// for (let i = 2; i <= Math.sqrt(a); i++) {
//   if (a % i == 0) {
//     count++;
//   }
// }

// if (count === 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Ex 4

// let a = Number(prompt("Nhap vao 1 so bat ky"));
// let i = 1,
//   j = 0,
//   temp;

// for (let k = a; (k = 1); k--) { //=> B đang nhầm lẫn giữa phép so sánh "== và phép gán "="
//   temp = i;
//   i = i + j;
//   j = temp;
// }

// console.log(j);

/** Ex 4
 * B nên cho "a" nên lấy input từ hàm prompt()
 * Trường hơp a = 0 sai (in ra 1 - đáp án đúng = 0)
 */

// function fibonaci(a) {
//   if (a <= 2) {
//     return 1;
//   } else return fibonaci(a - 2) + fibonaci(a - 1);
// }

// console.log(fibonaci(3));

// Ex 5

// loop = true;
// let tong = 0;

// while (loop) { //Nếu "loop" chỉ dùng làm đk cho vòng lặp => b có thể thay = while(true)
//   let a = Number(prompt("Nhap vao so bat ky"));

//   if (a >= 0) {
//     tong += a;
//   } else {
//     console.log(tong);
//     break;
//   }
// }

// Ex 6

// let a = prompt("Nhap chuoi bat ky");
// let b = a.split("").reverse().join("");

// if (b === a) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let a = prompt("Nhap chuoi bat ky");
// let b = length.a;

// let count = 0;

// for (let i = 1; i < b / 2; i++) {
//   if (a[i] !== a[b + 1 - i]) { //"a[b + 1 - i]" thay = "a[b - i]" để lấy dần từ ký từ cuối về giữa
//     count++;
//   }
// }

// if (count == 0) {
//   console.log("chuoi doi xung");
// } else {
//   console.log("chuoi k doi xung");
// }

// Ex 7

// let m = Number(prompt("Nhap vao chieu dai hcn"));
// let n = Number(prompt("Nhap vao chieu rong hcn"));

// let count = "";

// for (i = 1; i <= m; i++) {
//   for (j = 1; j <= n; j++) {
//     count += "* ";
//   }
//   count += "\n";
// }
// console.log(count);

// Ex 8 + 9: B có thể tự tìm hiểu cách giải phương trình bậc nhất 2 ẩn = Javascript
