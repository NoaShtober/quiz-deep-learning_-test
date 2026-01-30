// Central registry of all flashcard sets
// Add new flashcard sets here by importing them and adding to the array

import flashcards001 from './flashcards-001-basics.js';
import flashcards002 from './flashcards-002-regularization.js';
import flashcards003 from './flashcards-003-cnn.js';
import flashcards004 from './flashcards-004-optimizers.js';
import flashcards005 from './flashcards-005-pytorch.js';
import flashcards006 from './flashcards-006-math.js';

// Add all flashcard sets to this array
// When you create a new flashcard file, import it above and add it here
export const allFlashcards = [
  flashcards001,
  flashcards002,
  flashcards003,
  flashcards004,
  flashcards005,
  flashcards006,
];

// Helper function to get flashcard set by ID
export const getFlashcardsById = (id) => {
  return allFlashcards.find(fc => fc.id === id);
};
