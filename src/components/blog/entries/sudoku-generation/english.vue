<template>
    <div>
        <p>
            My mother has always been a fervent newspaper reader and she is in the habit of solving the puzzles that come in the last pages. Between those puzzles you can always find a game called
            <a
                href="https://en.wikipedia.org/wiki/Sudoku"
                target="_blank"
            >sudoku</a>. Two actually; a reasonably difficult one and an evil one. So she was in the middle of filling the first sudoku when I interrupted her. I don't remember what for but I do remember that we talked about sudoku and it was the difference between the two sudoku levels that caught my attention.
        </p>
        <div v-if="!isRenderedFromList">
            <div class="screen-splitter">
                <div>
                    <Sudoku
                        :size="9"
                        :values="[[' ', ' ', ' ', 1, 7, ' ', ' ', 5, 3], [3, 5, ' ', ' ', 8, 4, ' ', 7, 9], [8, 9, ' ', 3, ' ', 2],[5, 3, ' ', 4],[7, ' ', ' ', 5, ' ', 6, ' ', ' ', 4], [' ', 1, ' ', ' ', 2, ' ', 5, ' ', 8], [' ', 4, 5, ' ', ' ', 3, ' ', ' ', 7], [ ' ', ' ', ' ', 8, ' ', ' ', ' ', 2, 5], [' ', 2, ' ', 7, 9, ' ', ' ', 4]]"
                    />
                    <p class="text-center">Easy sudoku</p>
                </div>
                <div>
                    <Sudoku
                        :size="9"
                        :values="[[' ', ' ', ' ', ' ', 7, ' ', 8, ' ', 4], [4, ' ', 7], [' ', ' ', ' ', 4, 1, ' ', ' ', ' ', 2], [' ', ' ', ' ', ' ', 2, ' ', ' ', 4], [' ', 8, 1, ' ', 3, ' ', 5], [9, 6], [' ', 9, 8], [5, 1, ' ', 8, ' ', ' ', ' ', ' ', 7], [' ', ' ', ' ', ' ', ' ', 6, ' ', ' ', 1]]"
                    />
                    <p class="text-center">Hard sudoku</p>
                </div>
            </div>

            <p>
                In the particular newspaper my mom was reading that day, the easy sudokdu had 28 filled boxes out of the 81 total whereas the difficult sudoku had 29 filled boxes.
                <b>How come the more difficult puzzle had more filled boxes!?</b> Or, in other words, isn't the difficulty of a sudoku based on the number of filled boxes? At least, that was the feeling I had back then. The truth is that I had never taken the time to think about how sudoku are generated. I had solved a few of them sure, but I had never tried to figure out how to generate one.
            </p>

            <p>
                In fact, it turns out is not easy at all. An important property of a well-composed sudoku is that it has only one possible solution. It might sound obvious but, depending on how many and which boxes are filled, there can be multiple valid combinations that solve the puzzle. The most famous example is the sudoku that UK Sky TV draw in a hillside offering a £5000 prize for the solution; it turned out to have
                <a
                    href="https://www.sudokuwiki.org/Sudoku_Creation_and_Grading.pdf"
                    target="_blank"
                >1905 possible solutions</a>. That
                anecdote aroused my curiosity.
            </p>
            <p class="text-center">
                <img
                    :src="`${images.skyTvHillside}?$modena=vue-personal-page`"
                    alt="Sky TV hillside sudoku"
                />
            </p>

            <p>
                <b>Usually I would have thought about it for a while</b>, realize it is a mathematically complex task, conclude that the amount of spare time required to find a solution was much bigger than the curiosity I had on the subject
                <b>and finallly gave up</b>. Nevertheless I had just started a sabbatical leave at my company and, due to COVID-19 prevention measures, the one way flight I was supposed to catch on March 31st to go living in Australia got cancelled.
                <b>Given I found myself unemployed, locked at home and provided with the biggest amount of free hours I had ever had in my life</b> (in Spain the coronavirus lockdown started March 15th and it was meant to last at least for one month), I decided to figure out how to generate sudoku 💪
            </p>

            <p>
                What followed next was a much longer journey that I had expected in the beginning. I was about to quit the project many times but, luckily, I watched
                <a
                    href="https://www.imdb.com/title/tt4276820/"
                    target="_blank"
                >The Founder</a> in the meanwhile, the movie that explains how Ray Kroc turned McDonald's into the biggest restaurant business in the world thanks to his bulletproof persistence. If you must know, this odyssey had four stages:
            </p>

            <p>
                <b>1. Results, results, results</b>: I couldn't fight the urge of wanting to see something done whithout thinking much. I assumed that the process of generating a 9x9 sudoku would be the same as generating a 4x4 one and I went for a quick command line algorithm.
            </p>
            <p class="text-center">
                <img
                    class="limited-size-image"
                    :src="`${images.commandLine}?$modena=vue-personal-page`"
                    alt="Command line generated sudoku"
                />
            </p>

            <p>
                <b>2. Damn! I need a graphical tool</b>: In theory, I just needed to adapt the algorithm to generate 9x9 sudoku and that would be the end of story. At practice, turns out that 9x9 sudokus have little to do with 4x4 sudokus. I couldn't figure out what I was doing wrong just by reading the command line output, so I was compelled to built a graphical tool.
            </p>
            <p class="text-center">
                <img
                    class="limited-size-image"
                    :src="`${images.commandLineError}?$modena=vue-personal-page`"
                    alt="Command line generation error"
                />
            </p>

            <p>
                <b>3. Frog... this is complicated</b>: It didn't take me much time to create a web application that could display 9x9 sudoku. With the visual representation of the sudoku and the ability to fill boxes back and forth I began to understand what I was missing out. The sudoku basic rules (e.g., a number can't be placed in a box if the same number is already placed in the column, region or row of that box) contain a set of derived rules, which are not easy to see at first glance.
            </p>
            <p class="text-center">
                <img
                    class="limited-size-image"
                    :src="`${images.webAppFirstApproach}?$modena=vue-personal-page`"
                    alt="Web application first approach"
                />
            </p>

            <p>
                <b>4. The light at the end of the tunnel</b>: After sitting down and thinking about it, as I should have done from the beginning, I figured out some of those dervied rules that help discarding possible numbers from boxes. Having found out about those little bastards, it was just a matter of rewritting the algorithm to consider them. It took me a number of hours, but I could finally get a working generator.
            </p>
            <p class="text-center">
                <img
                    class="limited-size-image"
                    :src="`${images.webAppFinalApproach}?$modena=vue-personal-page`"
                    alt="Web application final approach"
                />
            </p>

            <p>
                Hey look ma, I made it! In my case I didn't build a massive hamburger empire but this humble
                <a
                    href="/sudoku-generator"
                    target="_blank"
                >sudoku generator</a>. I must admite that it sometimes reaches dead ends during generation, having to drop the work and start again from scratch, but it always ends up generating valid single solution puzzles. If you are wondering, these are the rules the algorithm uses to generate sudoku. In fact, these are probably the rules you use when you are solving those puzzles too.
            </p>

            <ul>
                <li>
                    If a box has only one possible number left, the number must be placed in that box and it's not valid in any peer box:
                    <p class="text-center">
                        <img
                            class="limited-size-image"
                            :src="`${images.boxOnlyLeftCandidate}?$modena=vue-personal-page`"
                            alt="Web application final approach"
                        />
                    </p>
                </li>
                <li>
                    If a number can only be placed in one box for a given group (column, region or row), the number must be placed in that box and it's not valid in any peer box:
                    <p class="text-center">
                        <img
                            class="limited-size-image"
                            :src="`${images.groupSingleCandidate}?$modena=vue-personal-page`"
                            alt="Web application final approach"
                        />
                    </p>
                </li>
                <li>
                    If 2-3 boxes in a group have only the same 2-3 numbers available, those numbers are not valid in the rest of boxes in the group:
                    <p class="text-center">
                        <img
                            class="limited-size-image"
                            :src="`${images.ownedCandidates}?$modena=vue-personal-page`"
                            alt="Web application final approach"
                        />
                    </p>
                </li>
                <li>
                    If the only boxes where a number is available for a given region are in the same row or column, that number is not valid in the rest of boxes of that row or column:
                    <p class="text-center">
                        <img
                            class="limited-size-image"
                            :src="`${images.regionSubset}?$modena=vue-personal-page`"
                            alt="Web application final approach"
                        />
                    </p>
                </li>
            </ul>

            <p>That's pretty much it. I had to work on it around 75 hours to get some kind of acceptable sudoku generator. It was finally less complete than what I wanted it to be, but things never turn out the way you expect them to. Feel free to use the generator, but there two things you must know: it isn't mobile friendly and I didn't work on configuring the difficulty, which makes the generated puzzles pretty hardcore. Good luck and see you in the next post!</p>
        </div>
    </div>
</template>

<script>
import Sudoku from './sudoku';

export default {
    components: {
        Sudoku
    },
    props: ['isRenderedFromList', 'images']
};
</script>