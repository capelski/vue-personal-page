<template>
    <div class="row">
        <div class="col-sm-2 col-6">
            <h6>{{title}}</h6>
        </div>
        <div class="col-sm-2 col-6 text-center">
            <img class="persuasion-stage" :src="`${image}?$modena=vue-personal-page`" :alt="image" />
        </div>
        <div class="col-sm-8 col-12">
            <p>{{description}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['description', 'image', 'title']
};
</script>