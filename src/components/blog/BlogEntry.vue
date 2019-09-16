<template>
    <section
        v-if="!isRenderedFromList || isVisible"
        :class="{'container navbar-spacer': !isRenderedFromList, 'extra-space': isRenderedFromList}"
    >
        <div class="blog-entry">
            <BlogEntryHeader :id="entry.id" :isRenderedFromList="isRenderedFromList">
                <h4>{{ title }}</h4>
                <p>
                    <span class="blog-date">{{ date }}</span>
                    <span class="blog-duration">&#x1F550; {{ duration }} mins</span>
                    <span
                        v-for="tag in tags"
                        :key="tag.text"
                        :class="{'blog-tag': true, [tag.className]: true }"
                    >{{ tag.text }}</span>
                </p>
            </BlogEntryHeader>

            <!-- TODO Extract to blog entry footer -->
            <div :class="{'article-container' : true, 'faded-wrapper': isRenderedFromList}">
                <slot />
                <div v-if="isRenderedFromList" class="faded" v-on:click="navigate"></div>

                <div v-if="!isRenderedFromList">
                    <NewsletterForm :hasBorderBottom="true" />

                    <!-- TODO ¿Extract the domain name into config? -->
                    <a
                        v-if="window.orientation !== undefined"
                        v-on:click="articleShared"
                        :href="'whatsapp://send?text=https://carlescapellas.xyz/blog/' + entry.id"
                        data-action="share/whatsapp/share"
                        class="whatsapp-link"
                    >
                        <img
                            src="/img/whatsapp-icon.png?$modena=vue-personal-page"
                            width="50px"
                            height="50px"
                        />
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
            </div>
        </div>
    </section>
</template>

<script>
import BlogEntryHeader from './BlogEntryHeader';
import NewsletterForm from './NewsletterForm';

export default {
    name: 'blog-entry',
    components: {
        BlogEntryHeader,
        NewsletterForm
    },
    props: [
        'allTags',
        'date',
        'description',
        'duration',
        'entry',
        'hideNavigation',
        'isRenderedFromList',
        'tags',
        'title'
    ],
    data() {
        return {
            window
        };
    },
    computed: {
        isVisible() {
            return this.allTags.reduce((reducedTags, tag) => {
                return (
                    reducedTags ||
                    this.tags.reduce(
                        (reduced, ownTag) => reduced || (tag === ownTag && tag.isSelected),
                        false
                    )
                );
            }, false);
        }
    },
    metaInfo() {
        return this.isRenderedFromList
            ? {}
            : {
                  title: this.title,
                  meta: [
                      {
                          name: 'description',
                          content: this.description
                      }
                  ]
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
@import '../../scss/globals.scss';

.extra-space {
    margin-bottom: 40px;
}

.blog-entry {
    .faded-wrapper {
        position: relative;

        .faded {
            cursor: pointer;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, white 90%);
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            position: absolute;
        }
    }

    .blog-duration {
        margin-left: 10px;
    }

    img {
        margin-top: 15px;
        margin-bottom: 15px;
        max-width: 100%;
    }

    ul li {
        margin-top: 10px;
    }

    .code-editor {
        width: 100%;
        margin-bottom: 15px;
    }

    a.blog-link {
        display: block;
        color: $primary-dark;
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
        color: $primary-dark;
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

.dark {
    .blog-entry {
        .faded-wrapper {
            .faded {
                background: linear-gradient(
                    to bottom,
                    rgba(255, 255, 255, 0) 0%,
                    $primary-dark 90%
                );
            }
        }

        a.blog-link {
            color: $primary-grey;
        }

        a.whatsapp-link {
            color: $primary-grey;
        }
    }
}
</style>