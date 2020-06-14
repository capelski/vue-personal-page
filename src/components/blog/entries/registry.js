const entriesDictionary = {
    'agility-rocks': ['eng'],
    'leaked-api-key': ['eng'],
    'meaning-of-life': ['eng'],
    'four-coin-challenge': ['eng'],
    'progressive-web-apps': ['eng'],
    'existential-injustice': ['cat', 'eng'],
    'subscribers-list': ['eng'],
    'kanban-goals-tracking': ['eng'],
    trecember: ['eng'],
    'web-dev-on-steroids-i': ['eng'],
    'web-dev-on-steroids-ii': ['eng'],
    'sudoku-generation': ['cat', 'eng'],
    'persuasion-in-pictures': ['eng']
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
