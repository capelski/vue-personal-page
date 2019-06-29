<template>
    <div class="container navbar-spacer m-top-40">
        <leaked_api_key :isRenderedFromList="true" />
        <agility_rocks :isRenderedFromList="true" />
    </div>
</template>

<script>
    import agility_rocks from './blog-entries/agility-rocks';
    import leaked_api_key from './blog-entries/leaked-api-key';

    export default {
        name: 'Blog',
        components: {
            agility_rocks,
            leaked_api_key
        },
        metaInfo: {
            title: 'Blog',
            meta: [{
                name: 'description', content: 'Blog with the worth sharing thoughts that cross my mind as well as some software development articles'
            }]
        },
    }
</script>
