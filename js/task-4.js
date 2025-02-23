'use strict';

// Модуль5. Задача 4. Загальний баланс

// Напиши стрілочну функцію getTotalBalanceByGender(users, gender), яка прийматиме два параметра:

// перший параметр users — масив об’єктів користувачів,
// другий параметр gender — рядок, що зберігає стать.
// Функція має використовувати ланцюжок виклику методів та повертати загальний баланс користувачів 
// (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.

// __________________________________________________________________________

// filter: Використовується для відбору користувачів, у яких властивість gender збігається 
// з переданим значенням.
// reduce: Застосовується для підсумовування балансу відфільтрованих користувачів. 
// Початкове значення загальної суми балансів відфільтрованих користувачів totalBalance встановлено на 0.

// const getTotalBalanceByGender = (users, gender) => {
//     return users
//       .filter(user => user.gender === gender) // сортуємо користувачів за статтю (gender)
//       .reduce((totalBalance, user) => totalBalance + user.balance, 0); // Сумуємо загальний баланс
// };

const getTotalBalanceByGender = (users, gender) => {
    return users
      .filter(user => user.gender === gender) // Фільтруємо користувачів за статтю
      .reduce((totalBalance, user) => totalBalance + user.balance, 0); // Сумуємо баланс
    };

    const clients = [
        {
        name: "Moore Hensley",
        gender: "male",
        balance: 2811
        },
        {
        name: "Sharlene Bush",
        gender: "female",
        balance: 3821
        },
        {
        name: "Ross Vazquez",
        gender: "male",
        balance: 3793
        },
        {
        name: "Elma Head",
        gender: "female",
        balance: 2278
        },
        {
        name: "Carey Barr",
        gender: "male",
        balance: 3951
        },
        {
        name: "Blackburn Dotson",
        gender: "male",
        balance: 1498
        },
        {
        name: "Sheree Anthony",
        gender: "female",
        balance: 2764
        }
    ];

// Функція повертає загальний баланс для користувачів відповідної статі.

  console.log(getTotalBalanceByGender(clients, "male")); // 12053
  console.log(getTotalBalanceByGender(clients, "female")); // 8863
