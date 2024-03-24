//Elements
let counterDisplayHome = document.getElementById("counter-number-home")
let counterDisplayGuest = document.getElementById("counter-number-Guest")
let counterHomeContainer = document.getElementById("home-container")
let counterGuestContainer = document.getElementById("guest-container")

//Counters
let counterHome = 0
let counterGuest = 0

//Home
function incrementOneHome() {
    if (counterHome < 21) {
        counterHome += 1;
        counterDisplayHome.textContent = counterHome
        updateCounterHighlight();
    } else {
        counterHome = 21;
        resetCounters()
    }
}

function incrementTwoHome() {
    if (counterHome < 19) {
        counterHome += 2;
        counterDisplayHome.textContent = counterHome
        updateCounterHighlight();
    } else {
        counterHome = 21;
        resetCounters()
    }
}

function incrementThreeHome() {
    if (counterHome < 18) {
        counterHome += 3;
        counterDisplayHome.textContent = counterHome
        updateCounterHighlight();
    } else {
        counterHome = 21;
        resetCounters()
    }
}

//Guest
function incrementOneGuest() {
    if (counterGuest < 21) {
        counterGuest += 1;
        counterDisplayGuest.textContent = counterGuest
        updateCounterHighlight();
    } else {
        counterGuest = 21;
        resetCounters()
    }
}

function incrementTwoGuest() {
    if (counterGuest < 19) {
        counterGuest += 2;
        counterDisplayGuest.textContent = counterGuest
        updateCounterHighlight();
    } else {
        counterGuest = 21;
        resetCounters()
    }
}

function incrementThreeGuest() {
    if (counterGuest < 18) {
        counterGuest += 3;
        counterDisplayGuest.textContent = counterGuest
        updateCounterHighlight();
    } else {
        counterGuest = 21;
        resetCounters()
    }
}

//reset
function resetCounters() {
    counterHome = 0;
    counterGuest = 0;
    counterDisplayHome.textContent = counterHome;
    counterDisplayGuest.textContent = counterGuest;
}

//Highlight
function updateCounterHighlight() {
    if (counterHome > counterGuest) {
        counterHomeContainer.classList.add('highlight')
        counterGuestContainer.classList.remove('highlight')
    } else if (counterGuest > counterHome) {
        counterGuestContainer.classList.add('highlight');
        counterHomeContainer.classList.remove('highlight');
    } else {
        counterHomeContainer.classList.remove('highlight');
        counterGuestContainer.classList.remove('highlight');
    }
} 