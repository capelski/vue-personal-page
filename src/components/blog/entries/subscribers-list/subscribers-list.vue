<template>
    <BlogEntry
        :date="date"
        description="Why and how to build a subscribers list for your website"
        duration="5"
        :entry="entry"
        :isRenderedFromList="isRenderedFromList"
        :languages="entry.languages"
        :allTags="allTags"
        :tags="[tags.Business]"
        :title="title"
    >
        <p>
            As a content writer you owe a great deal to your readers. No matter whether you are a
            blogger, a writer, a coach or an author, being able to reach your audience will help you
            get them more engaged with your activity and provides a good way to start selling your
            products or services in some point in the future. In addition it will keep you motivated
            to keep writing. Is there anything more pleasant than knowing that someone cares about
            your ideas?
        </p>
        <div v-if="!isRenderedFromList">
            <p>
                Most social networks provide great tools to interact with the users and they might
                have your needs covered. But even if all of your activity is taking place inside a
                social network, you might want to divorce from it in the future. Remember MySpace?.
                Having a simple web page doesn't hurt, will allow you to start building your own
                list of subscribers and can be created for free if you still don't have it, using
                platforms such as
                <a href="https://wordpress.com/">Wordpress</a>.
            </p>
            <p>
                See that form in the bottom of this page? Bingo! This is exactly what I am talking
                about. A simple form where readers can provide an email address to which I will send
                an email everytime I post new content to my web. In case you are wondering, no, I am
                not selling anything at the moment. You won't get annoying dick enlarger ads if you
                subscribe to the newsletter.
            </p>
            <p>
                There are a bunch of services you can use to take care of all the stuff related to
                the mailing list. The one I like the most and, to be fair, the only one I have tried
                is
                <a href="https://mailchimp.com/">Mailchimp</a>. They have a great visual editor to
                compose mails (see the screenshot below), they allow you to export the contacts list
                and is free to use under 2000 subscribers.
            </p>
            <p>
                <b
                    >Integrating it with your website is as easy as creating an embedded form and
                    copying the generated code into your web</b
                >. The form editor includes a preview area for you to know what the form will look
                like on your web. The generated code will vary depending on the options you choose
                but you should end up getting something similar to the code below.
            </p>
            <p class="text-center">
                <img
                    :src="`/vue-personal-page/${images.signupForm}`"
                    alt="Mailchimp signup form builder"
                />
            </p>
            <div ref="signupForm" class="code-editor"></div>
            <p>
                We humans are lazy creatures so I'd suggest that you require as few information as
                possible to maximize the number of people that subscribes. After fine tunning the
                form, paste the code to your site and you are ready to start collecting emails
                &#127881; Optionally, you can add some CSS rules to align the look and feel of the
                form with the rest of your website.
            </p>
            <p>
                Next thing you might want to do once you have collected a few email addresses is
                sending a newsletter mail. You can either create a new campaign or define a template
                to be used later when creating a campaign. In both cases Mailchimp provides a visual
                WYSIWYG editor to help you building the mail and you can test it at any point by
                sending a copy to your own address.
            </p>
            <p class="text-center">
                <img
                    :src="`/vue-personal-page/${images.emailEditor}`"
                    alt="Mailchimp email editor"
                />
            </p>
            <p class="text-center">
                <img :src="`/vue-personal-page/${images.campaign}`" alt="Mailchimp email editor" />
            </p>
            <p>
                And that's how easy mail marketing can be! There are much more things that you can
                do with Mailchimp (e.g. sending welcome emails after subscriptions, segment your
                audience, schedule recurring emails, etc.) but don't worry about this now. Stop
                looking for excuses, go creating your Mailchimp account and start collecting emails
                from your readers &#128170; See you in the next post!
            </p>
        </div>
    </BlogEntry>
</template>

<script>
import BlogEntry from '../../blog-entry';
import { tags } from '../../tags';
import { createMonacoEditor } from '../monaco-utils';
import entriesRegistry from '../registry';
import campaign from './campaign.png';
import emailEditor from './email-editor.png';
import signupForm from './signup-form.png';

const date = '2019-09-13';
const entry = entriesRegistry['subscribers-list'];
const title = 'Building a subscribers list';

export default {
    name: entry.id,
    components: {
        BlogEntry
    },
    props: ['isRenderedFromList', 'allTags'],
    data() {
        return {
            date,
            entry,
            images: {
                campaign,
                emailEditor,
                signupForm
            },
            tags,
            title
        };
    },
    mounted() {
        if (!this.isRenderedFromList) {
            createMonacoEditor(
                this.$refs.signupForm,
                'html',
                `<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
    #mc_embed_signup {
        background: #fff;
        clear: left;
        font: 14px Helvetica, Arial, sans-serif;
        width: 100%;
    }
    /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
    <form action="https://gmail.us4.list-manage.com/subscribe/post?u=XXXXXXXXXXXXXXXXX&amp;id=YYYYYYYYYY" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
            <label for="mce-EMAIL">Subscribe</label>
            <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input type="text" name="b_XXXXXXXXXXXXXXXXX_YYYYYYYYYY" tabindex="-1" value="">
            </div>
            <div class="clear">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
            </div>
        </div>
    </form>
</div>`
            );
        }
    }
};
</script>
