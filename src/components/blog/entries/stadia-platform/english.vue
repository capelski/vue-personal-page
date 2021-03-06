<template>
    <div>
        <p>
            Looking for fresh entertainment? Google is here with a new gaming platform that delivers
            4K and doesn't require a console. Give it a chance and try it for free in your computer
            by just signing up with your google account. You will be playing in 5 minutes and the
            graphics will blow your mind 🤯 Have a look at the screenshots at the end of the post if
            you still have any doubt!
        </p>
        <div v-if="!isRenderedFromList">
            <p class="text-center">
                <img
                    :src="`/vue-personal-page/${images.stadiaLandingPage}`"
                    alt="Stadia website landing page"
                />
            </p>
            <p>
                First things first!
                <b>Stadia is not free forever</b>. You can try it free of charge for a month, but
                you will then be billed 9.99€ on a monthly basis. I'm usually not a fan of this free
                trial like strategies (I rather prefer to get a limited version of the service for
                free and then having the chance to unlock additional features by upgrading),
                <b>but I must recognize that Stadia gaming experience is worth trialing</b> even if
                you are resolved not to buy.
            </p>
            <p>
                And
                <i>"why is it worth trailing?"</i> I can hear you asking to yourself. Leaving aside
                the great videogame experience itself, the most interesting aspect from my point of
                view is the fact that you can play from your computer without installing any
                software. It might seem an irrelevant detail, but let's keep in mind that a very
                similar idea turned
                <a href="https://en.wikipedia.org/wiki/Netflix" target="_blank">Netflix</a> from an
                online pay-per-rent DVD rental company to one of the biggest streaming provider in
                the world. <b>Stadia could be the end of consoles obsolescence</b> (e.g. Play
                Station 1, Play Station 2, Play Station 3... and the list goes on).
            </p>
            <p>
                Another promising feature, which I haven't tested out personally, is that
                <b>it can be played in multiple devices such as smartphones, tablets and TVs</b>. I
                tried playing from my low range smartphone but, even though the game managed to
                start, the Xiamoi Redmi 5 is not powerful enough to keep the pace. You can check
                whether your device is supported in Stadia's website. Also notice that for an
                optimal game experience they recommend using the
                <a href="https://store.google.com/product/stadia_controller" target="_blank"
                    >Stadia controller</a
                >
                (sold for 69€ at the time of writing), compatible with all device types and
                mandatory for TVs.
            </p>
            <p class="text-center">
                <img
                    :src="`/vue-personal-page/${images.stadiaDevices}`"
                    alt="Stadia supported devices"
                />
            </p>
            <div class="screen-splitter">
                <p class="text-center">
                    <img
                        class="mobile-screenshot"
                        :src="`/vue-personal-page/${images.stadiaMobile1}`"
                        alt="Stadia mobile initial screen"
                    />
                </p>
                <p class="text-center">
                    <img
                        class="mobile-screenshot"
                        :src="`/vue-personal-page/${images.stadiaMobile2}`"
                        alt="Stadia mobile development in process disclaimer"
                    />
                </p>
            </div>
            <p>
                On the other hand,
                <b>Stadia has a couple downsides</b>. First and more important:
                <b>the games still need to purchased one by one</b>. You will get some for free when
                you sign up so you can test the platform, but if you want to play any game out of
                that selection you will need to pay for it separately. I didn't care much about
                which game to play so I tested out the four of them, beeing
                <a href="https://en.wikipedia.org/wiki/Destiny_2" target="_blank">Destiny 2</a> the
                only one I really enjoyed (and almost got addicted to). I found other interesting
                titles, but too expensive in my opinion. I was expecting Stadia to go for a
                Spotify-like approach and include all the titles in the monthly subscription. I
                won't argue whether there are enough available videogames or not because I trust the
                list will grow as the time goes by, as well as the number of players in the
                community
            </p>
            <p class="text-center">
                <img
                    :src="`/vue-personal-page/${images.stadiaGameStore}`"
                    alt="Stadia game store"
                />
            </p>
            <p>
                Another issue I do must point out are the
                <b>recurrent disconnections</b> I've been suffering <b>while playing</b>, most of
                the times getting a black screen with no error message at all. I couldn't find a way
                to solve it in Stadia forum and, while it just forced my to refresh the browser in a
                <a
                    href="https://www.laptopmag.com/reviews/laptops/dell-latitude-5480"
                    target="_blank"
                    >dell latitude 5480</a
                >
                laptop, it totally made impossible to play in my
                <a href="https://www.laptopmag.com/reviews/laptops/hppavilion-x-360" target="_blank"
                    >HP Pavilion 13 x360</a
                >. I was using a 92Mbps wired internet connection in both cases, so bandwidth was
                clearly not the problem here. This issue is particulary annoying because the game
                keeps running in Stadia servers in the meanwhile, so you can be sure you will have
                died by the time you reconnect.
            </p>
            <p class="text-center">
                <img
                    :src="`/vue-personal-page/${images.stadiaGlitch}`"
                    alt="Stadia glitch while playing Destiny 2"
                />
            </p>
            <p>
                That being said I still belive is worth giving Stadia a chance. Maybe it won't reach
                Netflix success, but it can definitely shift the videogames industry direction for
                good. No matter you are a tech enthusiast, an unconditional videogame player or just
                a curious person, taking advantage of this free month won't hurt you (you can easily
                cancel the subscription when the time arrives) and it will give you a clue of what
                the future of the videogames might look like.
            </p>
            <p class="text-center">
                <img
                    :src="`/vue-personal-page/${images.stadiaSubscription}`"
                    alt="Stadia subscriptions page"
                />
            </p>

            <p>
                Last but not least, an image is supposed to be worth thousand words. Have a look at
                these
                <b>screenshots</b> (you can capture them at any moment by pressing F12) from my
                charming experience with the incredibly well-crafted <b>Destiny 2</b> and stop
                hesitating. Try out Stadia, enjoy your gaming session and see you in the next post
                🎮
            </p>

            <p class="text-center">
                <img
                    :src="`/vue-personal-page/${images.destinyGraphics1}`"
                    alt="Destiny 2 spaceship"
                />
            </p>
            <p class="text-center">
                <img
                    :src="`/vue-personal-page/${images.destinyGraphics2}`"
                    alt="Destiny 2 snowed landscape"
                />
            </p>
            <p class="text-center">
                <img
                    :src="`/vue-personal-page/${images.destinyGraphics3}`"
                    alt="Destiny 2 fantasy scene"
                />
            </p>
            <p class="text-center">
                <img
                    :src="`/vue-personal-page/${images.destinyGraphics4}`"
                    alt="Destiny 2 fantasy scene"
                />
            </p>
            <p class="text-center">
                <video
                    width="100%"
                    controls
                    :src="`/vue-personal-page/${images.destinyGraphics5}`"
                />
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['isRenderedFromList', 'images']
};
</script>

<style lang="scss" scoped>
.blog-entry img.mobile-screenshot {
    max-width: 300px;
}
</style>
