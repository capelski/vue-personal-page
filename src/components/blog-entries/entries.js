const entries = [
    'agility-rocks',
    'leaked-api-key',
    'meaning-of-life',
    'four-coin-challenge',
    'progressive-web-apps',
    'existential-injustice'
];

const hiddenEntries = [
    'injusticia-existencial'
];

const linkedEntries = entries
    .map((entry, index) => {
        return {
            following: index < entries.length - 1 ? entries[index + 1] : undefined,
            id: entry,
            previous: index > 0 ? entries[index - 1] : undefined,
        };
    })
    .concat(hiddenEntries.map(entry => ({ id: entry })))
    .reduce((reducedEntries, next) => ({
        ...reducedEntries,
        [next.id]: next
    }), {});
    
module.exports = linkedEntries;