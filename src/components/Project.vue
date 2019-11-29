<template>
    <li :class="{'timeline-item': true, 'timeline-inverted': inverted}">
        <div class="timeline-image justified">
            <a v-if="url" :href="url" v-on:click="linkClicked" rel="nofollow" target="_blank">
                <i class="fa fa-external-link fa-2x"></i>
            </a>
        </div>
        <div class="timeline-panel">
            <div class="timeline-heading">
                <h4>{{name}}</h4>
                <h5 class="subheading">{{date}}</h5>
            </div>
            <div class="timeline-body">
                <p class="text-muted" v-html="description"></p>
                <p v-if="githubUrl">
                    <i class="fa fa-github"></i>
                    <a :href="githubUrl" target="_blank">{{githubUrl}}</a>
                </p>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name: 'Project',
    props: {
        date: {
            type: String,
            default: 'Current'
        },
        name: {
            type: String,
            default: 'Some app'
        },
        description: {
            type: String,
            default:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
        },
        url: {
            type: String
        },
        githubUrl: {
            type: String
        },
        inverted: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        linkClicked() {
            this.$ga.event({
                eventCategory: 'Projects',
                eventAction: 'link-clicked',
                eventLabel: this.name
            });
        }
    }
};
</script>

<style lang="scss">
@import '../scss/globals.scss';

.timeline-item {
    position: relative;
    min-height: 50px;
    margin-bottom: 50px;

    &:last-child {
        margin-bottom: 0;
    }

    &:after,
    &:before {
        display: table;
        content: ' ';
    }

    &:after {
        clear: both;
    }

    .timeline-panel {
        position: relative;
        float: right;
        width: 100%;
        padding: 0 20px 0 100px;
        text-align: left;

        &:before {
            right: auto;
            left: -15px;
            border-right-width: 15px;
            border-left-width: 0;
        }

        &:after {
            right: auto;
            left: -14px;
            border-right-width: 14px;
            border-left-width: 0;
        }
    }

    &.timeline-inverted > .timeline-panel {
        float: right;
        padding: 0 20px 0 100px;
        text-align: left;

        &:before,
        &:after {
            right: auto;
            border-left-width: 0;
        }

        &:before {
            left: -15px;
            border-right-width: 15px;
        }

        &:after {
            left: -14px;
            border-right-width: 14px;
        }
    }

    .timeline-image {
        position: absolute;
        z-index: 100;
        left: 0;
        width: 80px;
        height: 80px;
        margin-left: 0;
        text-align: center;
        color: white;
        border: 7px solid #e9ecef;
        border-radius: 100%;
        background-color: $primary-color;

        &.justified {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        a {
            color: white;
        }

        h4 {
            font-size: 10px;
            line-height: 14px;
            margin-top: 12px;
        }
    }

    .timeline-heading .subheading {
        font-weight: 400;
    }

    .timeline-body > ul,
    .timeline-body > p {
        margin-bottom: 0;
    }

    @media (min-width: $medium) {
        min-height: 100px;
        margin-bottom: 100px;

        .timeline-panel {
            float: left;
            width: 41%;
            padding: 0 20px 20px 30px;
            text-align: right;
        }

        &.timeline-inverted > .timeline-panel {
            float: right;
            padding: 0 30px 20px 20px;
            text-align: left;
        }

        .timeline-image {
            left: 50%;
            width: 100px;
            height: 100px;
            margin-left: -50px;

            h4 {
                font-size: 13px;
                line-height: 18px;
                margin-top: 16px;
            }
        }
    }
}
</style>