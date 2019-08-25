<template>
    <div :class="{'container navbar-spacer': !isRenderedFromList}">
        <div class="blog-entry">
            <BlogEntryHeader
                :id="entry.id"
                :isRenderedFromList="isRenderedFromList"
            >
                <h4>{{ title }}</h4>
                <p>
                    <span>{{ date }}</span>
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
                <div class="navigation-buttons" v-if="!isRenderedFromList">
                    <button
                        type="button"
                        :class="{'btn btn-primary btn-md': true, 'btn-disabled': !entry.following }"
                        v-on:click="navigateFollowing"
                    >
                        Following
                    </button>
                    <button
                        type="button"
                        :class="{'btn btn-primary btn-md': true, 'btn-disabled': !entry.previous }"
                        v-on:click="navigatePrevious"
                    >
                        Previous
                    </button>
                </div>
            </div>

            <Adsense
                data-ad-client="ca-pub-3020023783009364"
                data-ad-slot="9819874498"
                data-ad-format="auto"
                :data-full-width-responsive="true">
            </Adsense>
        </div>
    </div>
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
            'entry',
            'isRenderedFromList',
            'tags',
            'title',
        ],
        data() {
            return {
                window
            };
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
        margin-bottom: 20px;

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

        .blog-tag {
            margin-left: 10px;
            padding: .25em .4em;
            border-radius: .25rem;
            color: white;

            &.dissemination-tag {
                background-color: #28a745;
            }

            &.entertainment-tag {
                background-color: #ffc107;
            }

            &.thoughts-tag {
                background-color: #563d7c;
            }

            &.web-development-tag {
                background-color: #007bff;
            }
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