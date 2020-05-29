<template>
    <div class="blog-entry-footer">
        <NewsletterForm :hasBorderBottom="true" />
        <BlogEntryNavigation :description="description" :entry="entry" :title="title" />
    </div>
</template>

<script>
import BlogEntryNavigation from './blog-entry-navigation';
import NewsletterForm from './newsletter-form';
import { language } from './language';

export default {
    name: 'BlogEntryFooter',
    components: {
        BlogEntryNavigation,
        NewsletterForm
    },
    props: ['description', 'entry', 'title']
};
</script>