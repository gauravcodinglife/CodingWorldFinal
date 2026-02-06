
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

// Define the types for quiz data props
type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

type QuizProps = {
  questions: Question[];
  stageTitle: string;
};

export function Quiz({ questions, stageTitle }: QuizProps) {
  const [quizState, setQuizState] = useState<'not-started' | 'in-progress' | 'completed'>('not-started');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [score, setScore] = useState(0);

  const handleStartQuiz = () => {
    setQuizState('in-progress');
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setScore(0);
  };

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers, answer];
    setSelectedAnswers(newAnswers);

    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizState('completed');
    }
  };
  
  const resetQuiz = () => {
    setQuizState('not-started');
  }

  if (quizState === 'not-started') {
    return (
      <div className="text-center p-6 bg-slate-900 rounded-lg">
         <h3 className="font-headline text-2xl font-bold mb-4 text-white">Test Your Knowledge</h3>
        <p className="mb-6 text-slate-300">Take a short quiz to see how well you understand the concepts in {stageTitle}.</p>
        <Button onClick={handleStartQuiz} size="lg">Start Quiz</Button>
      </div>
    );
  }

  if (quizState === 'completed') {
    const wrongAnswers = questions.filter((q, index) => q.correctAnswer !== selectedAnswers[index]);

    return (
      <div className="p-6 bg-slate-900 rounded-lg">
        <h3 className="font-headline text-2xl font-bold mb-2 text-center text-white">Quiz Completed!</h3>
        <p className="text-center text-2xl font-semibold text-cyan-400 mb-6">Your Score: {score} / {questions.length}</p>

        {wrongAnswers.length > 0 && (
          <div>
            <h4 className="font-headline text-xl font-bold mt-8 mb-4 text-white">Review Your Incorrect Answers:</h4>
            <ul className="space-y-6">
              {wrongAnswers.map((question, index) => {
                  const questionIndex = questions.findIndex(q => q.question === question.question);
                  return (
                    <li key={index} className="p-4 bg-slate-800/50 rounded-lg">
                        <p className="font-semibold text-slate-100 mb-2">{question.question}</p>
                        <p className="text-sm text-red-400">Your answer: {selectedAnswers[questionIndex]}</p>
                        <p className="text-sm text-green-400">Correct answer: {question.correctAnswer}</p>
                    </li>
                  )
              })}
            </ul>
             <p className="mt-6 text-center text-slate-300">Review the topics in this stage to improve your understanding.</p>
          </div>
        )}

        {wrongAnswers.length === 0 && (
            <p className="text-center text-green-400 font-semibold text-lg">Congratulations! You got all the answers right!</p>
        )}

        <div className="text-center mt-8">
            <Button onClick={resetQuiz}>Take Quiz Again</Button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="p-6 bg-slate-900 rounded-lg">
        <h3 className="font-headline text-xl font-bold mb-4 text-center text-white">{stageTitle} Quiz</h3>
        <div className="text-right text-sm font-mono text-slate-400 mb-2">Question {currentQuestionIndex + 1} of {questions.length}</div>
        <div className="p-6 bg-slate-800/50 rounded-lg mb-6">
            <p className="text-lg font-semibold text-slate-100">{currentQuestion.question}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion.options.map((option, index) => (
            <Button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                variant="outline"
                className="w-full justify-start text-left h-auto whitespace-normal py-3"
            >
                {option}
            </Button>
            ))}
        </div>
    </div>
  );
}
