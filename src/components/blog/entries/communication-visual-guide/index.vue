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
import avoid from './avoid.png';
import bullseye from './bullseye.png';
import calm from './calm.png';
import care from './care.png';
import clarify from './clarify.png';
import confidence from './confidence.png';
import consistency from './consistency.png';
import contagion from './contagion.png';
import dazzle from './dazzle.png';
import discover from './discover.png';
import encounter from './encounter.png';
import explore from './explore.png';
import forge from './forge.png';
import metaphors from './metaphors.png';
import motivation from './motivation.png';
import pacifier from './pacifier.png';
import preach from './preach.png';
import questions from './questions.png';
import stories from './stories.png';
import suggest from './suggest.png';
import understand from './understand.png';
import workaround from './workaround.png';

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
                avoid,
                bullseye,
                calm,
                care,
                clarify,
                confidence,
                consistency,
                contagion,
                dazzle,
                discover,
                encounter,
                explore,
                forge,
                metaphors,
                motivation,
                pacifier,
                preach,
                questions,
                stories,
                suggest,
                understand,
                workaround
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

.persuasion-header {
    margin-bottom: 32px;
    margin-top: 32px;
}

.persuasion-header img,
img.persuasion-stage {
    margin-top: 0;
    width: 85px;
}

@media (max-width: $small) {
    .persuasion-header img {
        width: unset;
    }
}

@media (min-width: $large) {
    img.persuasion-resource {
        max-width: 180px;
    }
}
</style>