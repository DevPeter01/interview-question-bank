import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface QuestionCardProps {
  question: {
    id: number;
    category: string;
    question: string;
    answer: string;
  };
  index: number;
}

const categoryColors: Record<string, string> = {
  DSA: 'bg-blue-500/90 dark:bg-blue-600/90',
  DBMS: 'bg-emerald-500/90 dark:bg-emerald-600/90',
  OS: 'bg-violet-500/90 dark:bg-violet-600/90',
  CN: 'bg-amber-500/90 dark:bg-amber-600/90',
};

export default function QuestionCard({ question, index }: QuestionCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 dark:from-slate-800/40 dark:to-slate-800/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />

      <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl overflow-hidden transition-all hover:shadow-2xl hover:border-slate-300/50 dark:hover:border-slate-600/50">
        <div
          className={`${
            categoryColors[question.category]
          } px-4 py-2 flex items-center justify-between`}
        >
          <span className="text-white font-semibold text-sm tracking-wide">
            {question.category}
          </span>
          <span className="text-white/80 text-xs font-medium">
            #{question.id}
          </span>
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
            {question.question}
          </h3>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {question.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 text-white font-medium rounded-xl shadow-lg shadow-blue-500/30 dark:shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-500/40 dark:hover:shadow-blue-600/40 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isOpen ? (
              <>
                <span>Hide Answer</span>
                <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                <span>Show Answer</span>
                <ChevronDown className="w-5 h-5" />
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
