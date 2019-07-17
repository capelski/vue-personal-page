<template>
    <BlogEntry
        date="date"
        description="description meta tag"
        :id="id"
        :isRenderedFromList="isRenderedFromList"
        :title="title"
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
    import ids from './ids';

    const id = ids['id'];
    const title = 'title';

    export default {
        name: id,
        components: {
            BlogEntry
        },
        props: ['isRenderedFromList'],
        data() {
            return {
                id,
                title
            };
        }
    };
</script>