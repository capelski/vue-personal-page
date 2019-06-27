<template>
    <div class="container navbar-spacer m-top-40">
        <leaked_api_key :isRenderedFromList="true" />
        <agility_rocks :isRenderedFromList="true" />
    </div>
</template>

<script>
    import agility_rocks from './blog-entries/agility-rocks';
    import leaked_api_key from './blog-entries/leaked-api-key';

    export default {
        name: 'Blog',
        components: {
            agility_rocks,
            leaked_api_key
        }
    }
</script>

<style>
    .blog-entry {
        margin-bottom: 20px;
        position: relative;
    }

    .blog-entry .faded {
        cursor: pointer;
        background: linear-gradient(to bottom, rgba(255, 255, 255 ,0) 0%, white 95%);
        top: 0;
        bottom: 0;
        left:0;
        right: 0;
        position: absolute;
    }

    .blog-entry img {
        max-width: 100%;
    }

    .blog-entry ul li {
        margin-top: 10px;
    }

    .blog-entry .code-editor {
        width: 100%;
    }
</style>
