<template>
    <div class="container navbar-spacer">
        <BlogOptions :allTags="allTags" />

        <subscribers_list :isRenderedFromList="true" :allTags="allTags" />
        <existential_injustice :isRenderedFromList="true" :allTags="allTags" />
        <progressive_web_apps :isRenderedFromList="true" :allTags="allTags" />
        <four_coin_challenge :isRenderedFromList="true" :allTags="allTags" />
        <meaning_of_life :isRenderedFromList="true" :allTags="allTags" />
        <leaked_api_key :isRenderedFromList="true" :allTags="allTags" />
        <agility_rocks :isRenderedFromList="true" :allTags="allTags" />

        <NewsletterForm />
    </div>
</template>

<script>
import subscribers_list from './blog-entries/subscribers-list';
import existential_injustice from './blog-entries/existential-injustice';
import progressive_web_apps from './blog-entries/progressive-web-apps';
import four_coin_challenge from './blog-entries/four-coin-challenge';
import meaning_of_life from './blog-entries/meaning-of-life';
import leaked_api_key from './blog-entries/leaked-api-key';
import agility_rocks from './blog-entries/agility-rocks';
import BlogOptions from './BlogOptions';
import NewsletterForm from './NewsletterForm';
import { tags } from './blog-entries/tags';

export default {
    name: 'Blog',
    components: {
        subscribers_list,
        existential_injustice,
        progressive_web_apps,
        four_coin_challenge,
        meaning_of_life,
        leaked_api_key,
        agility_rocks,
        BlogOptions,
        NewsletterForm
    },
    metaInfo: {
        title: 'Blog',
        meta: [
            {
                name: 'description',
                content:
                    'Blog with the worth sharing thoughts that cross my mind as well as some software development articles'
            }
        ]
    },
    data() {
        return {
            allTags: Object.values(tags)
        };
    }
};
</script>