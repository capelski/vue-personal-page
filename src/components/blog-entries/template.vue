<template>
    <BlogEntry
        date="TODO"
        description="TODO"
        :entry="entry"
        :isRenderedFromList="isRenderedFromList"
        :title="title"
    >
        <p>
            TODO
        </p>
        <div v-if="!isRenderedFromList">
            <p>
                TODO
            </p>
        </div>
    </BlogEntry>
</template>

<script>
    import BlogEntry from '../BlogEntry';
    import entries from './entries';

    const entry = entries['TODO'];
    const title = 'TODO';

    export default {
        name: entry.id,
        components: {
            BlogEntry
        },
        props: ['isRenderedFromList'],
        data() {
            return {
                entry,
                title
            };
        }
    };
</script>