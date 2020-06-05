<template>
    <div>
        <p>
            What would I know about efficient communication? Well, not that much to be honest. That's why I used this confinement time to improve my skills through Brandon Hakim's
            <a
                href="https://www.udemy.com/course/persuasion-masterclass-how-to-powerfully-influence-anyone/"
                target="_blank"
            >persuasion</a> udemy course. Regardless how much I learned, I do recommend the course because it made me ponder about how people communicates effectively (and it inspired me to draw the pictures below). Here is a quick summary of the course main points. Did you already know them all?
        </p>

        <div v-if="!isRenderedFromList">
            <div class="row persuasion-header">
                <div class="col-sm-2 col-6 text-center">
                    <img
                        :src="`${images.avoid}?$modena=vue-personal-page`"
                        alt="Arrow avoiding object"
                    />
                </div>
                <div class="col-sm-10 col-6">
                    <h4>Avoid</h4>
                    <p>The following three patterns are usual in irritating conversations. They make sense from a rational point of view, but they are not effective to emphatize with the other person. Try to stay away from them</p>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-4">
                    <PersuasionResource
                        description="Highlighting the other person mistakes might be perceived as an attempt to make them look stupid or uninformed, even when doing it with the best of your intentions. If you think the other person is mistaking, ask for clarifications rather than refuting their points"
                        :image="images.bullseye"
                        imageAlt="Weapon bullseye"
                        title="Make people wrong"
                    />
                </div>
                <div class="col-sm-4">
                    <PersuasionResource
                        description="If you just focus on getting the other person to understand you, you show yourself as an egocentric person. Just like babies do, you might end up getting what you want, but the other person might not be happy about it. You still will have a chance to explain yourself after listening to the other person"
                        :image="images.pacifier"
                        imageAlt="Pacifier"
                        title="Explain yourself first"
                    />
                </div>
                <div class="col-sm-4">
                    <PersuasionResource
                        description="What works for you might not work for others. Avoid preaching your personal religion to people who might find themselves in a different situation. Your reasons might end up working for them too, but they will have to get to them on their own way"
                        :image="images.preach"
                        imageAlt="Representation of god"
                        title="Give your reasons"
                    />
                </div>
            </div>

            <div class="row persuasion-header">
                <div class="col-sm-2 col-6 text-center">
                    <img
                        :src="`${images.adopt}?$modena=vue-personal-page`"
                        alt="Hand waiting to receive something"
                    />
                </div>
                <div class="col-sm-10 col-6">
                    <h4>Adopt</h4>
                    <p>You can lead people to an answer, but you can't give it to them. Get used to this three elements to reach people</p>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-4">
                    <PersuasionResource
                        description="TODO"
                        :image="images.questions"
                        imageAlt="Question mark in the shape of a lightbulb"
                        title="Questions"
                    />
                </div>
                <div class="col-sm-4">
                    <PersuasionResource
                        description="TODO"
                        :image="images.stories"
                        imageAlt="Binoculars"
                        title="Stories"
                    />
                </div>
                <div class="col-sm-4">
                    <PersuasionResource
                        description="TODO"
                        :image="images.metaphors"
                        imageAlt="Translation representation"
                        title="Metaphors"
                    />
                </div>
            </div>

            <h4>Persuasion stages</h4>

            <PersuasionStage
                description="Meet the other person at their emotional level. If you can't empathize with them, leave the persuasion for another moment"
                :image="images.encounter"
                title="Encounter"
            />

            <PersuasionStage
                description="Introduce your subject in the conversation and make sure the other person is willing to talk about it now. If they are not, persuasion is bound to fail. Again, leave it for another ocasion"
                :image="images.allowance"
                title="Allowance"
            />

            <PersuasionStage
                description="Listen to other person emotions and point of view. Connect yourself to that emotions if possible. If you can see derived problems from the current situation, expose them so you prove to the other person that you feel their pain"
                :image="images.understand"
                title="Understand"
            />

            <PersuasionStage
                description="Find out about the ideal situation, the real reasons"
                :image="images.explore"
                title="Explore"
            />

            <PersuasionStage
                description="Find out the motivation level"
                :image="images.discover"
                title="Discover"
            />

            <PersuasionStage
                description="Introduce your purpose sincerely. Give an honest option to decline the offer, so the other person doesn't feel pressed. If possible, keep a positive aspect of your suggestion untold, to reveal it at the end of the persuasion"
                :image="images.suggest"
                title="Suggest"
            />

            <PersuasionStage
                description="Detect skepticisim and address obstacles. If an obstacle makes the persuasion impossible, don't insisit. You will have to leave it here until you come up with a way to dodge that obstacle"
                :image="images.workaround"
                title="Workaround"
            />

            <PersuasionStage
                description="Establish some commitment with the purpose. Set a date for the next step or require an action from the other person"
                :image="images.forge"
                title="Forge"
            />

            <PersuasionStage
                description="Appreciate for making the decision and set the expectations on the next step"
                :image="images.clarify"
                title="Clarify"
            />

            <PersuasionStage
                description="If you managed to kept untold a positive aspect of your suggestion, reveal it here as a bonus to make the other person feel even more comfortable for their decision making"
                :image="images.dazzle"
                title="Dazzle"
            />

            <h4>Persuasive traits development</h4>
        </div>
    </div>
</template>

<script>
import PersuasionResource from './persuasion-resource';
import PersuasionStage from './persuasion-stage';

export default {
    components: { PersuasionResource, PersuasionStage },
    props: ['isRenderedFromList', 'images']
};
</script>