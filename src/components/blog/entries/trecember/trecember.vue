<template>
    <BlogEntry
        :date="date"
        description="How a 13 months calendar would make our lifes easier"
        duration="5"
        :entry="entry"
        :isRenderedFromList="isRenderedFromList"
        :allTags="allTags"
        :tags="[tags.Thoughts]"
        :title="title"
    >
        <p>
            At this point in your life there might be a few things you are not familiar with: wasabi, free falling or David Lynch's movies for instance. The gregorian calendar however is not one of them. You learned it in school when you were a child, got used to it and never question it again. Brace yourselves because today
            <b>the questioning day has arrived</b>. What would a calendar with thirteen months look like?
        </p>
        <div v-if="!isRenderedFromList">
            <p>So you probably have already realised that the our calendar system is not perfect. "yeah, there a few things that could be improved, but... who cares?". Well, I do! When you suffer a bit of OCD (Obsessive Compulsive Disorder) as I do, there are certain types of untidiness that make you nervous. These are the main aspects of the gregorian calendar I find profoundly troubling:</p>
            <ul class="numbered">
                <li>
                    <b>Different number of days in every month</b>. It makes the month an unreliable time unit. Who in his god damned mind creates a measurement system with non-constant units? Imagine than on odd weeks a meter would equal 100cm but on even weeks a meter would only equal 98cm. Good luck managing distances my friend!
                </li>
                <li>
                    <b>Unpredictable week day for a day in a month</b>. This happens because months don't contain an entire number of weeks and because each month starts the week day immediatley after the previous month ends. It leads to situations like: "Are you up for skiing next month 14th to 16th?", "I don't know. Let me check the calendar first".
                </li>
                <li>
                    <b>Unpredictable week day for a day in a year</b>. This happens because years don't contain an entire number of weeks and because each year starts the week day immediately after the previous year ends. It leads to public holidays taking place in a different week day every year (e.g. wasted holidays when Christmas takes place on a Sunday).
                </li>
            </ul>
            <p class="text-center">
                <img
                    :src="`${images.notCrazy}?$modena=vue-personal-page`"
                    alt="Person claiming not to be crazy GIF"
                />
            </p>
            <p>We could create a thousand different calendar systems that would track the time in a similar way the current system does, but adding some advantages (e.g. having 52 single-week months). The only restriction the systems must respect is that, at the long run, the year must contain the number of days the Earth takes to complete an orbit around the sun (365.26 days). Some examples:</p>
            <ul class="numbered">
                <li>Each month could have 30 days, except December with 35</li>
                <li>Odd months could have 28 days and even months 35 days, except December with 22</li>
                <li>The year could have 364 days and add an extra week to December every seven years</li>
            </ul>
            <p>No matter which system you choose the only requirement to make it work is that people around the planet accepts it. So, without further ado, here I am presenting mine in a visual manner 🚀🍾 The idea is very simple: adding a 13th month to make all of them 28 days long, except the last one that will contain 29.</p>
            <div class="screen-splitter">
                <div>
                    <h5>Trecember year</h5>
                    <Year
                        :months="trecemberMonths"
                        :weeks="trecemberWeeks"
                        :onDayClick="onDayClick"
                        :selectedDay="selectedDay"
                    />
                </div>
                <div>
                    <h5>Conventional year</h5>
                    <Year
                        :months="conventionalMonths"
                        :weeks="conventionalWeeks"
                        :onDayClick="onDayClick"
                        :selectedDay="selectedDay"
                    />
                </div>
            </div>
            <p>
                This approach resolves the problems 1 and 2 but keeps the problem 3. A very sophisticated startegy similar to the gregorian calendar leap year would consist in make the year 364 days and add an extra week every now and then. Precisely, we would need to add 5 weeks every 28 years (in mathematical terms,
                <i>(4·365 + 1)x = (4·364)x + 7y</i>), which makes it a bit hard to distribute.
            </p>
            <p>Instead of wrapping our heads around it, we can take the much easier approach of keeping the leap years and forcing the year to start on Monday, no matter what the previous year last day was. At practice this would mean having two mondays on a row (29th of Trecember and 1st of January) once a year, but given the second one is always a public holiday I think we will survive.</p>
            <p>And that is the end of it! In case you like the Trecember system and if you think the pros outweight the cons you should then start changing the memorable dates of your life's history, because your birthday will no longer be November 10th, but December 6th. See you in the next post!</p>
        </div>
    </BlogEntry>
</template>

<script>
import BlogEntry from '../../BlogEntry';
import { tags } from '../../tags';
import entriesRegistry from '../registry';
import notCrazy from './not-crazy.gif';
import Year from './year';

const date = '2019-01-12';
const entry = entriesRegistry['trecember'];
const title = 'Trecember';

const getNumbers = length =>
    ' '
        .repeat(length)
        .split('')
        .map((_, i) => i + 1);

const conventionalMonths = [
    {
        days: getNumbers(31),
        name: 'January',
        weeks: 5
    },
    {
        days: getNumbers(28),
        name: 'February',
        weeks: 4
    },
    {
        days: getNumbers(31),
        name: 'March',
        weeks: 4
    },
    {
        days: getNumbers(30),
        name: 'April',
        weeks: 5
    },
    {
        days: getNumbers(31),
        name: 'May',
        weeks: 4
    },
    {
        days: getNumbers(30),
        name: 'June',
        weeks: 4
    },
    {
        days: getNumbers(31),
        name: 'July',
        weeks: 5
    },
    {
        days: getNumbers(31),
        name: 'August',
        weeks: 4
    },
    {
        days: getNumbers(30),
        name: 'September',
        weeks: 4
    },
    {
        days: getNumbers(31),
        name: 'October',
        weeks: 5
    },
    {
        days: getNumbers(30),
        name: 'November',
        weeks: 4
    },
    {
        days: getNumbers(31),
        name: 'December',
        weeks: 5
    }
];

const trecemberMonths = conventionalMonths
    .map(m => ({ days: getNumbers(28), name: m.name, weeks: 4 }))
    .concat({ days: getNumbers(29), name: 'Trecember', weeks: 5 });

const getDays = months =>
    months.reduce((_reduced, next, index) => {
        const days = next.days.map(day => ({ number: day, isOddMonth: index % 2 === 0 }));
        return _reduced.concat(days);
    }, []);

const getYearWeeks = months => {
    const yearDays = getDays(months);
    const yearWeeks = [];
    for (let i = 0; i < yearDays.length; i += 7) {
        yearWeeks.push(yearDays.slice(i, i + 7));
    }
    return yearWeeks;
};

export default {
    name: entry.id,
    components: {
        BlogEntry,
        Year
    },
    props: ['isRenderedFromList', 'allTags'],
    data() {
        return {
            date,
            entry,
            images: {
                notCrazy
            },
            conventionalMonths,
            conventionalWeeks: getYearWeeks(conventionalMonths),
            selectedDay: undefined,
            trecemberMonths,
            trecemberWeeks: getYearWeeks(trecemberMonths),
            tags,
            title
        };
    },
    methods: {
        onDayClick(dayNumber) {
            this.selectedDay = dayNumber;
        }
    }
};
</script>

<style lang="scss">
.screen-splitter {
    display: block;
    margin: 30px 0;

    @media (min-width: 768px) {
        display: flex;
    }

    & > * {
        flex-grow: 1;
        margin: 0 5px;
    }
}
</style>