<template>
    <BlogEntry
        :date="date"
        description="Challenge which consists in laying 4 coins in a row, with some restrictions to make it interesting, and how to solve it"
        duration="5"
        :entry="entry"
        :isRenderedFromList="isRenderedFromList"
        :languages="['eng']"
        :allTags="allTags"
        :tags="[tags.Entertainment]"
        :title="title"
    >
        <p>
            In contrast to my abstract esoteric last post on the
            <router-link :to="`/blog/meaning-of-life`">meaning of life</router-link>, today I bring a light and enjoyable post that will make you think in a different manner; you will need to find a way to lay four coins in a row. Doesn't sound complicated, does it? Just let me add a couple of restrictions so that the word
            <b>challenge</b> on the title is not used in vain and in order for you to feel proud of yourself if you are able to find out a solution.
        </p>
        <div v-if="!isRenderedFromList">
            <p class="text-center">
                <img
                    :src="`${images.initialPosition}?$modena=vue-personal-page`"
                    alt="4-coin challenge initial position"
                />
            </p>
            <p>
                To start with the coins must placed in the
                <b>initial position</b> displayed above. I will use the bitcoin logo to cause confusion and get some more views by mistake (catching the attention of the distracted minds), but you can use any kind of coin as long as they have the same size.
            </p>
            <p>The goal of the challenge is to put the coins on a row by moving just one coin at a time, not lifting it from the surface where they are laying. The tricky part that will make you struggle with the challenge is that each time you move a coin, it can only be left in a position where it touches at least two other coins. A picture is worth a thousand words: the first movement is invalid while the second one is perfectly accepted.</p>
            <p class="text-center">
                <img
                    :src="`${images.invalidMovement}?$modena=vue-personal-page`"
                    alt="4-coin challenge invalid movement"
                />
            </p>
            <p class="text-center">
                <img
                    :src="`${images.validMovement}?$modena=vue-personal-page`"
                    alt="4-coin challenge valid movement"
                />
            </p>
            <p>That's all you need to know! So go get some coins and don't come back until you have a solution or the closest thing you can get before you get tired of trying. Regardless what happens first, here you will find the solution when the moment arrives:</p>
            <p class="text-center">
                <img
                    :src="`${images['solution' + (solutionStep > 9 ? solutionStep : '0' + solutionStep)]}?$modena=vue-personal-page`"
                    alt="4-coin challenge solution"
                />
                <button
                    type="button"
                    :class="{'btn btn-primary btn-lg coins spaced': true, 'btn-disabled': !isPreviousEnabled }"
                    v-on:click="previousStep"
                >Back</button>
                <button
                    type="button"
                    :class="{'btn btn-primary btn-lg coins': true, 'btn-disabled': !isNextEnabled }"
                    v-on:click="nextStep"
                >Next</button>
            </p>
            <p>Hope you enjoy the challenge and you were able to solve it. See you in the next post!</p>
        </div>
    </BlogEntry>
</template>

<script>
import BlogEntry from '../../BlogEntry';
import { tags } from '../../tags';
import entriesRegistry from '../registry';
import initialPosition from './initial-position.jpg';
import invalidMovement from './invalid-movement.jpg';
import validMovement from './valid-movement.jpg';
import solution01 from './solution-01.jpg';
import solution02 from './solution-02.jpg';
import solution03 from './solution-03.jpg';
import solution04 from './solution-04.jpg';
import solution05 from './solution-05.jpg';
import solution06 from './solution-06.jpg';
import solution07 from './solution-07.jpg';
import solution08 from './solution-08.jpg';
import solution09 from './solution-09.jpg';
import solution10 from './solution-10.jpg';
import solution11 from './solution-11.jpg';
import solution12 from './solution-12.jpg';
import solution13 from './solution-13.jpg';

const date = '2019-07-22';
const entry = entriesRegistry['four-coin-challenge'];
const title = '4-coin challenge';

export default {
    name: entry.id,
    components: {
        BlogEntry
    },
    props: ['isRenderedFromList', 'allTags'],
    data() {
        return {
            date,
            entry,
            images: {
                initialPosition,
                invalidMovement,
                validMovement,
                solution01,
                solution02,
                solution03,
                solution04,
                solution05,
                solution06,
                solution07,
                solution08,
                solution09,
                solution10,
                solution11,
                solution12,
                solution13
            },
            solutionStep: 1,
            tags,
            title
        };
    },
    computed: {
        isPreviousEnabled() {
            return this.solutionStep > 1;
        },
        isNextEnabled() {
            return this.solutionStep < 13;
        }
    },
    methods: {
        previousStep() {
            if (this.isPreviousEnabled) {
                this.solutionStep -= 1;
            }
        },
        nextStep() {
            if (this.isNextEnabled) {
                this.solutionStep += 1;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.spaced {
    margin-right: 20px;
}

.btn.btn-primary.coins {
    background-color: #019829;
    border-color: #019829;

    &:active,
    &:focus {
        background-color: #019829 !important;
        box-shadow: none !important;
    }

    &:hover {
        background-color: #005b18 !important;
    }

    &.btn-disabled {
        background-color: #b2e0be;
        border-color: #b2e0be;

        &:hover,
        &:active,
        &:focus {
            background-color: #b2e0be !important;
        }
    }
}
</style>