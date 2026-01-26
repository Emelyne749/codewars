// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized, and remaining letters lowercased.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false


function generateHashtag(str) {
  if (!str || str.trim().length === 0) return false;

  const words = str.trim().split(" ");
  const capWords = [];

  for (let word of words) {
    if (word !== "") {
      capWords.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }
  }

  const hashtag = "#" + capWords.join("");

  return hashtag.length > 140 ? false : hashtag;
}