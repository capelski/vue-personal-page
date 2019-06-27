<template>
    <div :class="{'container navbar-spacer m-top-40': !isRenderedFromList}">
        <div class="blog-entry">
            <h4>{{ title }}</h4>
            <p>{{ date }}</p>
            <slot />
            <router-link v-if="isRenderedFromList" :to="`/blog/${id}`">
                <div class="faded"></div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'agility-rocks',
        props: [
            'date',
            'id',
            'isRenderedFromList',
            'title'
        ]
    };
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
        margin-top: 1rem;
        margin-bottom: 1rem;
        max-width: 100%;
    }

    .blog-entry ul li {
        margin-top: 10px;
    }

    .blog-entry .code-editor {
        width: 100%;
    }
</style>