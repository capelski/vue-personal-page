<template>
    <div class="container navbar-spacer">
        <BlogOptions :allTags="allTags" />

        <trecember :isRenderedFromList="true" :allTags="allTags" />
        <kanban_goals_tracking :isRenderedFromList="true" :allTags="allTags" />
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
import trecember from './entries/trecember/trecember';
import kanban_goals_tracking from './entries/kanban-goals-tracking/kanban-goals-tracking';
import subscribers_list from './entries/subscribers-list/subscribers-list';
import existential_injustice from './entries/existential-injustice/english';
import progressive_web_apps from './entries/progressive-web-apps/progressive-web-apps';
import four_coin_challenge from './entries/four-coin-challenge/four-coin-challenge';
import meaning_of_life from './entries/meaning-of-life/meaning-of-life';
import leaked_api_key from './entries/leaked-api-key/leaked-api-key';
import agility_rocks from './entries/agility-rocks/agility-rocks';
import BlogOptions from './BlogOptions';
import NewsletterForm from './NewsletterForm';
import { tags } from './tags';

export default {
    name: 'Blog',
    components: {
        trecember,
        kanban_goals_tracking,
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