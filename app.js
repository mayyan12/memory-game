// מתחילים משחק זיכרון.

// משימות להיום:
// 1. לבנות מערך של קלפים.
// 2. לבנות פונקציה שתערבב את המערך (להדפיס את המערך בסוף כש * מייצגת קלף נסתר)
// 3. פונקציה שתקבל 2 בחירות מהמשתמש ותבדוק אם הקלפים שנבחרו תואמים או לא.
//    במידה והם תואמים צריך להדפיס למסך את המערך שהקלפים שנבחרו גלויים במידה ולא לזרוק alert של המערך עם הקלפים גלויים אבל לא לשמור אותם בתור גלויים.
const cardElements = document.createElement("div");
const bordElements = document.getElementById("bord");

bordElements.appendChild(cardElements);

// let cardGame = ["a", "b", "c", "d", "e"];

// function CardShuffling() {
//   let randomCard = [];
//   for (let i = 0; i < cardGame.length * 2; i++) {
//     randomCard.push(cardGame[Math.floor(Math.random() * cardGame.length)]);
//   }
//   return randomCard;
// }
// console.log(CardShuffling());

// function hideInAsterisks() {
//   let hidenArr = [];
//   for (let i = 0; i < 12; i++) {
//     hidenArr[i] = "*";
//   }
//   return hidenArr;
// }
// console.log(hideInAsterisks());

// const mainArray = ["a", "b", "c", "d", "e"];

// function shuffle(arrayForShuffling) {
//   let temp;
//   for (let i = 0; i < arrayForShuffling.length * 2; i++) {
//     let random1 = Math.floor(Math.random() * arrayForShuffling.length);
//     let random2 = Math.floor(Math.random() * arrayForShuffling.length);
//     temp = arrayForShuffling[random1];
//     arrayForShuffling[random1] = arrayForShuffling[random2];
//     arrayForShuffling[random2] = temp;
//   }
//   return arrayForShuffling;
// }
// const arrayAfterShuffling = shuffle(mainArray.concat(mainArray));
// const stars = "*".repeat(arrayAfterShuffling.length).split("");
// console.log(stars);
// console.log(arrayAfterShuffling);

// function faound() {
//   while (stars.toString() != arrayAfterShuffling.toString()) {
//     let a = Number(
//       prompt(` ${stars}
//     pls enter number from 0-9`)
//     );
//     alert(`u choise ${arrayAfterShuffling[a]}`);
//     let b = Number(
//       prompt(` ${stars}
//     pls enter ander number from 0-9`)
//     );
//     if (arrayAfterShuffling[a] == arrayAfterShuffling[b] && a != b) {
//       alert(`card1 ${arrayAfterShuffling[a]}
//       card2 ${arrayAfterShuffling[b]}`);
//       stars[a] = arrayAfterShuffling[a];
//       stars[b] = arrayAfterShuffling[b];
//     } else {
//       alert(`card 2 ${arrayAfterShuffling[b]}`);
//     }
//   }
//   return alert("good game u win!");
// }
// faound();
