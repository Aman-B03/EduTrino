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
          {
            "question": "A committee of 3 persons is to be constituted from a group of 2 men and 3 women. How many of these committees would consist of 1 man and 2 women?",
            "explain": "The problem requires us to find how many committees of 1 man and 2 women can be formed from 2 men and 3 women.<br><br>First, we calculate how to select 1 man from 2 men:<br><br><b>Number of ways to select 1 man = 2C1 = 2</b><br><br>Next, we calculate how to select 2 women from 3 women:<br><br><b>Number of ways to select 2 women = 3C2 = 3</b><br><br>Now, multiply the two combinations to get the total number of committees:<br><br><b>Total number of committees = 2C1 × 3C2 = 2 × 3 = 6</b>",
            "options": [
              "6",
              "4",
              "8",
              "10"
            ],
            "correct": "6"
          },
          {
            "question": "Determine the number of 5 card combinations out of a deck of 52 cards, if there is exactly one ace in each combination.",
            "explain": "The problem asks us to determine the number of ways to form 5 card combinations from a deck of 52 cards, where exactly one card is an Ace.<br><br>First, we select 1 Ace from the 4 available Aces:<br><br><b>Number of ways to select 1 Ace = 4C1 = 4</b><br><br>Next, we need to select 4 more cards from the remaining 48 cards (since 4 Aces were removed):<br><br><b>Number of ways to select 4 cards from 48 = 48C4</b><br><br>Calculating this:<br><br><b>48C4 = (48 × 47 × 46 × 45) / 4! = (48 × 47 × 46 × 45) / 24 = 194580</b><br><br>Finally, multiply the two combinations together to get the total number of 5-card combinations:<br><br><b>Total number of combinations = 4 × 194580 = 778320</b>",
            "options": [
              "778320",
              "752400",
              "800000",
              "780000"
            ],
            "correct": "778320"
          },
          {
            "question": "A group consists of 4 girls and 7 boys. In how many ways can a team of 5 members be selected if the team has: (i) no girls (ii) at least one boy and one girl (iii) at least three girls?",
            "explain": "The problem asks us to determine the number of ways to form a 5-member team under different conditions from a group of 4 girls and 7 boys.<br><br>Given:<br>- Number of girls = 4<br>- Number of boys = 7<br><br><b>(i) No girls</b><br>Total number of ways the team can have no girls is selecting 5 boys from 7:<br><b>7C5 = 21</b><br><br><b>(ii) At least one boy and one girl</b><br>This condition requires combinations of both boys and girls:<br><br>- 1 boy and 4 girls: <b>7C1 × 4C4 = 7 × 1 = 7</b><br>- 2 boys and 3 girls: <b>7C2 × 4C3 = 21 × 4 = 84</b><br>- 3 boys and 2 girls: <b>7C3 × 4C2 = 35 × 6 = 210</b><br>- 4 boys and 1 girl: <b>7C4 × 4C1 = 35 × 4 = 140</b><br><br>Total number of ways = 7 + 84 + 210 + 140 = <b>441</b><br><br><b>(iii) At least three girls</b><br>This condition requires selecting 3 or more girls:<br><br>- 3 girls and 2 boys: <b>4C3 × 7C2 = 4 × 21 = 84</b><br>- 4 girls and 1 boy: <b>4C4 × 7C1 = 1 × 7 = 7</b><br><br>Total number of ways = 84 + 7 = <b>91</b>",
            "options": [
              "(i) 21, (ii) 441, (iii) 91",
              "(i) 15, (ii) 450, (iii) 92",
              "(i) 21, (ii) 440, (iii) 90",
              "(i) 20, (ii) 441, (iii) 91"
            ],
            "correct": "(i) 21, (ii) 441, (iii) 91"
          },
          {
            "question": "How many numbers greater than 1000000 can be formed using the digits 1, 2, 0, 2, 4, 2, 4?",
            "explain": "We need to determine how many numbers greater than 1000000 can be formed from the digits 1, 2, 0, 2, 4, 2, 4.<br><br>The number has 7 digits in total. Since the number must be greater than 1000000, the first digit can be 1, 2, or 4.<br><br><b>Case 1: First digit is 1</b><br>If 1 is fixed in the first position, the remaining digits to be rearranged are 0, 2, 2, 2, 4, 4. The number of distinct arrangements is:<br><br><b>6! / (3! × 2!) = (6 × 5 × 4 × 3!) / (3! × 2) = 60</b><br><br><b>Case 2: First digit is 2</b><br>If 2 is fixed in the first position, the remaining digits to be rearranged are 0, 2, 4, 2, 4, 1. The number of distinct arrangements is:<br><br><b>6! / (2! × 2!) = 720 / 4 = 180</b><br><br><b>Case 3: First digit is 4</b><br>If 4 is fixed in the first position, the remaining digits to be rearranged are 0, 2, 2, 2, 4, 1. The number of distinct arrangements is:<br><br><b>6! / 3! = 720 / 6 = 120</b><br><br><b>Total:</b><br>The total number of numbers greater than 1000000 is:<br><br><b>60 + 180 + 120 = 360</b>",
            "options": [
              "360",
              "300",
              "400",
              "450"
            ],
            "correct": "360"
          },

          

    ];

    const subjective = [
      {
        "no": "1",
        "question": "<b><u> Formulas : </u></b>",
        "answer": "Here are the essential formulas for permutations and combinations:<br><br><b>Permutations of n objects taken r at a time (without repetition):</b><br> P(n, r) = <b>n!</b> / <b>(n - r)!</b><br><br><b>Permutations of n objects taken r at a time (with repetition):</b><br> P'(n, r) = <b>n<sup>r</sup></b><br><br><b>Combinations of n objects taken r at a time (without repetition):</b><br> C(n, r) = <b>n!</b> / <b>(r!(n - r)!)</b><br><br><b>Combinations of n objects taken r at a time (with repetition):</b><br> C'(n + r - 1, r) = <b>(n + r - 1)!</b> / <b>(r!(n - 1)!)</b><br><br><b>Permutations of n objects with repetition of some objects:</b><br> P(n; n1, n2, ..., nk) = <b>n!</b> / <b>(n1! n2! ... nk!)</b><br><br><b>Combinations with at least one object of each type:</b><br> For k types and r objects: C(n - 1, k - 1) where n is the number of objects and k is the number of types.<br><br>These formulas cover a range of scenarios in permutations and combinations that are typically studied in Class 12."
      }
    ];

  return (
    <div>
      <QuestDisplay title = "Maths - Permutation and Combination" question = {questionArray} subjective = {subjective} sub = "Maths" />
    </div>
  )
}

export default PermutationCombination
