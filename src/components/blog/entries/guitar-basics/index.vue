<template>
    <BlogEntry
        :date="date"
        :description="descriptions[language.current]"
        duration="2"
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

const date = '2020-06-28';
const descriptions = {
    es: 'Ejercicios básicos para aprender a tocar la guitarra'
};
const entry = entriesRegistry['guitar-basics'];
const titles = { es: 'Básicos de guitarra' };

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
