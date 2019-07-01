<template>
    <li :class="{'timeline-inverted': inverted}">
        <div class="timeline-image justified">
            <a v-if="url" :href="url" style="color: white;" target="_blank">
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
                    <a :href="githubUrl" target="_blank">
                        {{githubUrl}}
                    </a>
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
                default: "Current"
            },
            name: {
                type: String,
                default: "Some app"
            },
            description: {
                type: String,
                default: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
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
        }
    }
</script>

<style>
    .subheading {
        font-weight: 400;
    }

    .timeline > li {
        position: relative;
        min-height: 50px;
        margin-bottom: 50px;
    }

    .timeline > li:after, .timeline > li:before {
        display: table;
        content: ' ';
    }

    .timeline > li:after {
        clear: both;
    }

    .timeline > li .timeline-panel {
        position: relative;
        float: right;
        width: 100%;
        padding: 0 20px 0 100px;
        text-align: left;
    }

    .timeline > li .timeline-panel:before {
        right: auto;
        left: -15px;
        border-right-width: 15px;
        border-left-width: 0;
    }

    .timeline > li .timeline-panel:after {
        right: auto;
        left: -14px;
        border-right-width: 14px;
        border-left-width: 0;
    }

    .timeline > li .timeline-image {
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
        background-color: #fed136;
    }

    .timeline > li .timeline-image.justified {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .timeline > li .timeline-image h4 {
        font-size: 10px;
        line-height: 14px;
        margin-top: 12px;
    }

    .timeline > li.timeline-inverted > .timeline-panel {
        float: right;
        padding: 0 20px 0 100px;
        text-align: left;
    }

    .timeline > li.timeline-inverted > .timeline-panel:before {
        right: auto;
        left: -15px;
        border-right-width: 15px;
        border-left-width: 0;
    }

    .timeline > li.timeline-inverted > .timeline-panel:after {
        right: auto;
        left: -14px;
        border-right-width: 14px;
        border-left-width: 0;
    }

    .timeline > li:last-child {
        margin-bottom: 0;
    }

    .timeline .timeline-heading h4 {
        margin-top: 0;
        color: inherit;
    }

    .timeline .timeline-heading h4.subheading {
        text-transform: none;
    }

    .timeline .timeline-body > ul,
    .timeline .timeline-body > p {
        margin-bottom: 0;
    }

    @media (min-width: 768px) {
        .timeline > li {
            min-height: 100px;
            margin-bottom: 100px;
        }
        .timeline > li .timeline-panel {
            float: left;
            width: 41%;
            padding: 0 20px 20px 30px;
            text-align: right;
        }
        .timeline > li .timeline-image {
            left: 50%;
            width: 100px;
            height: 100px;
            margin-left: -50px;
        }
        .timeline > li .timeline-image h4 {
            font-size: 13px;
            line-height: 18px;
            margin-top: 16px;
        }
        .timeline > li.timeline-inverted > .timeline-panel {
            float: right;
            padding: 0 30px 20px 20px;
            text-align: left;
        }
    }

    @media (min-width: 992px) {
        .timeline > li {
            min-height: 150px;
        }
        .timeline > li .timeline-panel {
            padding: 0 20px 20px;
        }
        .timeline > li .timeline-image {
            width: 150px;
            height: 150px;
            margin-left: -75px;
        }
        .timeline > li .timeline-image h4 {
            font-size: 18px;
            line-height: 26px;
            margin-top: 30px;
        }
        .timeline > li.timeline-inverted > .timeline-panel {
            padding: 0 20px 20px;
        }
    }

    @media (min-width: 1200px) {
        .timeline > li {
            min-height: 170px;
        }
        .timeline > li .timeline-panel {
            padding: 0 20px 20px 100px;
        }
        .timeline > li .timeline-image {
            width: 170px;
            height: 170px;
            margin-left: -85px;
        }
        .timeline > li .timeline-image h4 {
            margin-top: 40px;
        }
        .timeline > li.timeline-inverted > .timeline-panel {
            padding: 0 100px 20px 20px;
        }
    }
</style>