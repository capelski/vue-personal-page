<template>
    <div :class="{'container navbar-spacer': !isRenderedFromList}">
        <div class="blog-entry">
            <router-link v-if="isRenderedFromList" class="heading blog-link" :to="`/blog/${id}`">
                <h4>{{ title }}</h4>
                <p>{{ date }}</p>
            </router-link>

            <div class="heading" v-if="!isRenderedFromList">
                <h4>{{ title }}</h4>
                <p>{{ date }}</p>
            </div>

            <div :class="{'article-container' : true, 'faded-wrapper': isRenderedFromList}">
                <slot />
                <div v-if="isRenderedFromList" class="faded" v-on:click="navigate"></div>
                <a
                    v-if="!isRenderedFromList && window.orientation !== undefined"
                    :href="'whatsapp://send?text=https://carlescapellas.xyz/blog/' + id"
                    data-action="share/whatsapp/share">
                    <img src="/img/whatsapp-icon.png?$modena=vue-personal-page" width="50px" height="50px" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'agility-rocks',
        props: [
            'date',
            'description',
            'id',
            'isRenderedFromList',
            'title'
        ],
        data() {
            return {
                window
            };
        },
        metaInfo () {
            return this.isRenderedFromList ? {} :
                {
                    title: this.title,
                    meta: [{
                        name: 'description', content: this.description
                    }]
                };
        },
        methods: {
            navigate() {
                this.$router.push(`/blog/${this.id}`);
            }
        }
    };
</script>

<style>
    .blog-entry {
        margin-bottom: 20px;
    }

    .blog-entry .faded-wrapper {
        position: relative
    }

    .blog-entry .faded-wrapper .faded {
        cursor: pointer;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, white 90%);
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

    .blog-entry a.blog-link {
        display: block;
        color: black;
        text-decoration: none;
    }
</style>