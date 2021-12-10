// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

// const zucchine = [
//     {
//         nome: 'Zucchino nero di Milano',
//         peso: 2,
//         lunghezza: 3
//     },
//     {
//         nome: 'Zucchino romanesco',
//         peso: 3,
//         lunghezza: 17
//     },
//     {
//         nome: 'Zucchino ortolano di Faenza',
//         peso: 4,
//         lunghezza: 5
//     },
//     {
//         nome: 'Zucchina lunga fiorentina',
//         peso: 1,
//         lunghezza: 21
//     },
//     {
//         nome: 'Zucchino siciliano',
//         peso: 3,
//         lunghezza: 10
//     },
//     {
//         nome: 'Zucchina striata di Napoli',
//         peso: 1,
//         lunghezza: 30
//     },
//     {
//         nome: 'Zucchina bianca triestina',
//         peso: 2,
//         lunghezza: 20
//     },
//     {
//         nome: 'Zucchina rigata pugliese',
//         peso: 3,
//         lunghezza: 9
//     },
//     {
//         nome: 'Zucchino tondo di Piacenza',
//         peso: 5,
//         lunghezza: 11
//     },
//     {
//         nome: 'Zucchino tondo di Nizza',
//         peso: 4,
//         lunghezza: 32
//     }
// ];

// // let sum = 0;

// // for (let i = 0; i < zucchine.length; i++) {
// //     const pesoTot = zucchine[i].peso;
// //     sum += pesoTot;

// // }

// // console.log(sum);

// // Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// // Infine stampa separatamente quanto pesano i due gruppi di zucchine.

// const under15 = [];
// let sumUnder = 0;
// const over15 = [];
// let sumOver = 0;

// for (let i = 0; i < zucchine.length; i++) {
//     const zucchina = zucchine[i];
//     const lunghezza = zucchina.lunghezza;
//     if (lunghezza > 15) {
//         over15.push(zucchina);
//         sumOver += zucchina.peso;
//     } else {
//         under15.push(zucchina);
//         sumUnder += zucchina.peso;
//     }
// }

// console.log(under15, sumUnder);
// console.log(over15, sumOver);

// Scrivi una funzione che fonda due array(aventi lo stesso numero di elementi) 
// prendendo alternativamente gli elementi da uno e dall’altro
// es. [a, b, c], [1, 2, 3] →[a, 1, b, 2, c, 3].

const array1 = ['a', 'b', 'c', 'd', 'e', 'f'];
const array2 = [1, 2, 3, 4, 5, 6];


function sumArray(arr1, arr2) {
    const arraySum = [];
    for (let i = 0; i < arr1.length; i++) {
        arraySum.push(arr1[i]);
        arraySum.push(arr2[i]);
    };
    return arraySum;
}

console.log(sumArray(array1, array2));

