<template>
    <div :class="{'container navbar-spacer m-top-40': !renderedInList}">
        <div class="blog-entry">
            <h4>Title</h4>
            <p>Date</p>
            <p>
                Paragraph
            </p>
            <p class="text-center">
                <br />
                <img src="/img/blog/image_name?$modena=vue-personal-page" />
                <br />
                <br />
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'article_name',
        props: ['renderedInList']
    };
</script>