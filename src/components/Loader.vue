<template>
    <div v-if="display" class="loader">
        <div class="spinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Loader',
        props: [ 'display' ]
    }
</script>

<style scoped>
    .loader {
        height: calc(100vh - 50px);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: white;
    }

    .dark .loader {
        background-color: #212529;
    }

    @media (min-width: 768px) {
        .loader {
            height: calc(100vh - 53px);
        }
    }

    .spinner {
        width: 40px;
        height: 40px;

        position: relative;
        margin: 100px auto;
    }

    .double-bounce1, .double-bounce2 {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #fed136;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        
        -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
        animation: sk-bounce 2.0s infinite ease-in-out;
    }

    .double-bounce2 {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
    }

    @-webkit-keyframes sk-bounce {
        0%, 100% { -webkit-transform: scale(0.0) }
        50% { -webkit-transform: scale(1.0) }
    }

    @keyframes sk-bounce {
        0%, 100% { 
            transform: scale(0.0);
            -webkit-transform: scale(0.0);
        } 50% { 
            transform: scale(1.0);
            -webkit-transform: scale(1.0);
        }
    }
</style>