<template>
    <div id="mc_embed_signup" :class="{'has-border-bottom': hasBorderBottom}">
        <form
            action="https://gmail.us4.list-manage.com/subscribe/post?u=1268a6ca6cbf3464a492cbc92&amp;id=06423c24b8"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
        >
            <div id="mc_embed_signup_scroll">
                <h4>Join the newsletter</h4>
                <p>Subscribe to get emails every time I post a new blog entry. You can unsubscribe at any time</p>
                <div class="inputs-wrapper">
                    <input
                        type="email"
                        value=""
                        name="EMAIL"
                        class="email"
                        id="mce-EMAIL"
                        placeholder="Email address"
                        required
                    />
                    <input
                        class="btn btn-info"
                        type="submit"
                        value="Subscribe"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                    />
                </div>
                <div style="display: none;" aria-hidden="true">
                    <input type="text" name="b_1268a6ca6cbf3464a492cbc92_06423c24b8" tabindex="-1" value="" />
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'NewsletterForm',
        props: [ 'hasBorderBottom' ]
    }
</script>

<style lang="scss" scoped>
    @import '../scss/globals.scss';

    #mc_embed_signup {
        margin-top: 40px;
        padding-top: 30px;
        border-top: 1px solid $primary-dark;

        &.has-border-bottom {
            margin-bottom: 40px;
            padding-bottom: 30px;
            border-bottom: 1px solid $primary-dark;
        }

        .inputs-wrapper {
            display: flex;
            flex-direction: column;

            .email {
                padding: 8px;
            }

            input:last-child {
                margin: 10px 0 0 0;
            }
        }

        @media (min-width: $medium) {
            .inputs-wrapper {
                flex-direction: row;

                input:last-child {
                    margin: 0 0 0 10px;
                }
            }
        }
    }

    .dark #mc_embed_signup {
        border-top: 1px solid $primary-grey;
        
        &.has-border-bottom {
            border-bottom: 1px solid $primary-grey;
        }
    }
</style>