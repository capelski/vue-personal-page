<template>
    <div class="container navbar-spacer">
        <BlogOptions :allTags="allTags" />

        <GreatWebDevelopment :isRenderedFromList="true" :allTags="allTags" />
        <Trecember :isRenderedFromList="true" :allTags="allTags" />
        <KanbanGoalsTracking :isRenderedFromList="true" :allTags="allTags" />
        <SubscribersList :isRenderedFromList="true" :allTags="allTags" />
        <ExistentialInjustice :isRenderedFromList="true" :allTags="allTags" />
        <ProgressiveWebApps :isRenderedFromList="true" :allTags="allTags" />
        <FourCoinChallenge :isRenderedFromList="true" :allTags="allTags" />
        <MeaningOfLife :isRenderedFromList="true" :allTags="allTags" />
        <LeakedApiKey :isRenderedFromList="true" :allTags="allTags" />
        <AgilityRocks :isRenderedFromList="true" :allTags="allTags" />

        <NewsletterForm />
    </div>
</template>

<script>
import GreatWebDevelopment from './entries/great-web-development/great-web-development';
import Trecember from './entries/trecember/trecember';
import KanbanGoalsTracking from './entries/kanban-goals-tracking/kanban-goals-tracking';
import SubscribersList from './entries/subscribers-list/subscribers-list';
import ExistentialInjustice from './entries/existential-injustice/english';
import ProgressiveWebApps from './entries/progressive-web-apps/progressive-web-apps';
import FourCoinChallenge from './entries/four-coin-challenge/four-coin-challenge';
import MeaningOfLife from './entries/meaning-of-life/meaning-of-life';
import LeakedApiKey from './entries/leaked-api-key/leaked-api-key';
import AgilityRocks from './entries/agility-rocks/agility-rocks';
import BlogOptions from './BlogOptions';
import NewsletterForm from './NewsletterForm';
import { tags } from './tags';

export default {
    name: 'Blog',
    components: {
        GreatWebDevelopment,
        Trecember,
        KanbanGoalsTracking,
        SubscribersList,
        ExistentialInjustice,
        ProgressiveWebApps,
        FourCoinChallenge,
        MeaningOfLife,
        LeakedApiKey,
        AgilityRocks,
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