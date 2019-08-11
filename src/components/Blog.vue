<template>
    <div class="container navbar-spacer">
        <progressive_web_apps :isRenderedFromList="true" />
        <four_coin_challenge :isRenderedFromList="true" />
        <meaning_of_life :isRenderedFromList="true" />
        <leaked_api_key :isRenderedFromList="true" />
        <agility_rocks :isRenderedFromList="true" />
    </div>
</template>

<script>
    import progressive_web_apps from './blog-entries/progressive-web-apps';
    import four_coin_challenge from './blog-entries/four-coin-challenge';
    import meaning_of_life from './blog-entries/meaning-of-life';
    import leaked_api_key from './blog-entries/leaked-api-key';
    import agility_rocks from './blog-entries/agility-rocks';

    export default {
        name: 'Blog',
        components: {
            progressive_web_apps,
            four_coin_challenge,
            meaning_of_life,
            leaked_api_key,
            agility_rocks
        },
        metaInfo: {
            title: 'Blog',
            meta: [{
                name: 'description', content: 'Blog with the worth sharing thoughts that cross my mind as well as some software development articles'
            }]
        },
    }
</script>
