<template>
    <BlogEntry
        :date="date"
        :description="descriptions[language.current]"
        duration="TODO"
        :entry="entry"
        :isRenderedFromList="isRenderedFromList"
        :languages="['eng']"
        :allTags="allTags"
        :tags="[tags.Dissemination]"
        :title="titles[language.current]"
    >
        <english
            v-if="language.current === 'eng'"
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
import english from './english';

import adopt from './adopt.png';
import allowance from './allowance.png';
import amplify from './amplify.png';
import avoid from './avoid.png';
import bullseye from './bullseye.png';
import clarify from './clarify.png';
import consistency from './consistency.png';
import dazzle from './dazzle.png';
import discovery from './discovery.png';
import encounter from './encounter.png';
import explore from './explore.png';
import forge from './forge.png';
import metaphors from './metaphors.png';
import obstacles from './obstacles.png';
import pacifier from './pacifier.png';
import preach from './preach.png';
import questions from './questions.png';
import stories from './stories.png';
import suggest from './suggest.png';
import understand from './understand.png';

const date = 'TODO';
const descriptions = {
    eng: 'TODO'
};
const entry = entriesRegistry['communication-visual-guide'];
const titles = { eng: 'Visual guide to efficient communication' };

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
                adopt,
                allowance,
                amplify,
                avoid,
                bullseye,
                clarify,
                consistency,
                dazzle,
                discovery,
                encounter,
                explore,
                forge,
                metaphors,
                obstacles,
                pacifier,
                preach,
                questions,
                stories,
                suggest,
                understand
            },
            language,
            tags,
            titles
        };
    }
};
</script>
