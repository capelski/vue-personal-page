<template>
    <BlogEntry
        :date="date"
        :description="descriptions[language.current]"
        duration="9"
        :entry="entry"
        :isRenderedFromList="isRenderedFromList"
        :languages="['ENG']"
        :allTags="allTags"
        :tags="[tags.Thoughts]"
        :title="titles[language.current]"
    >
        <english
            v-if="language.current === 'ENG'"
            :isRenderedFromList="isRenderedFromList"
            :images="images"
        />
    </BlogEntry>
</template>

<script>
import BlogEntry from '../../BlogEntry';
import { language } from '../../language';
import { tags } from '../../tags';
import entriesRegistry from '../registry';
import english from './english';
import commandLine from './command-line.png';
import commandLineError from './command-line-error.png';
import notTerribleNotGreat from './not-terrible-not-great.gif';
import skyTvHillside from './sky-tv-hillside.jpg';

const date = 'TODO';
const descriptions = {
    ENG: 'TODO',
    CAT: 'TODO'
};
const entry = entriesRegistry['sudoku-generation'];
const titles = { ENG: 'Sudoku generation', CAT: 'TODO' };

export default {
    name: entry.id,
    components: {
        BlogEntry,
        english
    },
    props: ['isRenderedFromList', 'allTags'],
    data() {
        return {
            descriptions,
            date,
            entry,
            images: {
                commandLine,
                commandLineError,
                notTerribleNotGreat,
                skyTvHillside
            },
            language,
            tags,
            titles
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