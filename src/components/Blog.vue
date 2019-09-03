<template>
    <div class="container navbar-spacer">
        <div class="alert alert-info m-b-40" role="alert">
            <div class="selected-tags">
                <h5>Tags</h5>
                <span>
                    <span
                        v-for="tag in availableTags" :key="tag.text"
                        :class="{'blog-tag clickable filter': true, [tag.className]: true, 'unselected': !tag.selected }"
                        @click="selectTag(tag)"
                    >
                        {{ tag.text }}
                    </span>
                </span>
            </div>
        </div>

        <existential_injustice :isRenderedFromList="true" :selectedTags="selectedTags" />
        <progressive_web_apps :isRenderedFromList="true" :selectedTags="selectedTags" />
        <four_coin_challenge :isRenderedFromList="true" :selectedTags="selectedTags" />
        <meaning_of_life :isRenderedFromList="true" :selectedTags="selectedTags" />
        <leaked_api_key :isRenderedFromList="true" :selectedTags="selectedTags" />
        <agility_rocks :isRenderedFromList="true" :selectedTags="selectedTags" />

        <div v-if="selectedTags.length === 0">
            <h3>
                No tags selected
            </h3>
            <p>Go ahead and select some. It shouldn't be that bad</p>
        </div>
    </div>
</template>

<script>
    import existential_injustice from './blog-entries/existential-injustice';
    import progressive_web_apps from './blog-entries/progressive-web-apps';
    import four_coin_challenge from './blog-entries/four-coin-challenge';
    import meaning_of_life from './blog-entries/meaning-of-life';
    import leaked_api_key from './blog-entries/leaked-api-key';
    import agility_rocks from './blog-entries/agility-rocks';
    import { tags } from './blog-entries/tags';

    export default {
        name: 'Blog',
        components: {
            existential_injustice,
            progressive_web_apps,
            four_coin_challenge,
            meaning_of_life,
            leaked_api_key,
            agility_rocks
        },
        metaInfo: {
            title: 'Blog',
            meta: [{
                name: 'description', content: 'Blog with the worth sharing thoughts that cross my mind as well as some software development articles'
            }]
        },
        data() {
            return {
                availableTags: Object.values(tags).map(tag => {
                    tag.selected = true;
                    return tag;
                })
            };
        },
        computed: {
            selectedTags() {
                return this.availableTags.filter(tag => tag.selected);
            }
        },
        methods: {
            selectTag(targetTag) {
                this.availableTags = this.availableTags.map(tag => {
                    if (targetTag === tag) {
                        tag.selected = !tag.selected;
                    }
                    return tag;
                });
            }
        }
    }
</script>

<style lang="scss">
    .selected-tags {
        text-align: right;
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }

    .m-b-40 {
        margin-bottom: 40px;
    }

    .clickable {
        cursor: pointer;
    }

    .blog-tag {
        margin-left: 10px;
        padding: 1px 7px;
        border-radius: .25rem;
        color: white;
        display: inline-block;

        &.dissemination-tag {
            background-color: #28a745;

            &.filter {
                border: 2px solid #28a745;
                color: #28a745;
            }
        }

        &.entertainment-tag {
            background-color: #ffc107;

            &.filter {
                border: 2px solid #ffc107;
                color: #ffc107;
            }
        }

        &.thoughts-tag {
            background-color: #563d7c;

            &.filter {
                border: 2px solid #563d7c;
                color: #563d7c;
            }
        }

        &.web-development-tag {
            background-color: #007bff;

            &.filter {
                border: 2px solid #007bff;
                color: #007bff;
            }
        }

        &.filter {
            margin-top: 5px;
            margin-bottom: 5px;
            padding: 3px 5px;
            font-weight: bold;
            background-color: white;

            &.unselected {
                border: 2px solid #e3e3e3;
                color: #e3e3e3;
            }
        }
    }
</style>