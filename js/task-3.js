'use strict';

// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє 
// його на вміст заборонених слів spam і sale, і повертає результат перевірки. 
// Слова в рядку параметра message можуть бути в довільному регістрі, 
// наприклад SPAM або sAlE.

// Доповни код функції таким чином, що:

// Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
// Якщо в рядку відсутні заборонені слова, функція повертає буль false

// Візьми код нижче і встав після оголошення своєї функції для перевірки 
// коректності її роботи. У консоль будуть виведені результати її роботи.

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

function checkForSpam(message) {
    // Переводимо повідомлення в нижній регістр для перевірки
    const lowerCaseMessage = message.toLowerCase();
    
    // Перевіряємо наявність заборонених слів
    return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}

// Перевірка роботи функції
// 1
console.log(checkForSpam("Latest technology news")); // false
// 2
console.log(checkForSpam("JavaScript weekly newsletter")); // false
// 3
console.log(checkForSpam("Get best sale offers now!")); // true
// 4
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// 5
console.log(checkForSpam("Trust me, this is not a spam message")); // true
// 6
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// 7
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
