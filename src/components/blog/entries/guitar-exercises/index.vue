<template>
    <BlogEntry
        :date="date"
        :description="descriptions[language.current]"
        duration="TODO"
        :entry="entry"
        :isRenderedFromList="isRenderedFromList"
        :languages="entry.languages"
        :allTags="allTags"
        :tags="[tags.Dissemination]"
        :title="titles[language.current]"
    >
        <spanish
            v-if="language.current === 'es'"
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
import spanish from './spanish';

const date = 'TODO';
const descriptions = {
    es: 'TODO'
};
const entry = entriesRegistry['guitar-exercises'];
const titles = { es: 'TODO' };

export default {
    name: entry.id,
    components: {
        BlogEntry,
        spanish
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
            title: titles['es'],
            titles
        };
    }
};
</script>
