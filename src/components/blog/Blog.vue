<template>
    <div class="container navbar-spacer">
        <BlogOptions :allTags="allTags" />

        <GuitarBasics :isRenderedFromList="true" :allTags="allTags" />
        <StadiaPlatform :isRenderedFromList="true" :allTags="allTags" />
        <PersuasionInPictures :isRenderedFromList="true" :allTags="allTags" />
        <SudokuGeneration :isRenderedFromList="true" :allTags="allTags" />
        <WebDevOnSteroidsII :isRenderedFromList="true" :allTags="allTags" />
        <WebDevOnSteroidsI :isRenderedFromList="true" :allTags="allTags" />
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
import GuitarBasics from './entries/guitar-basics';
import StadiaPlatform from './entries/stadia-platform';
import PersuasionInPictures from './entries/persuasion-in-pictures';
import SudokuGeneration from './entries/sudoku-generation';
import WebDevOnSteroidsII from './entries/web-dev-on-steroids-ii/web-dev-on-steroids-ii';
import WebDevOnSteroidsI from './entries/web-dev-on-steroids-i/web-dev-on-steroids-i';
import Trecember from './entries/trecember/trecember';
import KanbanGoalsTracking from './entries/kanban-goals-tracking/kanban-goals-tracking';
import SubscribersList from './entries/subscribers-list/subscribers-list';
import ExistentialInjustice from './entries/existential-injustice';
import ProgressiveWebApps from './entries/progressive-web-apps/progressive-web-apps';
import FourCoinChallenge from './entries/four-coin-challenge/four-coin-challenge';
import MeaningOfLife from './entries/meaning-of-life/meaning-of-life';
import LeakedApiKey from './entries/leaked-api-key/leaked-api-key';
import AgilityRocks from './entries/agility-rocks/agility-rocks';
import BlogOptions from './blog-options';
import NewsletterForm from './newsletter-form';
import { tags } from './tags';

export default {
    name: 'Blog',
    components: {
        GuitarBasics,
        StadiaPlatform,
        PersuasionInPictures,
        SudokuGeneration,
        WebDevOnSteroidsII,
        WebDevOnSteroidsI,
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