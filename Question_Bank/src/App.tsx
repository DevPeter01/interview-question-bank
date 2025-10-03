import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, BookOpen } from 'lucide-react';
import AnimatedBackground from './components/AnimatedBackground';
import SearchFilter from './components/SearchFilter';
import QuestionList from './components/QuestionList';
import questionsData from './questions.json';

interface Question {
  id: number;
  category: string;
  question: string;
  answer: string;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const filteredQuestions = useMemo(() => {
    return (questionsData as Question[]).filter((question) => {
      const matchesSearch =
        searchTerm === '' ||
        question.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        question.answer.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || question.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen relative transition-colors duration-300">
      <AnimatedBackground />

      <div className="relative z-10">
        <header className="py-8 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="p-2.5 bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 rounded-xl shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Interview Question Bank
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Search & Practice
                </p>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-xl border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-amber-500" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </motion.button>
          </div>
        </header>

        <main className="px-6 pb-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Master Your Interview Skills
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Practice with curated questions from Data Structures, Databases, Operating Systems, and Computer Networks
              </p>
            </motion.div>

            <SearchFilter
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-6 text-center"
            >
              <span className="text-slate-600 dark:text-slate-400 font-medium">
                Showing {filteredQuestions.length}{' '}
                {filteredQuestions.length === 1 ? 'question' : 'questions'}
              </span>
            </motion.div>

            <QuestionList questions={filteredQuestions} />
          </div>
        </main>

       
      </div>
    </div>
  );
}

export default App;
