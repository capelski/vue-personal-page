<template>
    <div class="navbar-spacer container">
        <div class="row">
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

<style scoped>
    .navbar-spacer {
        padding-top: 90px;
    }

    .responsive-image {
        max-width: 100%;
        text-align: center;
    }
</style>
