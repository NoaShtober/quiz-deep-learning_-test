import { useState } from 'react'
import { allTests } from './tests'
import { allFlashcards } from './flashcards'
import './App.css'

function App() {
  // Menu state
  const [menuSection, setMenuSection] = useState('main') // 'main', 'tests', 'flashcards'

  // Quiz state
  const [selectedTest, setSelectedTest] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [quizComplete, setQuizComplete] = useState(false)

  // Flashcard state
  const [selectedFlashcardSet, setSelectedFlashcardSet] = useState(null)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  // Derived state from answers
  const currentAnswer = answers[currentQuestion]
  const showResult = currentAnswer !== undefined
  const selectedAnswer = currentAnswer?.selected ?? null
  const score = Object.values(answers).filter(a => a.wasCorrect).length
  const answered = Object.keys(answers).length

  const handleAnswer = (index) => {
    if (showResult) return
    const isCorrect = index === selectedTest.questions[currentQuestion].correct
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: { selected: index, wasCorrect: isCorrect }
    }))
  }

  const resetCurrentQuestion = () => {
    setAnswers(prev => {
      const newAnswers = { ...prev }
      delete newAnswers[currentQuestion]
      return newAnswers
    })
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < selectedTest.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setQuizComplete(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setQuizComplete(false)
  }

  const backToMenu = () => {
    setSelectedTest(null)
    setSelectedFlashcardSet(null)
    setCurrentCardIndex(0)
    setIsFlipped(false)
    resetQuiz()
    setMenuSection('main')
  }

  const backToSection = () => {
    setSelectedTest(null)
    setSelectedFlashcardSet(null)
    setCurrentCardIndex(0)
    setIsFlipped(false)
    resetQuiz()
  }

  // Flashcard navigation
  const flipCard = () => {
    setIsFlipped(!isFlipped)
  }

  const nextCard = () => {
    if (currentCardIndex < selectedFlashcardSet.cards.length - 1) {
      setCurrentCardIndex(prev => prev + 1)
      setIsFlipped(false)
    }
  }

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(prev => prev - 1)
      setIsFlipped(false)
    }
  }

  // Main Menu Screen
  if (menuSection === 'main' && !selectedTest && !selectedFlashcardSet) {
    return (
      <div className="app">
        <div className="quiz-container menu">
          <h1>📚 למידה עמוקה - תרגול</h1>
          <p className="menu-subtitle">בחר קטגוריה:</p>

          <div className="menu-sections">
            <button
              className="section-card tests-section"
              onClick={() => setMenuSection('tests')}
            >
              <span className="section-icon">📝</span>
              <span className="section-name">מבחנים</span>
              <span className="section-info">{allTests.length} מבחנים זמינים</span>
              <span className="section-desc">תרגול שאלות מבחינות קודמות</span>
            </button>

            <button
              className="section-card flashcards-section"
              onClick={() => setMenuSection('flashcards')}
            >
              <span className="section-icon">🎴</span>
              <span className="section-name">כרטיסיות</span>
              <span className="section-info">{allFlashcards.length} סטים זמינים</span>
              <span className="section-desc">חזרה על מושגים ומונחים</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Tests Selection Screen
  if (menuSection === 'tests' && !selectedTest) {
    return (
      <div className="app">
        <div className="quiz-container menu">
          <div className="menu-header">
            <button className="btn-back" onClick={() => setMenuSection('main')}>← תפריט ראשי</button>
            <h1>📝 מבחנים</h1>
          </div>
          <p className="menu-subtitle">בחר מבחן להתחיל:</p>

          <div className="test-list">
            {allTests.map((test) => (
              <button
                key={test.id}
                className="test-card"
                onClick={() => setSelectedTest(test)}
              >
                <span className="test-id">{test.id}</span>
                <span className="test-name">{test.name}</span>
                <span className="test-info">{test.questions.length} שאלות</span>
                {test.description && (
                  <span className="test-desc">{test.description}</span>
                )}
              </button>
            ))}
          </div>

          {allTests.length === 0 && (
            <p className="no-tests">אין מבחנים זמינים. הוסף מבחנים לתיקיית tests/</p>
          )}
        </div>
      </div>
    )
  }

  // Flashcards Selection Screen
  if (menuSection === 'flashcards' && !selectedFlashcardSet) {
    return (
      <div className="app">
        <div className="quiz-container menu">
          <div className="menu-header">
            <button className="btn-back" onClick={() => setMenuSection('main')}>← תפריט ראשי</button>
            <h1>🎴 כרטיסיות</h1>
          </div>
          <p className="menu-subtitle">בחר סט כרטיסיות:</p>

          <div className="test-list">
            {allFlashcards.map((set) => (
              <button
                key={set.id}
                className="test-card flashcard-set-card"
                onClick={() => setSelectedFlashcardSet(set)}
              >
                <span className="test-id">{set.id}</span>
                <span className="test-name">{set.name}</span>
                <span className="test-info">{set.cards.length} כרטיסיות</span>
                {set.description && (
                  <span className="test-desc">{set.description}</span>
                )}
              </button>
            ))}
          </div>

          {allFlashcards.length === 0 && (
            <p className="no-tests">אין כרטיסיות זמינות. הוסף כרטיסיות לתיקיית flashcards/</p>
          )}
        </div>
      </div>
    )
  }

  // Flashcard Viewing Screen
  if (selectedFlashcardSet) {
    const currentCard = selectedFlashcardSet.cards[currentCardIndex]

    return (
      <div className="app">
        <div className="quiz-container flashcard-container">
          <div className="header">
            <div className="header-top">
              <button className="btn-back" onClick={backToSection}>← כרטיסיות</button>
              <h1>{selectedFlashcardSet.name}</h1>
            </div>
            <div className="progress">
              <span>כרטיסיה {currentCardIndex + 1} מתוך {selectedFlashcardSet.cards.length}</span>
              <span className="flashcard-hint">לחץ על הכרטיסיה להפוך</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill flashcard-progress"
                style={{ width: `${((currentCardIndex + 1) / selectedFlashcardSet.cards.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="flashcard-area" onClick={flipCard}>
            <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
              <div className="flashcard-inner">
                <div className="flashcard-front">
                  <span className="flashcard-label">שאלה</span>
                  <p className="flashcard-text">{currentCard.front}</p>
                </div>
                <div className="flashcard-back">
                  <span className="flashcard-label">תשובה</span>
                  <p className="flashcard-text">{currentCard.back}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="question-nav">
            <button
              className="btn-nav"
              onClick={prevCard}
              disabled={currentCardIndex === 0}
            >
              → הקודמת
            </button>

            <button
              className="btn-flip"
              onClick={flipCard}
              title="הפוך כרטיסיה"
            >
              ↻
            </button>

            <button
              className="btn-nav btn-nav-primary"
              onClick={nextCard}
              disabled={currentCardIndex === selectedFlashcardSet.cards.length - 1}
            >
              הבאה ←
            </button>
          </div>
        </div>
      </div>
    )
  }

  const question = selectedTest.questions[currentQuestion]

  // Quiz Complete Screen
  if (quizComplete) {
    return (
      <div className="app">
        <div className="quiz-container complete">
          <h1>🎉 סיימת!</h1>
          <p className="test-title">{selectedTest.name}</p>
          <div className="final-score">
            <p>הציון שלך:</p>
            <span className="score-big">{score} / {selectedTest.questions.length}</span>
            <p className="percentage">{Math.round((score / selectedTest.questions.length) * 100)}%</p>
          </div>
          <div className="complete-buttons">
            <button className="btn-primary" onClick={resetQuiz}>
              נסה שוב
            </button>
            <button className="btn-secondary" onClick={backToSection}>
              חזרה למבחנים
            </button>
            <button className="btn-secondary" onClick={backToMenu}>
              תפריט ראשי
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Quiz Screen
  return (
    <div className="app">
      <div className="quiz-container">
        <div className="header">
          <div className="header-top">
            <button className="btn-back" onClick={backToSection}>← מבחנים</button>
            <h1>{selectedTest.name}</h1>
          </div>
          <div className="progress">
            <span>שאלה {currentQuestion + 1} מתוך {selectedTest.questions.length}</span>
            <span className="score">ניקוד: {score}/{answered}</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentQuestion + 1) / selectedTest.questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="question-section">
          <h2 className="question-text">{question.question}</h2>
        </div>

        <div className="options">
          {question.options.map((option, index) => {
            let className = 'option'
            if (showResult) {
              if (index === question.correct) {
                className += ' correct'
              } else if (index === selectedAnswer) {
                className += ' incorrect'
              }
            } else if (index === selectedAnswer) {
              className += ' selected'
            }

            return (
              <button
                key={index}
                className={className}
                onClick={() => handleAnswer(index)}
                disabled={showResult}
              >
                <span className="option-letter">{String.fromCharCode(1488 + index)}</span>
                <span className="option-text">{option}</span>
              </button>
            )
          })}
        </div>

        {showResult && (
          <div className={`feedback ${selectedAnswer === question.correct ? 'correct' : 'incorrect'}`}>
            <p className="feedback-title">
              {selectedAnswer === question.correct ? '✅ נכון!' : '❌ לא נכון'}
            </p>
            {question.explanation && (
              <p className="explanation">{question.explanation}</p>
            )}
          </div>
        )}

        <div className="question-nav">
          <button
            className="btn-nav"
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
          >
            → הקודמת
          </button>

          <button
            className="btn-reset"
            onClick={resetCurrentQuestion}
            disabled={!showResult}
            title="נקה תשובה"
          >
            ↺
          </button>

          <button
            className="btn-nav btn-nav-primary"
            onClick={nextQuestion}
            disabled={currentQuestion === selectedTest.questions.length - 1 && !showResult}
          >
            {currentQuestion < selectedTest.questions.length - 1 ? 'הבאה ←' : 'סיום'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
