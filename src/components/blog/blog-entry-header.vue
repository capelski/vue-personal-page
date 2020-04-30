<template>
    <div class="blog-entry-header">
        <router-link v-if="isRenderedFromList" :to="`/blog/${id}`" class="blog-link">
            <slot></slot>
        </router-link>

        <div v-else>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogEntryHeader',
    props: ['id', 'isRenderedFromList']
};
</script>