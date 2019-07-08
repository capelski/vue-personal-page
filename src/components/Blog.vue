<template>
    <div class="container navbar-spacer">
        <meaning_of_life :isRenderedFromList="true" />
        <leaked_api_key :isRenderedFromList="true" />
        <agility_rocks :isRenderedFromList="true" />
    </div>
</template>

<script>
    import agility_rocks from './blog-entries/agility-rocks';
    import leaked_api_key from './blog-entries/leaked-api-key';
    import meaning_of_life from './blog-entries/meaning-of-life';

    export default {
        name: 'Blog',
        components: {
            agility_rocks,
            leaked_api_key,
            meaning_of_life
        },
        metaInfo: {
            title: 'Blog',
            meta: [{
                name: 'description', content: 'Blog with the worth sharing thoughts that cross my mind as well as some software development articles'
            }]
        },
    }
</script>
