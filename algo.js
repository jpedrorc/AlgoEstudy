const array = [10, 15, 3, 7, 4, 2, 1, 12, 154, 123];
k = 2;

function opArray(element, k) {
  let i = 0;
  do {
    for (let n = 0; n < array.length; n++) {
      if (element[i] + element[n] == k) {
        console.log(`${element[i]} + ${element[n]} == ${k}`);
        return;
      } else if (element[i] - element[n] == k) {
        console.log(`${element[i]} - ${element[n]} == ${k}`);
        return;
      } else if (element[i] * element[n] == k) {
        console.log(`${element[i]} * ${element[n]} == ${k}`);
        return;
      } else if (element[i] / element[n] == k) {
        console.log(`${element[i]} / ${element[n]} == ${k}`);
        return;
      }
    }
    i++;
  } while (i < array.length);
  console.log(`${k} não é resultado de nenhuma combinação da lista`);
}

opArray(array, k);
