<template>
    <BlogEntry
        :date="date"
        :description="descriptions[language.current]"
        duration="TODO"
        :entry="entry"
        :isRenderedFromList="isRenderedFromList"
        :languages="entry.languages"
        :allTags="allTags"
        :tags="[tags.Thoughts]"
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

const date = 'TODO';
const descriptions = {
    en: 'TODO',
    ca: 'TODO'
};
const entry = entriesRegistry['TODO'];
const titles = { en: 'TODO', ca: 'TODO' };

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
            title: titles['en'],
            titles
        };
    }
};
</script>
