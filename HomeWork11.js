//1
function unique(arr) {
  let unqiuesArr = [];
  arr.map(function (el) {
    let serialNumber = arr.shift();
    if (arr.includes(serialNumber)) {
    } else {
      unqiuesArr.push(serialNumber);
    }
  });
  return unqiuesArr;
}
//2
function bubleSort(arr) {
  let whilst = true;
  let count = 0;
  while (whilst) {
    count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        count++;
        let reserve = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = reserve;
      }
    }
    if (count === 0) {
      whilst = false;
    }
  }
  return arr;
}
//3
function bubleSort1(arr) {
  let reserve = 0;
  let count = 0;
  let whilist = true;
  while (whilist) {
    count = 0;
    let i = 0;
    while (i < arr.length) {
      if (arr[i] > arr[i + 1]) {
        count++;
        reserve = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = reserve;
      }
      i++;
    }
    if (count === 0) {
      whilist = false;
    }
  }
  return arr;
}
//4
function bubleSort2(arr) {
  let whileist = true;
  let count = 0;
  for (; whileist; ) {
    count = 0;
    let i = 0;
    while (i < arr.length) {
      if (arr[i] > arr[i + 1]) {
        count++;
        let reserreve = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = reserreve;
      }
      i++;
    }
    if (count === 0) {
      whileist = false;
    }
  }
  return arr;
}
//5
function onlyGirls(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender === "female") {
      newArr.push(arr[i]);
    }
  }
  let whileist = true;
  let count = 0;
  for (; whileist; ) {
    for (let i = 0; i < newArr.length - 1; i++) {
      count = 0;
      if (newArr[i].age > newArr[i + 1].age) {
        let resereve = newArr[i];
        newArr[i] = newArr[i + 1];
        newArr[i + 1] = resereve;
        count++;
      }
    }
    if (count === 0) {
      whileist = false;
    }
  }
  return newArr;
}
