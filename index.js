// let nums = [11, 2, 0];

// let firstMissingPositive = function(nums) {
//   let sortedArr = nums.sort((a, b) => a - b);
//   let peakIndex = sortedArr.length - 1;
//   let peakEl = nums[peakIndex];

//   for (let i = 1; i < peakEl; i++) {
//     const element = i;
//     if(nums.includes(element)) {
//       console.log(peakEl + 1);
//       break;
//     } else {
//       nums.push(element);
//       let lastIndex = nums.length - 1;
//       let result = nums[lastIndex];
//       console.log(result);
//     }
//   }
// };

// firstMissingPositive(nums);

// let nums = [1, 7, 3, 6, 5, 6];
// let sumNums = 0;
// let leftSum = 0;

// function pivotIndex() {
//   for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     sumNums += element;
//     let rightSum = sumNums - element - leftSum;
//     if (leftSum == rightSum) {
//       return element;
//     } else {
//       leftSum += element;
//       return -1;
//     }
//   }
// }

// pivotIndex(nums);
// let s = "aa";
// function isPalindrome(word) {
//   let str = s.replace(/[\WI_]/g, "").toLocaleLowerCase();
//   let strLength = str.length
//   let leftCount = Math.floor(str.length / 2);

//   let leftWord = str.substring(0, leftCount);
//   let rightWord = str.substring(leftCount + 1, strLength);
//   let rightWordReverse = rightWord.split("").reverse().join("");
//   console.log(leftWord);
//   console.log(rightWordReverse);

//   if(leftWord == rightWordReverse) {
//     console.log('ok');
//   } else {
//     console.log("bad");
//   }

// };

// isPalindrome(s)
// let s = "aa";
// function isPalindrome(word) {
//   let str = s.replace(/[\WI_]/g, "").toLocaleLowerCase();
//   let strLength = str.length
//   let leftCount = Math.floor(str.length / 2);

//   let leftWord = str.substring(0, leftCount);
//   let rightWord = str.substring(leftCount, strLength);
//   let rightWordReverse = rightWord.split("").reverse().join("");
//   console.log(leftWord);
//   console.log(rightWordReverse);

//   if(leftWord == rightWordReverse) {
//     console.log('ok');
//   } else if(strLength % 2 == 0) {
//     console.log("bad");
//   }

// };

// isPalindrome(s)
console.log(null ?? 1);
console.log(undefined ?? 1);
console.log(NaN ?? 1);
console.log(false ?? 1);