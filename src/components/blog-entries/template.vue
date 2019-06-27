<template>
    <div :class="{'container navbar-spacer m-top-40': !isRenderedFromList}">
        <div class="blog-entry">
            <h4>Article title</h4>
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
            <router-link v-if="isRenderedFromList" to="/blog/article-id">
                <div class="faded"></div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'article_name',
        props: ['isRenderedFromList'],
    };
</script>