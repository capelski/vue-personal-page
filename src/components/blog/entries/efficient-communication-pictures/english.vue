<template>
    <div>
        <p>
            What would I know about efficient communication? Well, not that much to be honest. That's why I used this confinement time to improve my social skills through Brandon Hakim's
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
                    <p>You can lead people to an answer, but you can't give it to them. The following three elements address the subconscious rather than the rational mind, so they are more likely to be accepted by the other person</p>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-4">
                    <PersuasionResource
                        description="Maybe you think you have the answer to someone's problems but giving the answer straight away meets rational resistance from the other person. Maybe you think the other person is mistaking but you are the one who got it wrong. Questions are a great way to get/provide deeper explanations and sometimes help realizing about wrong assumptions"
                        :image="images.questions"
                        imageAlt="Question mark in the shape of a lightbulb"
                        title="Questions"
                    />
                </div>
                <div class="col-sm-4">
                    <PersuasionResource
                        description="Stories are more objective than ideas and beliefs. By expressing your points in the form of an story, you separate your opinions from the concepts, letting the other person look at the subject through impartial lenses and understanding it according to their own beliefs"
                        :image="images.stories"
                        imageAlt="Binoculars"
                        title="Stories"
                    />
                </div>
                <div class="col-sm-4">
                    <PersuasionResource
                        description="The best way to explain a concept to someone is by using the knowledge they already have, even if is not directly connected to the subject. Metaphors are a great technique to translate your ideas into another field where the person might feel more comfortable"
                        :image="images.metaphors"
                        imageAlt="Translation representation"
                        title="Metaphors"
                    />
                </div>
            </div>

            <h4 class="persuasion-header">Persuasion stages</h4>

            <p>If you think of the last time somebody convinced you to do something, they probably went through some of the following stages. Covering them all will help you showing the other person that you care about them rather than getting them thinking you are trying to manipulate them for your own selfish reasons.</p>

            <p>You can split the stages throughout multiple conversations or cover them all in a row if the other person is connecting with you enough. You can also skip stages if you have already been there before with the person you are trying to convince.</p>

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
                description="Listen to other person emotions and point of view. Connect yourself to that emotions if possible. If you can see negative consequences from the current situation, expose them so you prove to the other person that you feel their pain"
                :image="images.understand"
                title="Understand"
            />

            <PersuasionStage
                description="Find out about the ideal situation the other person would like to be in. Often we chase some self imposed goals and we don't realize why we feel certain desires. Questions are the best way to go deeper and discover the real reasons of a person"
                :image="images.explore"
                title="Explore"
            />

            <PersuasionStage
                description="Find out the other person motivation level, how ready are them from 0 to 10 to take action in order to improve their current situation"
                :image="images.discover"
                title="Discover"
            />

            <PersuasionStage
                description="Introduce your purpose sincerely. Give an honest option to decline the offer, so the other person doesn't feel pressed. If possible, keep a positive aspect of your offer untold, to reveal it at the end of the persuasion"
                :image="images.offer"
                title="Offer"
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
                description="At this point, the person might feel they made a wrong decision. Thank them for making the decision and set the expectations on the next steps"
                :image="images.clarify"
                title="Clarify"
            />

            <PersuasionStage
                description="If you managed to kept untold a positive aspect of your suggestion, reveal it here as a bonus to make the other person feel even more comfortable for their decision making"
                :image="images.dazzle"
                title="Dazzle"
            />

            <h4 class="persuasion-header">Persuasive traits development</h4>

            <p>Understanding the previous stages will give you some advantage next time you try to convince someone but the best way to do so is by generating trust. The following exercises will help you developing personality traits that most people appreciate, making it easier for you to reach people</p>

            <div class="row">
                <div class="col-sm-4">
                    <PersuasionResource
                        description="People will listen to you almost unconditionally if they know you truly care about them. Practice demonstrating you care by searching for 3 things to appreciate in people that surrounds you"
                        :image="images.care"
                        imageAlt="Band-aids"
                        title="Caring"
                    />
                </div>
                <div class="col-sm-4">
                    <PersuasionResource
                        description="You need to be the best version of yourself in order to inspire other people. Find what gets you feeling at your best and promote it in your life. Might be swimming, playing the guitar, running, reading, uploading videos to your YouTube channel, etc. Get yourself as motivated as you need to be!"
                        :image="images.motivation"
                        imageAlt="Flexing biceps"
                        title="Motivated"
                    />
                </div>
                <div class="col-sm-4">
                    <PersuasionResource
                        description="We usually like to listen to people who sound convinced about what they say. Improve your confidence by putting a mirror in front of you and telling yourself how you want to behave. It might sound stupid, but it can help you understanding how convincent you sound when you speak"
                        :image="images.confidence"
                        imageAlt="Raised fist"
                        title="Confident"
                    />
                </div>
                <div class="col-sm-4">
                    <PersuasionResource
                        description="Haste and jitters make you look anxious and people feel uncomfortable. Accepting the reality as is helps controlling the urge and realizing that you don't need anything from anyone. Meditate regularly to improve the inner calm. 10 minutes a day can be enough"
                        :image="images.calm"
                        imageAlt="Person meditating"
                        title="Calmed"
                    />
                </div>
                <div class="col-sm-4">
                    <PersuasionResource
                        description="Persuasion happens when your emotions are transmitted in their purest form to the listener. You can be more contagious by regularly singing or dancing, at closed doors if you like. Another good exercise is to read out loud with entusiasm for 10 minutes every day"
                        :image="images.contagion"
                        imageAlt="Lightning"
                        title="Contagious"
                    />
                </div>
                <div class="col-sm-4">
                    <PersuasionResource
                        description="Your word is your value. Practice what you preach and you will generate trust. Practice being consistent by sticking to some good habit of your choice, e.g., go to bed at the same time for 15 days in a row, read half an hour everyday with no excuses, etc."
                        :image="images.consistency"
                        imageAlt="Gear"
                        title="Consistent"
                    />
                </div>
            </div>

            <p>And that's about it! As usual when writting about such subjective and abstract topics, I can't help feeling it all sounds like dime-store psychology. In an attempt to make it more bearable I decided to draw some visuals, but still I am not sure I did succeed. Maybe someone will now think which aspects they can apply to their interactions to become more persuasive. Maybe it will help someone realizing it is in their hands to make a better impression on other people. In the worst case, you can always make fun of my drawing skills 😃 See you in the next post!</p>
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