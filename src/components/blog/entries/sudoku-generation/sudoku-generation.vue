<template>
    <BlogEntry
        :date="date"
        description="TODO"
        duration="TODO"
        :entry="entry"
        :isRenderedFromList="isRenderedFromList"
        :allTags="allTags"
        :tags="[tags.Dissemination]"
        :title="title"
    >
        <p>My mother has always been a fervent newspaper reader and she is in the habit of solving the puzzles that come in the last pages. Between those puzzles you can always find a game called sudoku. Two actually; a reasonably difficult one and an evil one. So mom was in the middle of filling the first sudoku when I came asking her for something. I don't remember what that question was now, but I do remember that we talked about sudoku and it was the difference between the two sudoku levels that caught my attention.</p>
        <div v-if="!isRenderedFromList">
            <p>
                Quick recap.
                <a href="https://en.wikipedia.org/wiki/Sudoku" target="_blank">Sudoku</a> consists of a square grid (usually 9x9 boxes) in which each box must be filled with a digit from 1 to 9, making sure that each row, column and squared region contains all the digits from 1 to 9 and has no repeated numbers. An example is worth more than a thousand words:
            </p>

            <div class="screen-splitter">
                <div>
                    <Sudoku
                        :size="9"
                        :values="[[5,3,' ', ' ', 7], [6, ' ', ' ', 1, 9, 5],[' ',9,8, ' ', ' ', ' ', ' ',6],[8, ' ', ' ', ' ',6, ' ', ' ', ' ',3],[4, ' ', ' ',8, ' ', 3, ' ', ' ',1], [7, ' ', ' ', ' ',2, ' ', ' ', ' ',6],[ ' ',6, ' ', ' ', ' ', ' ',2,8],[ ' ', ' ', ' ',4,1,9, ' ', ' ',5],[ ' ', ' ', ' ', ' ',8, ' ', ' ',7,9]]"
                    />
                    <p class="text-center">Sudoku example</p>
                </div>
                <div>
                    <Sudoku
                        :size="9"
                        :values="[[{number: 5, isHighlighted: true}, {number: 3, isHighlighted: true}, 4, 6, {number: 7, isHighlighted: true}, 8, 9, 1, 2], [{number: 6, isHighlighted: true}, 7, 2, {number: 1, isHighlighted: true}, {number: 9, isHighlighted: true}, {number: 5, isHighlighted: true}, 3, 4, 8],[1, {number: 9, isHighlighted: true}, {number: 8, isHighlighted: true}, 3, 4, 2, 5, {number: 6, isHighlighted: true}, 7],[{number: 8, isHighlighted: true}, 5, 9, 7, {number: 6, isHighlighted: true}, 1, 4, 2, {number: 3, isHighlighted: true}],[{number: 4, isHighlighted: true}, 2, 6, {number: 8, isHighlighted: true}, 5, {number: 3, isHighlighted: true}, 7, 9, {number: 1, isHighlighted: true}], [{number: 7, isHighlighted: true}, 1, 3, 9, {number: 2, isHighlighted: true}, 4, 8, 5,{number: 6, isHighlighted: true}],[9, {number: 6, isHighlighted: true}, 1, 5, 3, 7, {number: 2, isHighlighted: true}, {number: 8, isHighlighted: true}, 4],[2, 8, 7, {number: 4, isHighlighted: true}, {number: 1, isHighlighted: true}, {number: 9, isHighlighted: true}, 6, 3, {number: 5, isHighlighted: true}],[ 3, 4, 5, 2, {number: 8, isHighlighted: true}, 6, 1, {number: 7, isHighlighted: true}, {number: 9, isHighlighted: true}]]"
                    />
                    <p class="text-center">Sudoku solution</p>
                </div>
            </div>

            <p>
                In the particular newspaper my mom was reading that day, the easy sudokdu had 28 filled boxes out of the 81 total whereas the difficult sudoku had 29 filled boxes.
                <b>How come the more difficult puzzle had more filled boxes!?</b>. Or, in other words, isn't the difficulty of a sudoku based on the number of empty boxes? At least, that was the feeling I had back then. The truth is that I had never taken the time to think about how sudoku works. I had solved a few of them sure, but I had never tried to figure out how to prepare one.
            </p>
            <p>
                <b>Usually I would have thought about it for a while</b>, realize it is a mathematically complex task, conclude that the amount of spare time required to find a solution was much bigger than the curiosity I had on the subject
                <b>and finallly gave up</b>. I would have run into something else and happily forget about my ignorance on the matter.
                <b>Something went different on this occasion however</b>. Let me give you a bit of context before proceeding.
            </p>
            <p>At the time of writing, the world was being locked down due to the COVID-19. It was a measure that all countries had to adopt at some point of time. In Spain, the lockdown started March 15th and it was supposed to last at least for one month. This situation conflicted heavily with the plans I had back then. Before the pandemic started I had planned to go living abroad. Australia specifically. I had been granted a Visa back in January, so I had later applied for a sabbatical leave in my company and had moved back to my parents house in a attempt to save some money.</p>
            <p>
                According to my plan, my outbound flight was supposed to depart March 31st but, because of obvious reasons, the flight got cancelled. No one had any idea about when the borders would be reopened so my aussie adventure starting date became very uncertain and I accepted I would have to wait to reschedule my flight. I didn't get angry but
                <b>I found myself unemployed and locked at my parents home</b>. So, provided with the biggest amount of free hours I had ever had in my life, I decided to investigate the sudoku generation subject for a while.
            </p>

            <h5 class="attempt">First attempt: clear boxes in a full grid</h5>

            <p>
                An important property of a well-composed sudoku is that it has a single solution. It might sound obvious, but depending on how the numbers are placed, there can be multiple valid combinations that solve the puzzle. The most famous example was the sudoku that UK Sky TV draw in a hillside offering a £5000 prize; it turned out to have
                <a
                    href="https://www.sudokuwiki.org/Sudoku_Creation_and_Grading.pdf"
                    target="_blank"
                >1905 possible solutions</a>.
            </p>
            <p class="text-center">
                <img
                    :src="`${images.skyTvHillside}?$modena=vue-personal-page`"
                    alt="Sky TV hillside sudoku"
                />
            </p>
            <p>
                So, to avoid the mistakes of the british company, my first attempt consisted in randomly filling a grid with all the numbers (i.e. to make sure the puzzle had a single solution) and, from there on, randomly boxes until the sudoku was challenging enough. I did write the
                <a
                    href="https://github.com/L3bowski/sudoku-generation/blob/master/attempt-1.js"
                    target="_blank"
                >algorithm to fill the grid</a> to later discover two issues.
            </p>
            <p>First, clearing the boxes randomly was not an option since I could have ended up generating multiple solutions sudokus. Second, when could I tell that the sudoku was challenging enough? This is what happens when you start coding without really thinking on what you are trying to do ✌️.</p>
            <div class="screen-splitter">
                <div>
                    <Sudoku
                        :size="9"
                        :values="[[' ', 3, ' ', ' ', ' ', ' ', ' ', 1, 2], [' ', ' ', 2, 1, ' ', ' ', 3, ' ', ' '],[1, ' ', ' ', 3, ' ', 2, ' ', ' ', ' '],[' ', ' ', ' ', ' ', ' ', 1, ' ', 2, 3],[' ', 2, ' ', ' ', ' ', 3, ' ', ' ', 1], [' ', 1, 3, ' ', 2, ' ', ' ', ' ', ' '],[' ', ' ', 1, ' ', 3, ' ', 2, ' ', ' '],[2, ' ', ' ', ' ', 1, ' ', ' ', 3, ' '],[ 3, ' ', ' ', 2, ' ', ' ', 1, ' ', ' ']]"
                    />
                    <p class="text-center">Multiple solutions sudoku</p>
                </div>
                <div>
                    <Sudoku
                        :size="9"
                        :values="[[5, 3, 4, 6, 7, 8, 9, ' ', 2], [6, 7, ' ', 1, 9, 5, 3, 4, 8],[1, 9, 8, ' ', 4, 2, 5, 6, 7],[8, 5, 9, 7, 6, 1, ' ', 2, 3],[4, 2, 6, 8, ' ', 3, 7, 9, 1], [7, 1, 3, 9, 2, 4, 8, 5, ' '],[9, 6, 1, 5, 3, ' ', 2, 8, 4],[2, ' ', 7, 4, 1, 9, 6, 3, 5],[ 3, 4, 5, 2, 8, 6, 1, 7, ' ']]"
                    />
                    <p class="text-center">Not very challenging sudoku</p>
                </div>
            </div>

            <h5 class="attempt">Second attempt: filling random boxes with random candidates</h5>

            <p>
                Rather than fixing the first attempt issues, I decided to go the other way around. Starting with an empty grid, fill random boxes with random valid possible numbers (from now on, I will call possible numbers
                <b>candidates</b>) until there is a box which has a single candidate. Again, I didn't think too much about it. I just wanted to quickly check how feasible this approach was.
            </p>
            <p>
                This
                <a
                    href="https://github.com/L3bowski/sudoku-generation/blob/master/attempt-2.js"
                    target="_blank"
                >second alogrithm</a> works better (i.e. generates solvable unique solution puzzles sometimes) but still presents an issue. I assumed that once there is a box with a single candidate, filling that box will eliminate candidates in other boxes and lead to at least another box having a single candidate (the so called domino effect). This was assuming too much however. Sometimes filling that single candidate box is not leaving a single candidate in any other box. From now on, I will call
                <b>inferable</b> a box with a single candidate. For the sake of simplicity, the following examples are in a 4x4 grid fashion:
            </p>
            <div class="screen-splitter">
                <div>
                    <Sudoku :size="4" :values="[[], [2], [3, ' ', 2], [' ', 2, ' ', 4]]" />
                    <p class="text-center">Valid generated sudoku</p>
                </div>
                <div>
                    <Sudoku :size="4" :values="[[], [' ',' ',' ',3],[' ',2,4]]" />
                    <p class="text-center">Multiple solution generated sudoku</p>
                </div>
            </div>
            <p>Looks like I am on the right track! However, picking random boxes is a bit risky. I had decided to pick random boxes because I was lazy to come up with a better strategy. It was time to pick paper and pencil and think of a better box picking strategy.</p>

            <h5 class="attempt">Third attempt: searching for the right box and number</h5>

            <p>To come up with a good box picking strategy, I first needed to understand how setting a number in a box effects the other boxes. Here is where logic comes into play. According the sudoku rules, every time a number is assigned to a box, that number can no longer be placed in another box in the same column, row or region. Visually it looks like this (I will use 4x4 grids because it's simpler to understand and the concepts work the same in 9x9 grids):</p>
            <div class="screen-splitter">
                <div>
                    <Sudoku :size="4" :values="[[], [], [2], []]" />
                    <p class="text-center">First filled box</p>
                </div>
                <div>
                    <Sudoku
                        :size="4"
                        :values="[[{number:'≠2', isHighlighted: true}], [{number:'≠2', isHighlighted: true}], [2, {number:'≠2', isHighlighted: true}, {number:'≠2', isHighlighted: true}, {number:'≠2', isHighlighted: true}], [{number:'≠2', isHighlighted: true}, {number:'≠2', isHighlighted: true}]]"
                    />
                    <p class="text-center">Other affected boxes</p>
                </div>
            </div>
            <p>
                So, setting the number
                2 in the first box of the third row eliminates the
                candidate
                2 on other seven boxes. From now, and just to give it a catchy name, I will call box
                <b>impact</b> the number of other boxes in which a candidate is removed by setting a number in the given box. Also, I will call
                <b>lock</b> the action of setting a number in a box. Next let's try to lock another box. With the random strategy I was using before, the chosen box could have been the second of the third row and the chosen candidate could have been any one other than
                2. Let's call it lock A:
            </p>
            <div class="screen-splitter">
                <div>
                    <Sudoku :size="4" :values="[[], [], [2, 3], []]" />
                    <p class="text-center">Second filled box</p>
                </div>
                <div>
                    <Sudoku
                        :size="4"
                        :values="[[' ', {number:'≠3', isHighlighted: true}], ['', {number:'≠3', isHighlighted: true}], [2, 3, {number:'≠3', isHighlighted: true}, {number:'≠3', isHighlighted: true}], [{number:'≠3', isHighlighted: true}, {number:'≠3', isHighlighted: true}]]"
                    />
                    <p class="text-center">Other affected boxes</p>
                </div>
            </div>
            <p>The impact of the lock A is 6. Just to understand how each box will have a different impact, let's assume now that the random box that was chosen in the second lock would have been the second box of the first row. Let's call it lock B:</p>
            <div class="screen-splitter">
                <div>
                    <Sudoku :size="4" :values="[[' ', 3], [], [2], []]" />
                    <p class="text-center">Second filled box</p>
                </div>
                <div>
                    <Sudoku
                        :size="4"
                        :values="[[{number:'≠3', isHighlighted: true}, 3, {number:'≠3', isHighlighted: true}, {number:'≠3', isHighlighted: true}], [{number:'≠3', isHighlighted: true}, {number:'≠3', isHighlighted: true}], [2, {number:'≠3', isHighlighted: true}], [' ', {number:'≠3', isHighlighted: true}]]"
                    />
                    <p class="text-center">Other affected boxes</p>
                </div>
            </div>
            <p>Would it had been the case, the impact of the second lock would have been 7 instead of 6. Intuitively it makes sense because lock B happens in a different row, column and region than the first lock whereas lock A is in the same row and region as the first lock. Lock A gives more information for specific parts of the puzzle while lock B gives more information about the entire puzzle.</p>
            <p>So, definitely, the impact of a lock depends on the location of the box in reference to the already filled boxes. Ok, so I had just learned which boxes to pick. But what about the box number? Still I was randomly chosing any of the box candidates. To get a feeling for the role that numbers play here, let's assume that the random candidate for the second lock would have been the same number as the one in the first lock. Let's call this possible second lock C:</p>
            <div class="screen-splitter">
                <div>
                    <Sudoku :size="4" :values="[[' ', 2], [], [2], []]" />
                    <p class="text-center">Second filled box</p>
                </div>
                <div>
                    <Sudoku
                        :size="4"
                        :values="[[{number:'≠2', isHighlighted: true}, 2, {number:'≠2', isHighlighted: true}, {number:'≠2', isHighlighted: true}], [{number:'≠2', isHighlighted: true}, {number:'≠2', isHighlighted: true}], [2, {number:'≠2', isHighlighted: true}], [' ', {number:'≠2', isHighlighted: true}]]"
                    />
                    <p class="text-center">Other affected boxes</p>
                </div>
            </div>
            <p>Apparently the impact of the lock C is 7 too. Paying closer attention however, I realized that candidate 2 had already been removed from a series of boxes in the first lock. So, the real impact of the lock C is the number of boxes where 2 was still a candidate and from which 2 is being effectively removed. This means the impact of lock C is actually 3:</p>
            <div class="screen-splitter">
                <div>
                    <Sudoku
                        :size="4"
                        :values="[[{number: '≠2', isHighlighted: true}], [{number: '≠2', isHighlighted: true}], [2, {number: '≠2', isHighlighted: true}, {number: '≠2', isHighlighted: true}, {number: '≠2', isHighlighted: true}], [{number: '≠2', isHighlighted: true}, {number: '≠2', isHighlighted: true}]]"
                    />
                    <p class="text-center">Total removed candidates in first lock</p>
                </div>
                <div>
                    <Sudoku
                        :size="4"
                        :values="[['≠2', 2, {number:'≠2', isHighlighted: true}, {number:'≠2', isHighlighted: true}], ['≠2', {number:'≠2', isHighlighted: true}], [2, '≠2', '≠2', '≠2'], ['≠2', '≠2']]"
                    />
                    <p class="text-center">Total removed candidates in second lock</p>
                </div>
            </div>
            <p>
                So, looked like I had run into something useful! I used these two observations to implement the
                <a
                    href="https://github.com/L3bowski/sudoku-generation/blob/master/attempt-3.js"
                    target="_blank"
                >third version of the algorithm</a>. In short, the algorithm selects the box and number that eliminates the bigger number of candidates from other boxes. By following this strategy each box candidates set is reduced more and more with each lock in a balanced manner (meaning that all boxes will have a similar number of candidates at any point of time).
            </p>
            <p>
                The algorithm is doing great while there are boxes with multiple candidates but it always ends up generating unsolvable sudoku puzzles (i.e. puzzles for which there is no valid combination that solves them). This happens because the algorithm looks for boxes with the highest impact which, at practice, are also the boxes with the biggest number of candidates. Therefore,
                <b>non locked boxes with a single candidate are not considered by the algorithm</b>. Example of a bad selection after the forth lock in a 4x4 grid:
            </p>
            <div class="screen-splitter">
                <div>
                    <Sudoku :size="4" :values="[[' ', 3], [' ', ' ', ' ', 2], [1], [' ', ' ', 4]]" />
                    <p class="text-center">Valid sudoku after locking the forth box</p>
                </div>
                <div>
                    <Sudoku
                        :size="4"
                        :values="[[' ', 3], [' ', ' ', ' ', 2], [1], [2, {number: '?', isHighlighted: true}, 4]]"
                    />
                    <p class="text-center">Unvalid sudoku after locking the fifth box</p>
                </div>
            </div>
            <p>I could control this problem by carefully setting the number of boxes to be filled and stop the algorithm from keep choosing boxes before it gets out of control. However, and in order to have a better control over the difficulty of the generated puzzle, I believe the algorithm should be able to fill the entire grid if requested. This takes us to another attempt!</p>

            <h5 class="attempt">Forth attempt: considering inferable boxes</h5>

            <p>An inferable box is a non locked box which has a single candidate (i.e, a box that players will be able to fill). A box becomes inferable when, having only two candidates left, one of the box candidates is locked in another box of the same row, column or region (which will cause that candidate to be removed from the given box). Sounds tricky but it is visually easier than it sounds. Assuming the following second and third locks for a given sudoku:</p>
            <div class="screen-splitter">
                <div>
                    <Sudoku :size="4" :values="[[' ', ' ', ' ', 4], [' ',  2]]" />
                    <p class="text-center">Sudoku with two locks</p>
                </div>
                <div>
                    <Sudoku :size="4" :values="[[' ', ' ', ' ', 4], [' ',  2], [' ', ' ', 1]]" />
                    <p class="text-center">Sudoku with three locks</p>
                </div>
            </div>
            <p>the total eliminated candidates of the respective locks are</p>
            <div class="screen-splitter">
                <div>
                    <Sudoku
                        :size="4"
                        :values="[['≠2,4', '≠2,4', '≠4', 4], ['≠2',  2, '≠2,4', '≠2,4'], [' ', '≠2', ' ', '≠4'], [' ', '≠2', ' ', '≠4']]"
                    />
                    <p class="text-center">Eliminated candidates with two locks</p>
                </div>
                <div>
                    <Sudoku
                        :size="4"
                        :values="[['≠2,4', '≠2,4', {number:'≠1,4', isHighlighted: true}, 4], ['≠2',  2, {number:'≠1,2,4', isHighlighted: true}, '≠2,4'], [{number:'≠1', isHighlighted: true}, {number:'≠1,2', isHighlighted: true}, 1, {number:'≠1,4', isHighlighted: true}], [' ', '≠2', {number:'≠1', isHighlighted: true}, {number:'≠1,4', isHighlighted: true}]]"
                    />
                    <p class="text-center">Eliminated candidates with three locks</p>
                </div>
            </div>
            <p>The next step is easier to understand if we consider the candidates that are still valid for each box instead of the eliminated ones. Let's rewrite the same sudoku using equality (=, numbers which can be locked in the box) instead of inequality (≠, numbers wich cannot be locked in the box):</p>
            <div class="screen-splitter">
                <div>
                    <Sudoku
                        :size="4"
                        :values="[['=1,3', '=1,3', '=1,2,3', 4], ['=1,3,4',  2, '=1,3', '=1,3'], [' ', '=1,3,4', ' ', '=1,2,3'], [' ', '=1,3,4', ' ', '=1,2,3']]"
                    />
                    <p class="text-center">Left candidates with two locks</p>
                </div>
                <div>
                    <Sudoku
                        :size="4"
                        :values="[['=1,3', '=1,3', {number:'=2,3', isHighlighted: true}, 4], ['=1,3,4',  2, {number:'=3', isHighlighted: true}, '=1,3'], [{number:'=2,3,4', isHighlighted: true}, {number:'=3,4', isHighlighted: true}, 1, {number:'=2,3', isHighlighted: true}], [' ', '=1,3,4', {number: '=2,3,4', isHighlighted: true}, {number: '=2,3', isHighlighted: true}]]"
                    />
                    <p class="text-center">Left candidates with three locks</p>
                </div>
            </div>
            <p>
                As it can be seen above, locking number 1 in the third box of the third row leaves a single candidate in
                the third box of the second row. According to the names I'm using, the third box of the second row is now
                <b>inferable</b>. On one hand, this means that locking any other number in the box will make the sudoku impossible to solve. On the other side, and this is the interesting part, it also means that number 3 is no longer a candidate in any other box in the same row, column or region as the inferable box 🤘 Let's eliminate the candidate 3 from the corresponding boxes:
            </p>
            <div>
                <Sudoku
                    :size="4"
                    :values="[['=1,3', '=1,3', {number: '=2', isHighlighted: true}, 4], [{number:'=1,4', isHighlighted: true},  2, '=3', {number: '=1', isHighlighted: true}], ['=2,3,4', '=3,4', 1, '=2,3'], [' ', '=1,3,4', {number:'=2,4', isHighlighted: true}, '=2,3']]"
                />
                <p class="text-center"></p>
            </div>
            <p>It's my lucky day! By removing the candidate 3 from the applicable boxes, two more boxes became inferable: the third of the first row and the forth of the second row. Let's continue removing candidates from related boxes:</p>
            <div class="screen-splitter">
                <div>
                    <Sudoku
                        :size="4"
                        :values="[['=1,3', '=1,3', '=2', 4], ['=1,4',  2, '=3', '=1'], ['=2,3,4', '=3,4', 1, '=2,3'], [' ', '=1,3,4', {number:'=4', isHighlighted: true}, '=2,3']]"
                    />
                    <p class="text-center">Removed candidate 2 from applicable boxes</p>
                </div>
                <div>
                    <Sudoku
                        :size="4"
                        :values="[['=1,3', '=1,3', '=2', 4], [{number:'=4', isHighlighted: true},  2, '=3', '=1'], ['=2,3,4', '=3,4', 1, '=2,3'], [' ', '=1,3,4', '=4', '=2,3']]"
                    />
                    <p class="text-center">Removed candidate 1 from applicable boxes</p>
                </div>
            </div>
            <p>
                This process can go on as long as new boxes become
                <b>inferable</b>. When no more boxes become inferable can be either because all the boxes in the sudoku are inferable (which means the sudoku is ready for players to solve it) or because the locked boxes do not restrict enough the candidates of all the empty boxes of the sudoku (which means that the algorithm needs to lock at least another box if we want it to have a single solution). In a 4x4 grid, three locks are never enough to infer all the boxes. It takes at least one more lock to make it possible:
            </p>
            <div class="screen-splitter">
                <div>
                    <Sudoku :size="4" :values="[[' ', ' ', ' ', 4], [' ',  2], [' ', ' ', 1]]" />
                    <p class="text-center">Sudoku with three locks</p>
                </div>
                <div>
                    <Sudoku
                        :size="4"
                        :values="[[' ', ' ', {number:'=2', isHighlighted: true}, 4], [{number:'=4', isHighlighted: true},  2, {number:'=3', isHighlighted: true}, {number:'=1', isHighlighted: true}], [' ', ' ', 1], [' ', ' ', {number:'=4', isHighlighted: true}]]"
                    />
                    <p class="text-center">Inferred boxes with three locks</p>
                </div>
            </div>
            <div class="screen-splitter">
                <div>
                    <Sudoku
                        :size="4"
                        :values="[[' ', ' ', ' ', 4], [' ',  2], [' ', ' ', 1], [3]]"
                    />
                    <p class="text-center">Sudoku with four locks</p>
                </div>
                <div>
                    <Sudoku
                        :size="4"
                        :values="[[{number:'=1', isHighlighted: true}, {number:'=3', isHighlighted: true}, {number:'=2', isHighlighted: true}, 4], [{number:'=4', isHighlighted: true},  2, {number:'=3', isHighlighted: true}, {number:'=1', isHighlighted: true}], [{number:'=2', isHighlighted: true}, {number:'=4', isHighlighted: true}, 1, {number:'=3', isHighlighted: true}], [3, {number:'=1', isHighlighted: true}, {number:'=4', isHighlighted: true}, {number:'=2', isHighlighted: true}]]"
                    />
                    <p class="text-center">Inferred boxes with four locks</p>
                </div>
            </div>
            <p>In fact, what the algorithm is doing with this strategy is actually trying to solve the sudoku in the same way a player would do. In the moment that all the non locked boxes are inferable, sudoku players can complete it; there is no need to keep locking boxes and the master piece sudoku is finished. Glory sweet glory! A new algorithm is born 😎... isn't it?</p>
            <p>Unfortunately, the algorithm fails to generate 9x9 grids. The problem comes from the maximum impact strategy, which does not work that well when it has to deal with 9 potential candidates for each box. At some point the candidate with greater impact for a given box turns to block out a number from that box row, column or region. Let's have a look at the following sudoku with 21 locks:</p>
            <div class="screen-splitter">
                <div>
                    <Sudoku
                        :size="9"
                        :values="[ [ '4', ' ', '1', ' ', ' ', ' ', ' ', ' ', ' ' ],
                            [ ' ', ' ', ' ', ' ', ' ', ' ', '7', '3', ' ' ],
                            [ ' ', ' ', ' ', '5', '2', ' ', '8', ' ', ' ' ],
                            [ '8', ' ', '7', ' ', ' ', '4', ' ', ' ', ' ' ],
                            [ ' ', ' ', ' ', ' ', ' ', '6', '5', ' ', '2' ],
                            [ ' ', ' ', ' ', ' ', ' ', '1', ' ', ' ', '9' ],
                            [ ' ', '5', ' ', ' ', '8', ' ', ' ', ' ', ' ' ],
                            [ ' ', ' ', ' ', '3', ' ', ' ', ' ', '6', ' ' ],
                            [ ' ', '9', ' ', ' ', ' ', ' ', ' ', '4', ' ' ] ]
                        "
                    />
                    <p class="text-center">Sudoku with 21 locked boxes</p>
                </div>
                <div>
                    <Sudoku
                        :size="9"
                        :values="[ [ '4', ' ', '1', ' ', ' ', ' ', ' ', ' ', ' ' ],
                            [ {number: '=2,5,6,9', isHighlighted: true}, ' ', ' ', ' ', ' ', ' ', '7', '3', ' ' ],
                            [ {number: '=3,6,7', isHighlighted: true}, {number: '=3,6,7', isHighlighted: true}, {number: '=3,6', isHighlighted: true}, '5', '2', {number: '=3,7', isHighlighted: true}, '8', {number: '=9', isHighlighted: true}, {number: '=1,4,6', isHighlighted: true} ],
                            [ {number: '8', isHighlighted: true}, ' ', '7', ' ', ' ', '4', ' ', ' ', ' ' ],
                            [ {number: '=1,3,9', isHighlighted: true}, ' ', ' ', ' ', ' ', '6', '5', ' ', '2' ],
                            [ {number: '=2,3,5,6', isHighlighted: true}, ' ', ' ', ' ', ' ', '1', ' ', ' ', '9' ],
                            [ {number: '=1,2,3,6,7', isHighlighted: true}, '5', ' ', ' ', '8', ' ', ' ', ' ', ' ' ],
                            [ {number: '=1,2,7', isHighlighted: true}, ' ', ' ', '3', ' ', ' ', ' ', '6', ' ' ],
                            [ {number: '=1,2,3,6,7', isHighlighted: true}, '9', ' ', ' ', ' ', ' ', ' ', '4', ' ' ] ]
                        "
                    />
                    <p class="text-center">Some candidates for the previous sudoku</p>
                </div>
            </div>
            <p>Next, the algorithm will randomly chose a box and number with the greatest impact. One of the boxes with greater impact is the first of the second row and the number happens to be 6. This is what the sudoku will look like after locking the box and before trying to infer other boxes:</p>
            <div class="screen-splitter">
                <div>
                    <Sudoku
                        :size="9"
                        :values="[ [ '4', ' ', '1', ' ', ' ', ' ', ' ', ' ', ' ' ],
                            [ '6', ' ', ' ', ' ', ' ', ' ', '7', '3', ' ' ],
                            [ ' ', ' ', ' ', '5', '2', ' ', '8', ' ', ' ' ],
                            [ '8', ' ', '7', ' ', ' ', '4', ' ', ' ', ' ' ],
                            [ ' ', ' ', ' ', ' ', ' ', '6', '5', ' ', '2' ],
                            [ ' ', ' ', ' ', ' ', ' ', '1', ' ', ' ', '9' ],
                            [ ' ', '5', ' ', ' ', '8', ' ', ' ', ' ', ' ' ],
                            [ ' ', ' ', ' ', '3', ' ', ' ', ' ', '6', ' ' ],
                            [ ' ', '9', ' ', ' ', ' ', ' ', ' ', '4', ' ' ] ]
                        "
                    />
                    <p class="text-center">Sudoku with 22 locked boxes</p>
                </div>
                <div>
                    <Sudoku
                        :size="9"
                        :values="[ [ '4', ' ', '1', ' ', ' ', ' ', ' ', ' ', ' ' ],
                            [ '6', ' ', ' ', ' ', ' ', ' ', '7', '3', ' ' ],
                            [ {number: '=3,7', isHighlighted: true}, {number: '=3,7', isHighlighted: true}, {number: '=3', isHighlighted: true}, '5', '2', {number: '=3,7', isHighlighted: true}, '8', {number: '=9', isHighlighted: true}, {number: '=1,4,6', isHighlighted: true} ],
                            [ {number: '8', isHighlighted: true}, ' ', '7', ' ', ' ', '4', ' ', ' ', ' ' ],
                            [ {number: '=1,3,9', isHighlighted: true}, ' ', ' ', ' ', ' ', '6', '5', ' ', '2' ],
                            [ {number: '=2,3,5', isHighlighted: true}, ' ', ' ', ' ', ' ', '1', ' ', ' ', '9' ],
                            [ {number: '=1,2,3,7', isHighlighted: true}, '5', ' ', ' ', '8', ' ', ' ', ' ', ' ' ],
                            [ {number: '=1,2,7', isHighlighted: true}, ' ', ' ', '3', ' ', ' ', ' ', '6', ' ' ],
                            [ {number: '=1,2,3,7', isHighlighted: true}, '9', ' ', ' ', ' ', ' ', ' ', '4', ' ' ] ]
                        "
                    />
                    <p class="text-center">Some candidates for the previous sudoku</p>
                </div>
            </div>
            <p>So far, the sudoku is not valid anymore. TODO Continue here</p>

            <h5 class="attempt">Fifth attempt: knowing where to stop</h5>

            <p>TODO: Call group a row, column or region</p>
            <p>TODO: Call peers the related boxes</p>
            <p>TODO: Attempt 5 When to stop? Allowing the algorithm to continue filling the grid...</p>
            <p>TODO: Optimization. Choose the highest impact boxes... and the ones with larger number of candidates</p>
            <p>TODO: How to control the difficulty?</p>

            <p>TODO Compute the impacts when removing a candidate?</p>
        </div>
    </BlogEntry>
</template>

<script>
import BlogEntry from '../../BlogEntry';
import { tags } from '../../tags';
import entriesRegistry from '../registry';
import skyTvHillside from './sky-tv-hillside.jpg';
import Sudoku from './sudoku';

const date = 'TODO';
const entry = entriesRegistry['sudoku-generation'];
const title = 'Sudoku generation';

export default {
    name: entry.id,
    components: {
        BlogEntry,
        Sudoku
    },
    props: ['isRenderedFromList', 'allTags'],
    data() {
        return {
            date,
            entry,
            images: {
                skyTvHillside
            },
            tags,
            title
        };
    }
};
</script>

<style lang="scss">
@import '../../../../scss/globals.scss';

.screen-splitter {
    display: block;

    @media (min-width: 768px) {
        display: flex;
    }

    & > * {
        flex-grow: 1;
        margin: 0 5px;
    }
}

.attempt {
    margin-top: 35px;
    border-bottom: 1px solid $light-main-color;
}
</style>