<template>
    <div>
        <div class="blog-gear-container">
            <span class="blog-gear clickable" @click="toggleOptions">&#9881;&#65039;</span>
        </div>
        <div class="row" v-if="isVisible">
            <div class="col-md-6 blog-options-column">
                <h5>Calendar view</h5>
                <VueCal
                    xsmall
                    style="height: 300px; max-width: 400px;"
                    :time="false"
                    :hide-view-selector="true"
                    default-view="month"
                    :disable-views="['years', 'year', 'week']"
                    :events="events"
                    :on-event-click="goToEntry"
                />
            </div>
            <div class="col-md-6 blog-options-column">
                <h5>Selected tags</h5>
                <div>
                    <span
                        v-for="tag in allTags"
                        :key="tag.text"
                        :class="{'blog-tag clickable filter': true, [tag.className]: true, 'unselected': !tag.isSelected }"
                        @click="selectTag(tag)"
                    >{{ tag.text }}</span>
                </div>
                <h5 class="languages-title">🌎 Language</h5>
                <span
                    :class="{'clickable language': true, 'selected': language.current === 'CAT'}"
                    @click="selectLanguage('CAT')"
                >Català</span>
                <span
                    :class="{'clickable language': true, 'selected': language.current === 'ENG'}"
                    @click="selectLanguage('ENG')"
                >English</span>
            </div>
        </div>
        <div v-if="noTagsSelected">
            <h3>No tags selected</h3>
            <p>Go ahead and select some. It shouldn't be that bad</p>
        </div>
    </div>
</template>

<script>
import VueCal from 'vue-cal';
import BlogEntries from './entries/components';
import { language } from './language';

export default {
    name: 'BlogOptions',
    components: {
        VueCal
    },
    props: ['allTags'],
    data() {
        return {
            events: Object.values(BlogEntries).map(blogEntry => {
                const blogEntryData = blogEntry.data();
                return {
                    id: blogEntryData.entry.id,
                    end: blogEntryData.date,
                    start: blogEntryData.date,
                    title: blogEntryData.title
                };
            }),
            isVisible: false,
            language,
            noTagsSelected: false
        };
    },
    methods: {
        goToEntry(event) {
            this.$router.push(`/blog/${event.id}`);
        },
        selectLanguage(selectedLanguage) {
            language.current = selectedLanguage;
        },
        selectTag(targetTag) {
            targetTag.isSelected = !targetTag.isSelected;
            this.noTagsSelected = this.allTags.filter(tag => tag.isSelected).length === 0;
        },
        toggleOptions() {
            this.isVisible = !this.isVisible;
        }
    }
};
</script>

<style lang="scss">
@import '../../scss/globals.scss';

.blog-options-column {
    margin-bottom: 40px;
}

.blog-gear-container {
    display: flex;
    justify-content: flex-end;

    .blog-gear {
        font-size: 24px;
        display: inline-block;
        margin-bottom: 20px;
    }
}

.vuecal__title-bar,
.vuecal__cell.selected {
    background: transparent;
}

.vuecal__cell-events-count {
    display: none;
}

.vuecal__cell--has-events,
.vuecal__cell--has-events.selected,
.vuecal__cell--has-events.today {
    background-color: $primary-color;
}

.vuecal__event {
    background-color: $primary-color;
    color: $light-main-color;
    margin-bottom: 10px;
}

.vuecal__event-title {
    padding-top: 20px;
    padding-bottom: 20px;
    cursor: pointer;
}

.languages-title {
    margin-top: 24px;
    margin-bottom: 16px;
}

.language {
    margin-left: 10px;
    padding: 5px 10px;
    border-radius: 5px;

    &.selected {
        font-weight: bold;
        border: 2px solid $light-main-color;
    }
}

.blog-tag {
    margin-left: 10px;
    padding: 1px 7px;
    border-radius: 5px;
    color: white;
    display: inline-block;
    font-weight: bold;

    &.business-tag {
        border: 2px solid #dc3545;
        color: #dc3545;

        &.filter {
            background-color: #dc3545;
        }
    }

    &.dissemination-tag {
        border: 2px solid #28a745;
        color: #28a745;

        &.filter {
            background-color: #28a745;
        }
    }

    &.entertainment-tag {
        border: 2px solid #ffc107;
        color: #ffc107;

        &.filter {
            background-color: #ffc107;
        }
    }

    &.thoughts-tag {
        border: 2px solid #563d7c;
        color: #563d7c;

        &.filter {
            background-color: #563d7c;
        }
    }

    &.web-development-tag {
        border: 2px solid #007bff;
        color: #007bff;

        &.filter {
            background-color: #007bff;
        }
    }

    &.filter {
        margin-top: 5px;
        margin-bottom: 5px;
        padding: 3px 5px;
        font-weight: normal;
        color: white;

        &.unselected {
            border: 2px solid #cccccc;
            color: #cccccc;
            background-color: white;
        }
    }
}

.dark {
    .language.selected {
        border: 2px solid $dark-main-color;
    }

    .vuecal__arrow {
        color: $dark-main-color;
    }

    .vuecal__cell--has-events {
        color: $light-main-color;
    }

    .vuecal__flex.vuecal__title button {
        color: $dark-main-color;
    }

    .vuecal__event-title {
        color: white;
    }

    .blog-tag {
        &.filter {
            &.unselected {
                background-color: $light-main-color;
            }
        }
    }
}
</style>