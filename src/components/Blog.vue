<template>
    <div class="container navbar-spacer">
        <four_coin_challenge :isRenderedFromList="true" />
        <meaning_of_life :isRenderedFromList="true" />
        <leaked_api_key :isRenderedFromList="true" />
        <agility_rocks :isRenderedFromList="true" />
    </div>
</template>

<script>
    import agility_rocks from './blog-entries/agility-rocks';
    import leaked_api_key from './blog-entries/leaked-api-key';
    import meaning_of_life from './blog-entries/meaning-of-life';
    import four_coin_challenge from './blog-entries/four-coin-challenge';

    export default {
        name: 'Blog',
        components: {
            agility_rocks,
            leaked_api_key,
            meaning_of_life,
            four_coin_challenge
        },
        metaInfo: {
            title: 'Blog',
            meta: [{
                name: 'description', content: 'Blog with the worth sharing thoughts that cross my mind as well as some software development articles'
            }]
        },
    }
</script>
