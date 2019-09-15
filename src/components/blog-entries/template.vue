<template>
    <BlogEntry
        :date="date"
        description="TODO"
        duration="TODO"
        :entry="entry"
        :isRenderedFromList="isRenderedFromList"
        :allTags="allTags"
        :tags="[tags.WebDevelopment]"
        :title="title"
    >
        <p>TODO</p>
        <div v-if="!isRenderedFromList">
            <p>TODO</p>
        </div>
    </BlogEntry>
</template>

<script>
import BlogEntry from '../BlogEntry';
import entries from './entries';
import { tags } from './tags';

const date = 'TODO';
const entry = entries['TODO'];
const title = 'TODO';

export default {
    name: entry.id,
    components: {
        BlogEntry
    },
    props: ['isRenderedFromList', 'allTags'],
    data() {
        return {
            date,
            entry,
            tags,
            title
        };
    }
};
</script>