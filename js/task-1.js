'use strict';



// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати 
// програмне забезпечення для відділу продажів. Оголоси функцію 
// makeTransaction(quantity, pricePerDroid, customerCredits), яка складає та 
// повертає повідомлення про купівлю ремонтних дроїдів.

// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:
// quantity — кількість замовлених дроїдів
// pricePerDroid — ціна одного дроїда
// customerCredits — сума коштів на рахунку клієнта

// Доповни функцію таким чином:

// Оголоси змінну для зберігання загальної суми замовлення (загальна вартість усіх 
// замовлених дроїдів) і задай їй вираз розрахунку цієї суми. Додай перевірку, чи 
// зможе клієнт оплатити замовлення: якщо сума до сплати перевищує кількість кредитів 
// на рахунку клієнта, функція має повертати рядок "Insufficient funds!" в іншому  випадку
//  функція має повертати рядок "You ordered <quantity> droids worth <totalPrice> credits!", 
//  де <quantity> це кількість замовлених дроїдів, а <totalPrice> це їх загальна вартість.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її 
// роботи. У консоль будуть виведені результати її роботи.

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

function makeTransaction(quantity, pricePerDroid, customerCredits) {
    // Обчислюємо загальну вартість замовлення. Якщо зробити рівність не строгою 
    // if (totalPrice >= customerCredits), 
    // то console.log(makeTransaction(10, 500, 5000)); поверне "Insufficient funds!", а це не 
    // відповідає умові задачі
    const totalPrice = quantity * pricePerDroid;

    // Перевіряємо, чи вистачає кредитів у клієнта  
    if (totalPrice > customerCredits) {
        return "Insufficient funds!";
    }

    // Повертаємо повідомлення про успішне замовлення
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

// Перевірка функції
// 1
console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// 2
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// 3
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// 4
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// 5
console.log(makeTransaction(10, 500, 5000));  // "You ordered 10 droids worth 5000 credits!"


