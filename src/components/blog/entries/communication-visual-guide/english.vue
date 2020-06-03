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
            <h4>Avoid</h4>
            <p class="text-center">
                <img :src="`${images.avoid}?$modena=vue-personal-page`" alt="Arrow avoiding object" />
            </p>
            <p>This three patterns are usual in irritating conversations. Make sure you don't include them in yours</p>
            <div class="row">
                <div class="col-sm-4">
                    <h6>Make people wrong</h6>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                    <p class="text-center">
                        <img
                            :src="`${images.bullseye}?$modena=vue-personal-page`"
                            alt="Weapon bullseye"
                        />
                    </p>
                </div>
                <div class="col-sm-4">
                    <h6>Explain yourself first</h6>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                    <p class="text-center">
                        <img :src="`${images.pacifier}?$modena=vue-personal-page`" alt="Pacifier" />
                    </p>
                </div>
                <div class="col-sm-4">
                    <h6>Give your reasons</h6>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                    <p class="text-center">
                        <img
                            :src="`${images.preach}?$modena=vue-personal-page`"
                            alt="Representation of god"
                        />
                    </p>
                </div>
            </div>
            <h4>Adopt</h4>
            <p class="text-center">
                <img
                    :src="`${images.adopt}?$modena=vue-personal-page`"
                    alt="Hand waiting to receive something"
                />
            </p>
            <p>You can lead people to an answer, but you can't give it to them. Get used to this three elements to reach people</p>
            <div class="row">
                <div class="col-sm-4">
                    <h6>Questions</h6>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                    <p class="text-center">
                        <img
                            :src="`${images.questions}?$modena=vue-personal-page`"
                            alt="Question mark in the shape of a lightbulb"
                        />
                    </p>
                </div>
                <div class="col-sm-4">
                    <h6>Stories</h6>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                    <p class="text-center">
                        <img :src="`${images.stories}?$modena=vue-personal-page`" alt="Binoculars" />
                    </p>
                </div>
                <div class="col-sm-4">
                    <h6>Metaphors</h6>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                    <p class="text-center">
                        <img
                            :src="`${images.metaphors}?$modena=vue-personal-page`"
                            alt="Translation representation"
                        />
                    </p>
                </div>
            </div>
            <h4>Formal persuasion</h4>
            <p>Is not about manipulating people but rather knowing how to transimit your point of view and understand the other person's one. It involves multiple stages</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['isRenderedFromList', 'images']
};
</script>