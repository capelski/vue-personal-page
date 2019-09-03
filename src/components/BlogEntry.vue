<template>
    <section
        v-if="isVisible"
        :class="{'container navbar-spacer': !isRenderedFromList}"
    >
        <div class="blog-entry">
            <BlogEntryHeader
                :id="entry.id"
                :isRenderedFromList="isRenderedFromList"
            >
                <h4>{{ title }}</h4>
                <p>
                    <span class="blog-date">{{ date }}</span>
                    <span class="blog-duration">&#x1F550; {{ duration }} mins</span>
                    <span
                        v-for="tag in tags" :key="tag.text"
                        :class="{'blog-tag': true, [tag.className]: true }"
                    >
                        {{ tag.text }}
                    </span>
                </p>
            </BlogEntryHeader>

            <div :class="{'article-container' : true, 'faded-wrapper': isRenderedFromList}">
                <slot />
                <div v-if="isRenderedFromList" class="faded" v-on:click="navigate"></div>
                <!-- TODO ¿Extract the domain name into config? -->
                <a
                    v-if="!isRenderedFromList && window.orientation !== undefined"
                    v-on:click="articleShared"
                    :href="'whatsapp://send?text=https://carlescapellas.xyz/blog/' + entry.id"
                    data-action="share/whatsapp/share"
                    class="whatsapp-link"
                >
                    <img src="/img/whatsapp-icon.png?$modena=vue-personal-page" width="50px" height="50px" />
                    Share on whatsapp
                </a>
                <div class="navigation-buttons" v-if="!isRenderedFromList && !hideNavigation">
                    <button
                        type="button"
                        :class="{'btn btn-primary btn-md': true, 'btn-disabled': !entry.previous }"
                        v-on:click="navigatePrevious"
                    >
                        Previous
                    </button>
                    <button
                        type="button"
                        :class="{'btn btn-primary btn-md': true, 'btn-disabled': !entry.following }"
                        v-on:click="navigateFollowing"
                    >
                        Following
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import BlogEntryHeader from './BlogEntryHeader';

    export default {
        name: 'blog-entry',
        components: {
            BlogEntryHeader
        },
        props: [
            'date',
            'description',
            'duration',
            'entry',
            'hideNavigation',
            'isRenderedFromList',
            'selectedTags',
            'tags',
            'title',
        ],
        data() {
            return {
                window
            };
        },
        computed: {
            isVisible() {
                return !this.isRenderedFromList || this.tags.reduce((reducedTags, tag) => {
                    return reducedTags || this.selectedTags.reduce((reduced, selectedTag) =>
                        reduced || selectedTag === tag, false);
                }, false);
            }
        },
        metaInfo () {
            return this.isRenderedFromList ? {} :
                {
                    title: this.title,
                    meta: [{
                        name: 'description', content: this.description
                    }]
                };
        },
        methods: {
            articleShared() {
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
    .blog-entry {
        margin-bottom: 40px;

        .faded-wrapper {
            position: relative;

            .faded {
                cursor: pointer;
                background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, white 90%);
                top: 0;
                bottom: 0;
                left:0;
                right: 0;
                position: absolute;
            }
        }

        .blog-duration {
            margin-left: 10px;
        }

        img {
            margin-top: 1rem;
            margin-bottom: 1rem;
            max-width: 100%;
        }

        ul li {
            margin-top: 10px;
        }

        .code-editor {
            width: 100%;
            margin-bottom: 1rem;
        }

        a.blog-link {
            display: block;
            color: black;
            text-decoration: none;

            &:hover,
            &:focus,
            &:active {
                text-decoration: none;
            }
        }

        a.whatsapp-link {
            display: flex;
            align-items: center;
            color: black;

            &:hover,
            &:focus,
            &:active {
                text-decoration: none;
            }
        }

        .navigation-buttons {
            display: flex;
            justify-content: space-between;

            .btn-disabled,
            .btn-disabled:focus,
            .btn-disabled:active,
            .btn-disabled:hover {
                background-color: #feeeb7 !important;
                border-color: #feeeb7 !important;
                box-shadow: none !important;
                cursor: default;
            }
        }
    }
</style>