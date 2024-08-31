function bingo(ticket, win) {
  // Initialize the count of mini-wins
  let miniWins = 0;

  // Loop through each subarray in the ticket
  for (let i = 0; i < ticket.length; i++) {
    let [str, num] = ticket[i]; // Destructure the string and number from the subarray

    // Check if any character in the string has a character code that matches the number
    for (let char of str) {
      if (char.charCodeAt(0) === num) {
        miniWins++; // Count a mini-win
        break; // Stop checking once we have a mini-win for this subarray
      }
    }
  }

  // Determine if we have enough mini-wins to be a winner
  return miniWins >= win ? "Winner!" : "Loser!";
}
