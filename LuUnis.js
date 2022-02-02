// const User = "Admin"
// console.log(User);
let count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2, 3, 4, 5, 6:
            count++;
            break;
        case 10, 'J', 'Q', 'K', 'A':
            count--;
            break;

    }
    var holdBet = "Hold";
    if (count > 0) {
        holdBet = "Bet"
    }
    return count + "" + holdBet;
    // Only change code above this line
}
console.log(cc(2));
cc(3);
cc(7);
cc('K');
cc('A');