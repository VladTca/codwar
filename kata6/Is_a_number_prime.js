function isPrime(n) {
  // Edge case: numbers less than or equal to 1 are not prime
  if (n <= 1) {
    return false;
  }

  // The number 2 is a prime number
  if (n === 2) {
    return true;
  }

  // Even numbers greater than 2 are not prime
  if (n % 2 === 0) {
    return false;
  }

  // Check divisibility from 3 up to the square root of n
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  // If no factors found, n is prime
  return true;
}

//
// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.
//
//     Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
//
//     Requirements
// You can assume you will be given an integer input.
//     You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
//     Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */
// Test.assertEquals(isPrime(0),  false, "0 is not prime");
// Test.assertEquals(isPrime(1),  false, "1 is not prime");
// Test.assertEquals(isPrime(2),  true, "2 is prime");
// Test.assertEquals(isPrime(73), true, "73 is prime");
// Test.assertEquals(isPrime(75), false, "75 is not prime");
// Test.assertEquals(isPrime(-1), false, "-1 is not prime");
