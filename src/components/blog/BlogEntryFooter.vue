<template>
    <div class="blog-entry-footer">
        <NewsletterForm :hasBorderBottom="true" />

        <div class="navigation-buttons" v-if="!hideNavigation">
            <button
                type="button"
                :class="{'btn btn-primary': true, 'btn-disabled': !entry.previous }"
                v-on:click="navigatePrevious"
            >Previous</button>
            <a v-if="isShareAvailable" v-on:click="sharePost" class="share-link">
                <img src="/img/share.png?$modena=vue-personal-page" width="40px" height="40px" />
            </a>
            <button
                type="button"
                :class="{'btn btn-primary': true, 'btn-disabled': !entry.following }"
                v-on:click="navigateFollowing"
            >Following</button>
        </div>
    </div>
</template>

<script>
import NewsletterForm from './NewsletterForm';

export default {
    name: 'BlogEntryFooter',
    components: {
        NewsletterForm
    },
    props: ['description', 'entry', 'hideNavigation', 'title'],
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
                    url: `${process.env.PRODUCTION_URL}/blog/${this.entry.id}`
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
        navigate() {
            this.$router.push(`/blog/${this.entry.id}`);
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