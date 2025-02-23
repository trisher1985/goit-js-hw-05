'use strict';

// Модуль5. Задача 2. Користувачі з другом

// Напиши стрілочну функцію getUsersWithFriend(users, friendName) , яка прийматиме два параметра:

// перший параметр users — масив об’єктів користувачів
// другий параметр friendName — ім’я друга для пошуку.
// Функція має повертати масив усіх користувачів із масиву users, у яких є друг
//  з іменем friendName. Друзі кожного користувача зберігаються у властивості friends. 
// Якщо користувачів, у яких є такий друг немає, то функція має повернути порожній масив.

// Поради:

// Метод filter() можна використовувати для створення нового масиву з елементами, 
// які задовольняють певну умову.
// !!! Використовуй метод includes() для перевірки, чи масив friends містить friendName. !!!
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
//  У консоль будуть виведені результати її роботи.

// __________________________________________________________________________
// filter(): Використовується для створення нового масиву, який містить лише ті елементи, які 
// задовольняють нашу умову, що масив friends повинен містити friendName.

const getUsersWithFriend = (users, friendName) =>
    users.filter(user => user.friends.includes(friendName));

// includes(): Перевіряє, чи міститься friendName у масиві friends кожного користувача. 
// Якщо так, то цей користувач додається до масиву, який ми отримуюєму в результаті виконання функції.


const allUsers = [
    {
    name: "Moore Hensley",
    friends: ["Sharron Pace"]
    },
    {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"]
    },
    {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
    },
    {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"]
    },
    {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"]
    },
    {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"]
    },
    {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"]
    }
];

console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
  // [
  //   {
  //     name: "Sharlene Bush",
  //     friends: ["Briana Decker", "Sharron Pace"]
  //   },
  //   {
  //     name: "Sheree Anthony",
  //     friends: ["Goldie Gentry", "Briana Decker"]
  //   }
  // ]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
  // [
  //   {
  //     name: "Elma Head",
  //     friends: ["Goldie Gentry", "Aisha Tran"]
  //   },
  //   {
  //     name: "Sheree Anthony",
  //     friends: ["Goldie Gentry", "Briana Decker"]
  //   }
  // ]

//якщо користувача із такими друзями немає - повертається порожній масив:

  console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []



  // __________________________________________________________________________
// рішення без includes()  /АЛЕ ЦЕ НЕ ВІДПОВІДАЄ УМОВАМ ДЗ/:
// __________________________________________________________________________
// const getUsersWithFriend = (users, friendName) =>
//     users.filter((user) => user.friends.some((friend) => friend === friendName));
// 
// і нижче сюди скопіювати код із строчок [31-88]
// // __________________________________________________________________________
// 
// Метод some() перевіряє, чи хоча б один елемент масиву задовольняє умову, 
// задану у функції зворотного виклику. У нашому випадку він перевіряє, чи
//  є у масиві friends елемент, який дорівнює friendName.

// Метод includes() просто перевіряє, чи міститься значення у масиві, тоді як some() 
// дозволяє використовувати будь-яку умову для перевірки. Якщо потрібно буде додати
//  додаткові умови для пошуку друга (наприклад, порівняння з урахуванням регістру 
// або часткове співпадіння), some() дозволить це зробити легко.

// /АЛЕ ЦЕ НЕ ВІДПОВІДАЄ УМОВАМ ДЗ/ , бу у нас в ТЗ прояма вказівка:
// !!! Використовуй метод includes() для перевірки, чи масив friends містить friendName. !!! див. строчку 16 !!!
// __________________________________________________________________________