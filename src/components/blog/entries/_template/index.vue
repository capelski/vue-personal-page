<template>
    <BlogEntry
        :date="date"
        :description="descriptions[language.current]"
        duration="TODO"
        :entry="entry"
        :isRenderedFromList="isRenderedFromList"
        :languages="['CAT', 'ENG']"
        :allTags="allTags"
        :tags="[tags.Thoughts]"
        :title="titles[language.current]"
    >
        <catalan
            v-if="language.current === 'CAT'"
            :isRenderedFromList="isRenderedFromList"
            :images="images"
        />
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
import catalan from './catalan';
import english from './english';

const date = 'TODO';
const descriptions = {
    ENG: 'TODO',
    CAT: 'TODO'
};
const entry = entriesRegistry['TODO'];
const titles = { ENG: 'TODO', CAT: 'TODO' };

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
            images: {},
            language,
            tags,
            titles
        };
    }
};
</script>
