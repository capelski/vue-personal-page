<template>
    <div :class="{'container navbar-spacer m-top-40': !isRenderedFromList}">
        <div class="blog-entry">
            <h4>
                <router-link v-if="isRenderedFromList" to="/blog/article-name">{{ title }}</router-link>
                <span v-if="!isRenderedFromList">{{ title }}</span>
            </h4>
            <p>Date</p>
            <p>
                Main paragraph
            </p>
            <div v-if="!isRenderedFromList">
                <p>
                    Other paragraphs
                </p>
                <p class="text-center">
                    <br />
                    <img src="/img/blog/image_name?$modena=vue-personal-page" />
                    <br />
                    <br />
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'article_name',
        props: ['isRenderedFromList'],
        data() {
            return {
                title: 'Article title'
            };
        },
    };
</script>