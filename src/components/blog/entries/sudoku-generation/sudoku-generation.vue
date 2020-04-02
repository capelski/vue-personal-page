<template>
    <BlogEntry
        :date="date"
        description="TODO"
        duration="TODO"
        :entry="entry"
        :isRenderedFromList="isRenderedFromList"
        :allTags="allTags"
        :tags="[tags.Entertainment]"
        :title="title"
    >
        <p>
            At the time of writing, the world is being locked down due to the COVID-19. It is a decision that all countries have been force to make at different points of time. In Spain, for example, the lockdown started March 15th and is supposed to last at least for one month. I am giving you this information just to put you in context, because right now,
            <b>Coronavirus is probably the last thing anybody wnats to hear of</b>. So, with that in mind, how did I end up writing about generating sudokus?
        </p>
        <div v-if="!isRenderedFromList">
            <p>TODO</p>
        </div>
    </BlogEntry>
</template>

<script>
import BlogEntry from '../../BlogEntry';
import { tags } from '../../tags';
import entriesRegistry from '../registry';

const date = 'TODO';
const entry = entriesRegistry['sudoku-generation'];
const title = 'Sudoku generation';

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
            images: {},
            tags,
            title
        };
    }
};
</script>
