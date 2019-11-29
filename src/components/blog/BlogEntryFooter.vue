<template>
    <div class="blog-entry-footer">
        <NewsletterForm :hasBorderBottom="true" />

        <!-- TODO ¿Extract the domain name into config? -->
        <a
            v-if="window.orientation !== undefined"
            v-on:click="articleShared"
            :href="`whatsapp://send?text=${baseUrl}/blog/${entry.id}`"
            data-action="share/whatsapp/share"
            class="whatsapp-link"
        >
            <img src="/img/whatsapp-icon.png?$modena=vue-personal-page" width="50px" height="50px" />
            Share on whatsapp
        </a>

        <div class="navigation-buttons" v-if="!hideNavigation">
            <button
                type="button"
                :class="{'btn btn-primary': true, 'btn-disabled': !entry.previous }"
                v-on:click="navigatePrevious"
            >Previous</button>
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
    props: ['entry', 'hideNavigation'],
    data() {
        return {
            window,
            baseUrl: process.env.PRODUCTION_URL
        };
    },
    methods: {
        articleShared() {
            this.$ga &&
                this.$ga.event({
                    eventCategory: 'Blog',
                    eventAction: 'article-shared',
                    eventLabel: this.title
                });
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
    a.whatsapp-link {
        display: flex;
        align-items: center;
        color: $light-main-color;
        margin: 15px 0;

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
        a.whatsapp-link {
            color: $dark-main-color;
        }
    }
}
</style>