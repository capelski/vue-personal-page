<template>
    <BlogEntry
        date="date"
        id="id"
        :isRenderedFromList="isRenderedFromList"
        title="title"
    >
        <p>
            Main paragraphs
        </p>
        <div v-if="!isRenderedFromList">
            <p>
                Other paragraphs
            </p>
        </div>
    </BlogEntry>
</template>

<script>
    import BlogEntry from '../BlogEntry';

    export default {
        name: 'entry-name',
        components: {
            BlogEntry
        },
        props: ['isRenderedFromList'],
        metaInfo: {
            title: 'Title',
        }
    };
</script>