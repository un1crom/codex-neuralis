# Codex Neuralis V1 - Development Plan

## Overview
Building the full first version of Codex Neuralis - a brain-health reading recommendation platform with Renaissance aesthetic and cellular automata visuals.

## Core Features for V1

### 1. Onboarding Flow
- [ ] Welcome screen with Renaissance aesthetic
- [ ] Reading Exercise calibration
  - Timed reading of calibrated passage
  - Reading speed measurement
  - Comprehension questions
  - Emotional engagement rating
- [ ] Cognitive Survey
  - Reading history & preferences
  - Goals selection (empathy, memory, analytical reasoning, patience)
  - Current reading habits assessment
  - Attention/focus self-evaluation

### 2. Cognitive Profile Generation
- [ ] Calculate initial "Reading Brain Age"
- [ ] Identify cognitive strengths and gaps
- [ ] Generate personalized cognitive profile
- [ ] Store baseline metrics for tracking progress

### 3. Immediate Recommendations
- [ ] Essays (in-app reading available)
- [ ] Books (external recommendations)
- [ ] Gap-filling recommendations based on cognitive profile
- [ ] Categories: Empathy-building fiction, Analytical non-fiction, Poetry, Philosophy

### 4. In-App Reader
- [ ] Distraction-free reading interface
- [ ] Renaissance-styled typography
- [ ] Curated essay collection (public domain texts)
- [ ] Reading session tracking within reader
- [ ] Post-reading reflection prompts

### 5. Main Dashboard
- [ ] Reading Brain Age display
- [ ] Quick stats (books, sessions, pages, hours)
- [ ] Reading activity visualization (30-day chart)
- [ ] Modality breakdown (deep/standard/skim/browse)
- [ ] Personalized recommendations panel

### 6. Library & Tracking
- [ ] Book management (add, edit, remove)
- [ ] Session logging with modality selection
- [ ] Attention quality slider
- [ ] Notes and reflection capture
- [ ] Reading history view

### 7. Visual Design
- [ ] Renaissance color palette (burnt umber, travertine, gold leaf, verdigris)
- [ ] Cellular automata background (Rule 110)
- [ ] Cormorant Garamond / Crimson Text typography
- [ ] Fresco-style card components
- [ ] Chiaroscuro data visualization

## Technical Stack
- Pure HTML5/CSS3/JavaScript (no frameworks)
- IndexedDB/LocalStorage for persistence
- Canvas API for cellular automata & visualizations
- Offline-first architecture
- Single downloadable HTML file

## Content Library (In-App Essays)
1. "On the Shortness of Life" - Seneca (Philosophy/Reflection)
2. "Self-Reliance" excerpt - Emerson (Personal Growth)
3. "The Library of Babel" - Borges (Fiction/Mind-bending)
4. "A Room of One's Own" excerpt - Woolf (Perspective/Empathy)
5. "Meditations" excerpts - Marcus Aurelius (Philosophy)

## File Structure
```
codex-neuralis/
├── index.html          # Main application (V1)
├── README.md           # Project documentation
├── TODO.md             # This file
├── codex_neuralis.html # Original prototype
└── prototype_index.html # Simple prototype
```
