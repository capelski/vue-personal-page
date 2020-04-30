<template>
    <BlogEntry
        :date="date"
        :description="descriptions[language.current]"
        duration="6"
        :entry="entry"
        :isRenderedFromList="isRenderedFromList"
        :languages="['cat', 'eng']"
        :allTags="allTags"
        :tags="[tags.Thoughts]"
        :title="titles[language.current]"
    >
        <catalan
            v-if="language.current === 'cat'"
            :isRenderedFromList="isRenderedFromList"
            :images="images"
        />
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
import catalan from './catalan';
import english from './english';
import enough from './enough.gif';

const date = '2019-08-28';
const descriptions = {
    eng: 'Thoughts about the lack of life purpose that we feel sometimes',
    cat: 'Reflexió sobre la sensació de falta de propòsit que sentim a vegades'
};
const entry = entriesRegistry['existential-injustice'];
const titles = { eng: 'Existential injustice', cat: 'Injustícia existencial' };

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
                enough
            },
            language,
            tags,
            titles
        };
    }
};
</script>
