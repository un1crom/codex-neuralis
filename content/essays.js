/**
 * Codex Neuralis - Essay Content Library
 * Curated public domain texts for in-app reading
 */

export const ESSAYS = [
    {
        id: 'seneca-shortness',
        title: 'On the Shortness of Life',
        author: 'Seneca',
        category: 'Philosophy',
        wordCount: 8500,
        estimatedMinutes: 42,
        content: `
It is not that we have a short time to live, but that we waste a lot of it...
[Full essay content would be included here]
        `.trim(),
        comprehensionQuestions: [
            {
                id: 'q1',
                question: 'What is Seneca\'s main argument about life\'s length?',
                options: ['Life is too short', 'Life is long enough if used wisely', 'Life cannot be measured', 'Life is meaningless'],
                correctIndex: 1,
                explanation: 'Seneca argues life is sufficient if we invest it well rather than waste it.'
            }
        ]
    },
    {
        id: 'emerson-selfreliance',
        title: 'Self-Reliance',
        author: 'Ralph Waldo Emerson',
        category: 'Philosophy',
        wordCount: 9200,
        estimatedMinutes: 46,
        content: `
There is a time in every man's education when he arrives at the conviction...
[Full essay content would be included here]
        `.trim(),
        comprehensionQuestions: []
    },
    {
        id: 'borges-library',
        title: 'The Library of Babel',
        author: 'Jorge Luis Borges',
        category: 'Fiction',
        wordCount: 3500,
        estimatedMinutes: 18,
        content: `
The universe (which others call the Library) is composed of an indefinite...
[Full story content would be included here]
        `.trim(),
        comprehensionQuestions: []
    },
    {
        id: 'woolf-room',
        title: 'A Room of One\'s Own (Excerpt)',
        author: 'Virginia Woolf',
        category: 'Essay',
        wordCount: 4200,
        estimatedMinutes: 21,
        content: `
But, you may say, we asked you to speak about women and fiction...
[Excerpt content would be included here]
        `.trim(),
        comprehensionQuestions: []
    },
    {
        id: 'aurelius-meditations',
        title: 'Meditations (Selected)',
        author: 'Marcus Aurelius',
        category: 'Philosophy',
        wordCount: 5000,
        estimatedMinutes: 25,
        content: `
Begin the morning by saying to thyself, I shall meet with the busybody...
[Selected passages would be included here]
        `.trim(),
        comprehensionQuestions: []
    }
];

export function getEssayById(id) {
    return ESSAYS.find(e => e.id === id) || null;
}

export function getEssaysByCategory(category) {
    return ESSAYS.filter(e => e.category === category);
}

export function getAllEssays() {
    return ESSAYS;
}
