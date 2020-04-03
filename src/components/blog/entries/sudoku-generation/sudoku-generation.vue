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
                        :values="[[5, 3, 4, 6, 7, 8, 9, 1, 2], [6, 7, 2, 1, 9, 5, 3, 4, 8],[1, 9, 8, 3, 4, 2, 5, 6, 7],[8, 5, 9, 7, 6, 1, 4, 2, 3],[4, 2, 6, 8, 5, 3, 7, 9, 1], [7, 1, 3, 9, 2, 4, 8, 5, 6],[9, 6, 1, 5, 3, 7, 2, 8, 4],[2, 8, 7, 4, 1, 9, 6, 3, 5],[ 3, 4, 5, 2, 8, 6, 1, 7, 9]]"
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
            <p>TODO First attempt! Single solution => grid filling</p>
        </div>
    </BlogEntry>
</template>

<script>
import BlogEntry from '../../BlogEntry';
import { tags } from '../../tags';
import entriesRegistry from '../registry';
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
            images: {},
            tags,
            title
        };
    }
};
</script>

<style lang="scss">
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
</style>