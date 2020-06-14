<template>
    <div>
        <h6 class="text-center">{{title}}</h6>
        <p class="text-center">
            <img
                class="persuasion-resource"
                :src="`${image}?$modena=vue-personal-page`"
                :alt="imageAlt"
            />
        </p>
        <p>{{description}}</p>
    </div>
</template>

<script>
export default {
    props: ['description', 'image', 'imageAlt', 'title']
};
</script>