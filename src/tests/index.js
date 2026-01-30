// Central registry of all tests
// Add new tests here by importing them and adding to the array

import test001 from './test-001-moed-a1.js';
import test002 from './test-002-moed-a2.js';
import test003 from './test-003-moed-b.js';

// Add all tests to this array
// When you create a new test file, import it above and add it here
export const allTests = [
  test001,
  test002,
  test003,
];

// Helper to get test by ID
export const getTestById = (id) => allTests.find(t => t.id === id);
