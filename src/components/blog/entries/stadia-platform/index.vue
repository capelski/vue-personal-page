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

import destinyGraphics1 from './destiny-graphics-1.jpg';
import destinyGraphics2 from './destiny-graphics-2.jpg';
import destinyGraphics3 from './destiny-graphics-3.jpg';
import destinyGraphics4 from './destiny-graphics-4.jpg';
import destinyGraphics5 from './destiny-graphics-5.mp4';

const date = 'TODO';
const descriptions = {
    eng: 'TODO'
};
const entry = entriesRegistry['stadia-platform'];
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
            images: {
                destinyGraphics1,
                destinyGraphics2,
                destinyGraphics3,
                destinyGraphics4,
                destinyGraphics5
            },
            language,
            tags,
            title: titles['eng'],
            titles
        };
    }
};
</script>
