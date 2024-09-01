import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const PermutationCombination = () => {

    const questionArray = [
        {
            "question": "How many 5-digit telephone numbers can be constructed using the digits 0 to 9, if each number starts with 67 and no digit appears more than once?",
            "explain": "To determine the number of possible 5-digit telephone numbers starting with 67, where no digit repeats, follow these steps:<br><br>Let ABCDE be a five-digit number where the first two digits are fixed as 6 and 7. Therefore, the number is in the form 67CDE.<br><br>Since repetition of digits is not allowed and 6 and 7 are already used, the remaining digits available for C are 0, 1, 2, 3, 4, 5, 8, and 9, totaling 8 possible digits.<br><br>Once a digit is chosen for C, it cannot be used for D. Thus, 7 digits remain available for D. Similarly, after choosing digits for C and D, 6 digits are left for E.<br><br>Hence, the total number of possible five-digit telephone numbers is calculated as:<br><br><b>8 × 7 × 6 = 336</b>",
            "options": [
              "280",
              "336",
              "504",
              "672"
            ],
            "correct": "336"
          },
          {
            "question": "Find the number of permutations of the letters of the word ALLAHABAD.",
            "explain": "To find the number of distinct permutations of the letters in the word ALLAHABAD, follow these steps:<br><br>The word ALLAHABAD consists of 9 letters. The frequency of each letter is as follows:<br><br>- A: 4 times<br>- L: 2 times<br>- H: 1 time<br>- B: 1 time<br>- D: 1 time<br><br>The formula for permutations of a word with repeating letters is:<br><br><b>Number of permutations = total permutation / factorial of no. of repeated letters <br><br>Thus, the number of distinct permutations is:<br><br><b>9! / (4! × 2!)</b><br><br>Calculating this:<br><br><b>9! = 362880<br>4! = 24<br>2! = 2<br>Number of permutations = 362880 / (24 × 2) = 7560</b>",
            "options": [
              "2520",
              "5040",
              "7560",
              "10080"
            ],
            "correct": "7560"
          },
          {
            "question": "In how many of the distinct permutations of the letters in MISSISSIPPI do the four I's not come together?",
            "explain": "To determine how many permutations of the word MISSISSIPPI have the four I's not coming together, follow these steps:<br><br>The word MISSISSIPPI consists of 11 letters with the following frequencies:<br><br>- M: 1<br>- I: 4<br>- S: 4<br>- P: 2<br><br>First, calculate the total number of distinct permutations of the letters:<br><br><b>Number of permutations = 11! / (4! × 4! × 2!)</b><br><br>Calculating this:<br><br><b>11! = 39916800<br>4! = 24<br>2! = 2<br>Number of permutations = 39916800 / (24 × 24 × 2) = 34650</b><br><br>Next, calculate the permutations where all four I's are together. Treat the four I's as a single unit, which reduces the problem to finding permutations of 8 items (M, S, S, S, S, P, P, (IIII)).<br><br><b>Number of permutations = 8! / (4! × 2!)</b><br><br>Calculating this:<br><br><b>8! = 40320<br>4! = 24<br>2! = 2<br>Number of permutations = 40320 / (24 × 2) = 840</b><br><br>Finally, subtract the permutations where the four I's are together from the total number of permutations:<br><br><b>Total permutations where I's do not come together = 34650 - 840 = 33810</b>",
            "options": [
              "33810",
              "34650",
              "35000",
              "35420"
            ],
            "correct": "33810"
          },
          

    ];

    const subjective = [

    ];

  return (
    <div>
      <QuestDisplay title = "Maths - Permutation and Combination" question = {questionArray} subjective = {subjective} sub = "Physics" />
    </div>
  )
}

export default PermutationCombination
