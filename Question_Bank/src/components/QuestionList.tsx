import { motion } from 'framer-motion';
import QuestionCard from './QuestionCard';

interface Question {
  id: number;
  category: string;
  question: string;
  answer: string;
}

interface QuestionListProps {
  questions: Question[];
}

export default function QuestionList({ questions }: QuestionListProps) {
  if (questions.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20"
      >
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl border border-slate-200/50 dark:border-slate-700/50 p-12 max-w-md mx-auto shadow-xl">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            No questions found
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            Try adjusting your search or filter criteria
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {questions.map((question, index) => (
        <QuestionCard key={question.id} question={question} index={index} />
      ))}
    </div>
  );
}
