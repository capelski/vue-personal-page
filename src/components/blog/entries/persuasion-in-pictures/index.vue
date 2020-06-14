<template>
    <BlogEntry
        :date="date"
        :description="descriptions[language.current]"
        duration="4"
        :entry="entry"
        :isRenderedFromList="isRenderedFromList"
        :languages="entry.languages"
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
import offer from './offer.png';
import pacifier from './pacifier.png';
import preach from './preach.png';
import questions from './questions.png';
import stories from './stories.png';
import understand from './understand.png';
import workaround from './workaround.png';

const date = '2020-06-14';
const descriptions = {
    eng: 'A graphical cheatsheet to become a better persuader'
};
const entry = entriesRegistry['persuasion-in-pictures'];
const titles = { eng: 'Persuasion in pictures' };

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
                offer,
                pacifier,
                preach,
                questions,
                stories,
                understand,
                workaround
            },
            language,
            tags,
            title: titles['eng'],
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