const entriesDictionary = {
    'agility-rocks': ['en'],
    'leaked-api-key': ['en'],
    'meaning-of-life': ['en'],
    'four-coin-challenge': ['en'],
    'progressive-web-apps': ['en'],
    'existential-injustice': ['ca', 'en'],
    'subscribers-list': ['en'],
    'kanban-goals-tracking': ['en'],
    trecember: ['en'],
    'web-dev-on-steroids-i': ['en'],
    'web-dev-on-steroids-ii': ['en'],
    'sudoku-generation': ['ca', 'en'],
    'persuasion-in-pictures': ['en'],
    'stadia-platform': ['en'],
    'guitar-exercises': ['es']
};
const entriesKeys = Object.keys(entriesDictionary);

const linkedEntries = entriesKeys
    .map((entryKey, index) => {
        return {
            following: index < entriesKeys.length - 1 ? entriesKeys[index + 1] : undefined,
            id: entryKey,
            languages: entriesDictionary[entryKey],
            previous: index > 0 ? entriesKeys[index - 1] : undefined
        };
    })
    .reduce(
        (reducedEntries, next) => ({
            ...reducedEntries,
            [next.id]: next
        }),
        {}
    );

module.exports = linkedEntries;
