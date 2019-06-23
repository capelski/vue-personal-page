<template>
    <div class="navbar-spacer container">
        <div class="row m-top-40">
            <div class="col-lg-12">
                <article_2019_06_23 />
                <article_2019_06_18 />
            </div>
        </div>
    </div>
</template>

<script>
    import article_2019_06_18 from './blog-entries/2019-06-18';
    import article_2019_06_23 from './blog-entries/2019-06-23';

    export default {
        name: 'Blog',
        components: {
            article_2019_06_18,
            article_2019_06_23
        }
    }
</script>

<style>
    .blog-entry {
        margin-bottom: 20px;
    }

    .blog-entry img {
        max-width: 100%;
    }

    .blog-entry ul li {
        margin-top: 10px;
    }
</style>
