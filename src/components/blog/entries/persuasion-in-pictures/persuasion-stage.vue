<template>
    <div class="row">
        <div class="col-4 col-lg-2 text-center">
            <img class="persuasion-stage" :src="`/vue-personal-page/${image}`" :alt="image" />
        </div>
        <div class="col-8 col-lg-10">
            <h6>{{ title }}</h6>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['description', 'image', 'title']
};
</script>
