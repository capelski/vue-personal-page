<template>
    <div class="navigation-buttons">
        <button
            type="button"
            :class="{ 'btn btn-primary': true, 'btn-disabled': !entry.previous }"
            v-on:click="navigatePrevious"
        >
            Previous
        </button>
        <a v-if="isShareAvailable" v-on:click="sharePost" class="share-link">
            <img src="/vue-personal-page/img/share.png" width="40px" height="40px" />
        </a>
        <button
            type="button"
            :class="{ 'btn btn-primary': true, 'btn-disabled': !entry.following }"
            v-on:click="navigateFollowing"
        >
            Following
        </button>
    </div>
</template>

<script>
import { language } from './language';

export default {
    name: 'BlogEntryNavigation',
    props: ['description', 'entry', 'title'],
    data() {
        return {
            isShareAvailable: 'share' in navigator
        };
    },
    methods: {
        sharePost() {
            if ('share' in navigator) {
                navigator.share({
                    text: this.description,
                    title: this.title,
                    url: `${process.env.PRODUCTION_URL}/blog/${this.entry.id}/${language.current}`
                });
            }
            if (this.$ga) {
                this.$ga.event({
                    eventCategory: 'Blog',
                    eventAction: 'article-shared',
                    eventLabel: this.title
                });
            }
        },
        navigateFollowing() {
            if (this.entry.following) {
                this.$router.push(`/blog/${this.entry.following}`);
            }
        },
        navigatePrevious() {
            if (this.entry.previous) {
                this.$router.push(`/blog/${this.entry.previous}`);
            }
        }
    }
};
</script>

<style lang="scss">
@import '../../scss/globals.scss';

.blog-entry {
    a.share-link {
        display: flex;
        align-items: center;
        color: $light-main-color;

        &:hover,
        &:focus,
        &:active {
            text-decoration: none;
        }

        img {
            margin: 0;
        }
    }
}

.dark {
    .blog-entry {
        a.share-link {
            color: $dark-main-color;
        }
    }
}
</style>
