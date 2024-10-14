export function isPalindrome(x: number): boolean {
  const num = x.toString().split("");
  for (let index = 0; index < num.length / 2; index++) {
    if (num[index] !== num[num.length - 1 - index]) {
      return false;
    }
  }
  return true;
}

export function isPalindrome2(x: number): boolean {
  const numToStr = x.toString();
  const reversedStr = numToStr.split("").reverse().join("");
  return numToStr === reversedStr;
}
