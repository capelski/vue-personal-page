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

const date = 'TODO';
const descriptions = {
    eng: 'TODO'
};
const entry = entriesRegistry['guitar-exercises'];
const titles = { eng: 'TODO' };

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
            images: {},
            language,
            tags,
            title: titles['eng'],
            titles
        };
    }
};
</script>
