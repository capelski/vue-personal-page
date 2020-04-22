<template>
    <section
        v-if="!isRenderedFromList || isVisible"
        :class="{'container navbar-spacer': !isRenderedFromList, 'extra-space': isRenderedFromList}"
    >
        <div class="blog-entry">
            <BlogEntryHeader :id="entry.id" :isRenderedFromList="isRenderedFromList">
                <h4 class="blog-title">{{ title }}</h4>
                <p>
                    <span class="blog-date">📅 {{ date }}</span>
                    <span class="blog-duration">&#x1F550; {{ duration }} mins</span>
                    <span v-if="languages && languages.length > 0">
                        <span
                            v-for="thisLanguage in languages"
                            :key="thisLanguage"
                            v-on:click="translate"
                            :class="{'blog-language clickable': true, 'selected': !isRenderedFromList && thisLanguage === language.current}"
                        >🌎 {{thisLanguage}}</span>
                    </span>
                    <span
                        v-for="tag in tags"
                        :key="tag.text"
                        :class="{'blog-tag': true, [tag.className]: true }"
                    >{{ tag.text }}</span>
                </p>
            </BlogEntryHeader>

            <div :class="{'article-container' : true, 'faded-wrapper': isRenderedFromList}">
                <slot />
                <div v-if="isRenderedFromList" class="faded" v-on:click="navigate"></div>

                <div v-if="!isRenderedFromList">
                    <BlogEntryFooter :description="description" :entry="entry" :title="title" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import BlogEntryFooter from './BlogEntryFooter';
import BlogEntryHeader from './BlogEntryHeader';
import { language } from './language';

export default {
    name: 'BlogEntry',
    components: {
        BlogEntryFooter,
        BlogEntryHeader
    },
    props: [
        'allTags',
        'date',
        'description',
        'duration',
        'entry',
        'isRenderedFromList',
        'languages',
        'tags',
        'title'
    ],
    data() {
        return {
            language
        };
    },
    computed: {
        isVisible() {
            const hasSelectedTag = this.allTags.reduce((reducedTags, tag) => {
                return (
                    reducedTags ||
                    this.tags.reduce(
                        (reduced, ownTag) => reduced || (tag === ownTag && tag.isSelected),
                        false
                    )
                );
            }, false);
            const hasSelectedLanguage =
                this.languages && this.languages.indexOf(language.current) > -1;

            return hasSelectedTag && hasSelectedLanguage;
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
        navigate() {
            this.$router.push(`/blog/${this.entry.id}`);
        },
        translate() {
            if (!this.isRenderedFromList) {
                const languageIndex = this.languages.findIndex(l => l === language.current);
                const nextLanguageIndex = (languageIndex + 1) % this.languages.length;
                language.current = this.languages[nextLanguageIndex];
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

    .blog-title {
        margin-bottom: 0;

        & + p .blog-date,
        & + p .blog-duration,
        & + p .blog-language,
        & + p .blog-tag {
            margin-top: 8px;
        }
    }

    .blog-date,
    .blog-duration {
        display: inline-block;
        margin-right: 10px;
    }

    .blog-language {
        margin-right: 10px;
        padding: 5px;
        border-radius: 5px;
        white-space: nowrap;

        &.selected {
            border: 2px solid $light-main-color;
        }
    }

    .blog-all-languages {
        margin-left: 10px;
    }

    img {
        margin-top: 15px;
        margin-bottom: 15px;
        max-width: 100%;
    }

    ul {
        &.numbered {
            list-style-type: decimal;
        }

        li {
            line-height: 1.75;
            margin-top: 10px;
        }
    }

    .code-editor {
        width: 100%;
        margin-bottom: 15px;
    }

    a.blog-link {
        display: block;
        color: $light-main-color;
        text-decoration: none;

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

.dark {
    .blog-entry {
        .blog-language.selected {
            border: 2px solid $dark-main-color;
        }

        .faded-wrapper {
            .faded {
                background: linear-gradient(
                    to bottom,
                    rgba(255, 255, 255, 0) 0%,
                    $light-main-color 90%
                );
            }
        }

        a.blog-link {
            color: $dark-main-color;
        }
    }
}
</style>