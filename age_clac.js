let userInput = document.getElementById("date");
let result = document.getElementById("result");

function calculateAge() {
    let birthdate = new Date(userInput.value);

    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth() + 1;
    let y1 = birthdate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let y, m, d;
    y = y2 - y1;

    if (m2 >= m1) {
        m = m2 - m1;
    } else {
        y--;
        m = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d = d2 - d1;
    } else {
        m--;
        d = getDaysInMonth(y2, m2 - 1) + d2 - d1; // Adjusted to calculate days correctly
    }

    if (m < 0) {
        m = 11;
        y--;
    }

    result.innerHTML = `Congrats,  You are ${y} years, ${m} months, and ${d} days old.`;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
