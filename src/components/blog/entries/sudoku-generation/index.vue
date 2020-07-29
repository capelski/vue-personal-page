<template>
    <BlogEntry
        :date="date"
        :description="descriptions[language.current]"
        duration="9"
        :entry="entry"
        :isRenderedFromList="isRenderedFromList"
        :languages="entry.languages"
        :allTags="allTags"
        :tags="[tags.WebDevelopment]"
        :title="titles[language.current]"
    >
        <catalan
            v-if="language.current === 'ca'"
            :isRenderedFromList="isRenderedFromList"
            :images="images"
        />
        <english
            v-if="language.current === 'en'"
            :isRenderedFromList="isRenderedFromList"
            :images="images"
        />
    </BlogEntry>
</template>

<script>
import BlogEntry from '../../blog-entry';
import { language } from '../../language';
import { tags } from '../../tags';
import entriesRegistry from '../registry';
import catalan from './catalan';
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

const date = '2020-04-29';
const descriptions = {
    en: 'All you need to know in order to build a sudoku generator',
    ca: 'Tot el que necessites saber per construir un generador de sudokus'
};
const entry = entriesRegistry['sudoku-generation'];
const titles = { en: 'Sudoku generation', ca: 'Generació de sudokus' };

export default {
    name: entry.id,
    components: {
        BlogEntry,
        catalan,
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
            title: titles['en'],
            titles
        };
    }
};
</script>

<style lang="scss">
@import '../../../../scss/globals.scss';

@media (min-width: $medium) {
    .blog-entry img.limited-size-image {
        max-width: 650px;
    }
}
</style>
