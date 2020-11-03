  // 两数相减
 export function numSubtract(str, str1) {
    str = str.toString();
    str1 = str1.toString();
    let newNum = 0;
    let obj = [
      {
        value: "",
        isNumber: false,
        baseValue: str,
      },
      {
        value: "",
        isNumber: false,
        baseValue: str1,
      },
    ];
    if (str.includes(".")) {
      obj[0].value = str.substring(str.lastIndexOf(".") + 1);
    } else {
      obj[0].isNumber = true;
    }
    if (str1.includes(".")) {
      obj[1].value = str1.substring(str1.lastIndexOf(".") + 1);
    } else {
      obj[1].isNumber = true;
    }
    if (obj[0].isNumber && obj[1].isNumber) {
      return str * 1 - str1 * 1;
    }
    let maxNum = obj.filter((x) => !x.isNumber);
    if (maxNum.length === 2) {
      let q = maxNum[0].value.length - maxNum[1].value.length;
      if (q > 0) {
        let a = str.replace(".", "");
        let b =
          str1.replace(".", "") *
          Math.pow(10, maxNum[0].value.length - maxNum[1].value.length);
        return (a * 1 - b * 1) / Math.pow(10, maxNum[0].value.length);
      } else if (q === 0) {
        let a = str.replace(".", "");
        let b = str1.replace(".", "");
        return (a * 1 - b * 1) / Math.pow(10, maxNum[0].value.length);
      } else {
        let a = str1.replace(".", "");
        let b =
          str.replace(".", "") *
          Math.pow(10, maxNum[1].value.length - maxNum[0].value.length);
        return (b * 1 - a * 1) / Math.pow(10, maxNum[1].value.length);
      }
    } else {
      let a = maxNum[0].baseValue.replace(".", "");
      let b =
        obj.filter((x) => x.isNumber)[0].baseValue *
        Math.pow(10, maxNum[0].value.length);
      if (maxNum[0].baseValue === str) {
        return (a * 1 - b * 1)/ Math.pow(10, maxNum[0].value.length);
      } else {
        return (b * 1 - a * 1)/ Math.pow(10, maxNum[0].value.length);
      }
    }
  }