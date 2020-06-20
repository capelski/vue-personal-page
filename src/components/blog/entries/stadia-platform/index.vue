<template>
    <BlogEntry
        :date="date"
        :description="descriptions[language.current]"
        duration="3"
        :entry="entry"
        :isRenderedFromList="isRenderedFromList"
        :languages="entry.languages"
        :allTags="allTags"
        :tags="[tags.Dissemination]"
        :title="titles[language.current]"
    >
        <english
            v-if="language.current === 'eng'"
            :isRenderedFromList="isRenderedFromList"
            :images="images"
        />
    </BlogEntry>
</template>

<script>
import BlogEntry from '../../blog-entry';
import { language } from '../../language';
import { tags } from '../../tags';
import entriesRegistry from '../registry';
import english from './english';

import destinyGraphics1 from './destiny-graphics-1.jpg';
import destinyGraphics2 from './destiny-graphics-2.jpg';
import destinyGraphics3 from './destiny-graphics-3.jpg';
import destinyGraphics4 from './destiny-graphics-4.jpg';
import destinyGraphics5 from './destiny-graphics-5.mp4';
import stadiaDevices from './stadia-devices.png';
import stadiaGlitch from './stadia-glitch.jpg';
import stadiaGameStore from './stadia-game-store.png';
import stadiaLandingPage from './stadia-landing-page.png';
import stadiaMobile1 from './stadia-mobile-1.jpg';
import stadiaMobile2 from './stadia-mobile-2.jpg';
import stadiaSubscription from './stadia-subscription.png';

const date = '2020-06-20';
const descriptions = {
    eng: 'A brief description of the Stadia gaming platform experience'
};
const entry = entriesRegistry['stadia-platform'];
const titles = { eng: 'Stadia: cloud gaming' };

export default {
    name: entry.id,
    components: {
        BlogEntry,
        english
    },
    props: ['isRenderedFromList', 'allTags'],
    data() {
        return {
            descriptions,
            date,
            entry,
            images: {
                destinyGraphics1,
                destinyGraphics2,
                destinyGraphics3,
                destinyGraphics4,
                destinyGraphics5,
                stadiaDevices,
                stadiaGameStore,
                stadiaGlitch,
                stadiaLandingPage,
                stadiaMobile1,
                stadiaMobile2,
                stadiaSubscription
            },
            language,
            tags,
            title: titles['eng'],
            titles
        };
    }
};
</script>
