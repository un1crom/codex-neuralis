/* ============================================
   DATA STORE - LocalStorage Persistence
   ============================================ */

const STORAGE_KEY = 'codex_neuralis_v1';

// Default app state
const defaultState = {
    onboardingComplete: false,
    profile: {
        createdAt: null,
        calibration: null,
        goals: [],
        readingPreferences: {},
        cognitiveProfile: null
    },
    books: [],
    sessions: [],
    essays: {
        read: [],
        progress: {}
    }
};

let appState = { ...defaultState };

function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            appState = { ...defaultState, ...JSON.parse(saved) };
        }
    } catch (e) {
        console.error('Error loading state:', e);
    }
    return appState;
}

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (e) {
        console.error('Error saving state:', e);
    }
}

function getState() {
    return appState;
}

function updateState(updates) {
    appState = { ...appState, ...updates };
    saveState();
    return appState;
}

function updateProfile(updates) {
    appState.profile = { ...appState.profile, ...updates };
    saveState();
    return appState.profile;
}

function resetState() {
    appState = { ...defaultState };
    saveState();
    return appState;
}

// Export for use in other modules
window.CodexStore = {
    loadState,
    saveState,
    getState,
    updateState,
    updateProfile,
    resetState
};
