<template>
    <BlogEntry
        date="TODO"
        description="TODO"
        :id="id"
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
    import ids from './ids';

    const id = ids['TODO'];
    const title = 'TODO';

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