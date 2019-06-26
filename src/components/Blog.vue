<template>
    <div class="navbar-spacer container">
        <div class="row m-top-40">
            <div class="col-lg-12">
                <leaked_api_key />
                <agility_rocks />
            </div>
        </div>
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
