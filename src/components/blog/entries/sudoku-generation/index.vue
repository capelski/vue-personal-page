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
import boxOnlyLeftCandidate from './box-only-left-candidate.png';
import commandLine from './command-line.png';
import commandLineError from './command-line-error.png';
import groupSingleCandidate from './group-single-candidate.png';
import ownedCandidates from './owned-candidates.png';
import regionSubset from './region-subset.png';
import skyTvHillside from './sky-tv-hillside.jpg';
import webAppFinalApproach from './web-app-final-approach.png';
import webAppFirstApproach from './web-app-first-approach.png';

const date = 'TODO';
const descriptions = {
    ENG: 'TODO',
    CAT: 'TODO'
};
const entry = entriesRegistry['sudoku-generation'];
const titles = { ENG: 'Sudoku generation', CAT: 'Generació de sudokus' };

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
                boxOnlyLeftCandidate,
                commandLine,
                commandLineError,
                groupSingleCandidate,
                ownedCandidates,
                regionSubset,
                skyTvHillside,
                webAppFinalApproach,
                webAppFirstApproach
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

@media (min-width: 768px) {
    .blog-entry img.limited-size-image {
        max-width: 650px;
    }
}
</style>