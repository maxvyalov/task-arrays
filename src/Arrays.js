import { resolveSoa } from 'dns';

export function arraySorting(data) {
    data = data.split(',');
    let res = data.sort((a, b) => a - b);
    return res.toString();
}

export function arrayFiltering(data) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i] < 100) {
            res.push(data[i]);
        }
    }
    return (data = res);
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let res = [];
    for (let i = 0; i < array1.length; i++) {
        res.push(array1[i]);
        res.push(array2[i]);
    }
    return res;
}
