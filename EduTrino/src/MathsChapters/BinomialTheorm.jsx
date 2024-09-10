import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const BinomialTheorm = () => {

        const questionArray = [
            {
                "question": "Find the value of r if the coefficients of (r – 5)th and (2r – 1)th terms in the expansion of (1 + x)<sup>34</sup> are equal.",
                "explain": "For the given condition, the coefficients of the (r – 5)th and (2r – 1)th terms of the expansion of (1 + x)<sup>34</sup> are <b>34C(r – 6)</b> and <b>34C(2r – 2)</b> respectively.<br><br>Since the coefficients are equal:<br><br><b>34C(r – 6) = 34C(2r – 2)</b><br><br>This gives two possible equations:<br><b>r – 6 = 2r – 2</b> (or) <b>r – 6 = 34 – (2r – 2)</b> (We know that if nCr = nCp, then either r = p or r = n – p)<br><br>Solving the first equation:<br><b>r – 6 = 2r – 2<br>r = –4</b><br><br>Solving the second equation:<br><b>r – 6 = 34 – 2r + 2<br>3r = 30<br>r = 14</b><br><br>Since r must be a natural number, r = –4 is not valid.<br><br>Therefore, the value of r is <b>14</b>.",
                "options": [
                  "14",
                  "–4",
                  "10",
                  "12"
                ],
                "correct": "14"
              },
              {
                "question": "What is the coefficient of the middle term in the expansion of (2 + 3x)<sup>4</sup>?",
                "explain": "If the exponent of the expression is n, then the total number of terms is n + 1.<br><br>Here, n = 4, so the total number of terms in the expansion is 4 + 1 = 5.<br><br>The middle term is the 3rd term.<br><br>We know the general term in the expansion of (a + bx)<sup>n</sup> is:<br><b>T<sub>r+1</sub> = nCr a<sup>n-r</sup> (bx)<sup>r</sup></b><br><br>In this case:<br><b>n = 4, r = 2, a = 2, b = 3x</b><br><br>The middle term is the 3rd term, so:<br><b>T<sub>3</sub> = 4C2 × (2)<sup>4-2</sup> × (3x)<sup>2</sup></b><br><br>Calculating this:<br><b>4C2 = 6<br>2<sup>2</sup> = 4<br>(3x)<sup>2</sup> = 9x<sup>2</sup></b><br><br>So:<br><b>T<sub>3</sub> = 6 × 4 × 9x<sup>2</sup> = 216x<sup>2</sup></b><br><br>Thus, the coefficient of the middle term is <b>216</b>.",
                "options": [
                  "5!",
                  "6",
                  "216",
                  "8!"
                ],
                "correct": "216"
              },
              {
                "question": "What is the largest coefficient in the expansion of (1 + x)<sup>10</sup>?",
                "explain": "Given: (1 + x)<sup>10</sup><br><br>The largest coefficient will occur in the middle term of the expansion.<br><br>The total number of terms in the expansion is n + 1, where n is the exponent. Here, n = 10, so there are 11 terms.<br><br>The middle term is the [(n/2) + 1]th term.<br><br>So, middle term = [(10/2) + 1] = 6th term.<br><br>We know the general term in the expansion of (a + bx)<sup>n</sup> is:<br><b>T<sub>r+1</sub> = nCr a<sup>n-r</sup> (bx)<sup>r</sup></b><br><br>Here, n = 10, r = 5.<br><br>The 6th term is:<br><b>T<sub>6</sub> = 10C5 × x<sup>5</sup></b><br><br>The coefficient of this term is:<br><b>10C5 = 10! / (5!)<sup>2</sup></b><br><br>Therefore, the largest coefficient is <b>10! / (5!)<sup>2</sup></b>.<br><br>Thus, option (a) is the correct answer.",
                "options": [
                  "10! / (5!)<sup>2</sup>",
                  "10! / 5!",
                  "10! / (5! × 4!)<sup>2</sup>",
                  "10! / (5! × 4!)"
                ],
                "correct": "10! / (5!)<sup>2</sup>"
              },
              {
                "question": "What is the value of n, if the coefficient of the second term of (x – y)<sup>3</sup> is equal to the third term of the expansion (x + y)<sup>n</sup>?",
                "explain": "The coefficient of the second term of (x – y)<sup>3</sup> is 3C1, and the coefficient of the third term of the expansion (x + y)<sup>n</sup> is nC2.<br><br>According to the problem, 3C1 = nC2.<br><br>We know that:<br><b>3C1 = 3</b> and <b>nC2 = n(n – 1)/2</b>.<br><br>Equating the two gives:<br><br>3 = n(n – 1)/2<br>6 = n<sup>2</sup> – n<br>n<sup>2</sup> – n – 6 = 0<br><br>Solving this quadratic equation:<br>(n – 3)(n + 2) = 0<br><br>So, n = 3 or n = –2.<br><br>Since n cannot be negative, n = 3.<br><br>Thus, the correct value of n is <b>3</b>.",
                "options": [
                  "-2",
                  "3",
                  "4",
                  "5"
                ],
                "correct": "3"
              },
              
        ];

        const subjective = [

        ];

  return (
    <div>
          <QuestDisplay title = "Maths - Binomial Theorem" question = {questionArray} subjective = {subjective} sub = "Maths" />
  
    </div>
  )
}

export default BinomialTheorm
