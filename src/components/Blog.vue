<template>
    <div class="navbar-spacer container">
        <div class="row m-top-40">
            <div class="col-lg-12">
                <article_2019_06_18 />
            </div>
        </div>
    </div>
</template>

<script>
    import article_2019_06_18 from './blog-entries/2019-06-18';

    export default {
        name: 'Blog',
        components: {
            article_2019_06_18
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
</style>
