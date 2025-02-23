'use strict';

// Модуль5. Задача 3. Сортування за кількістю друзів

// Напиши стрілочну функцію sortByDescendingFriendCount(users) , яка прийматиме 
// один параметр users — масив об’єктів користувачів.
// Функція має повертати масив усіх користувачів, відсортованих за спаданням кількості
// їх друзів (властивість friends).
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
//  У консоль будуть виведені результати її роботи.
// __________________________________________________________________________

// Функція sortByDescendingFriendCount: Приймає масив об'єктів users. Використовує метод sort для сортування 
// масиву. У функції сортування порівнюється кількість друзів (friends.length) у кожного користувача.
// Сортування відбувається за спаданням, тому від більшого до меншого (b.friends.length - a.friends.length).

const sortByDescendingFriendCount = (users) => 
    users.toSorted((a, b) => b.friends.length - a.friends.length);

//сортуємо за спаданням (b.friends.length - a.friends.length).

// У консоль виводиться результат сортування масиву користувачів, який містить об'єкти
// з іменами, списками друзів та стать і є новим відсортованим масивом.:

console.log(
    sortByDescendingFriendCount([
    {
        name: "Moore Hensley",
        friends: ["Sharron Pace"],
        gender: "male"
    },
    {
        name: "Sharlene Bush",
        friends: ["Briana Decker", "Sharron Pace"],
        gender: "female"
    },
    {
        name: "Ross Vazquez",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        gender: "male"
    },
    {
        name: "Elma Head",
        friends: ["Goldie Gentry", "Aisha Tran"],
        gender: "female"
    },
    {
        name: "Carey Barr",
        friends: ["Jordan Sampson", "Eddie Strong"],
        gender: "male"
    },
    {
        name: "Blackburn Dotson",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        gender: "male"
    },
    {
        name: "Sheree Anthony",
        friends: ["Goldie Gentry", "Briana Decker"],
        gender: "female"
    }
    ])
);

  // Функція повертає відсортований масив користувачів, 
  // де перший користувач має найбільшу кількість друзів, а останній — найменшу.

  // [
  //   {
  //     name: "Ross Vazquez",
  //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
  //     gender: "male"
  //   },
  //   {
  //     name: "Sharlene Bush",
  //     friends: ["Briana Decker", "Sharron Pace"],
  //     gender: "female"
  //   },
  //   {
  //     name: "Elma Head",
  //     friends: ["Goldie Gentry", "Aisha Tran"],
  //     gender: "female"
  //   },
  //   {
  //     name: "Carey Barr",
  //     friends: ["Jordan Sampson", "Eddie Strong"],
  //     gender: "male"
  //   },
  //   {
  //     name: "Blackburn Dotson",
  //     friends: ["Jacklyn Lucas", "Linda Chapman"],
  //     gender: "male"
  //   },
  //   {
  //     name: "Sheree Anthony",
  //     friends: ["Goldie Gentry", "Briana Decker"],
  //     gender: "female"
  //   },
  //   {
  //     name: "Moore Hensley",
  //     friends: ["Sharron Pace"],
  //     gender: "male"
  //   }
  // ]

