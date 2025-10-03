import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface SearchFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const categories = ['All', 'DSA', 'DBMS', 'OS', 'CN'];

export default function SearchFilter({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}: SearchFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto mb-12 space-y-6"
    >
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
        <input
          type="text"
          placeholder="Search questions or answers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 transition-all shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50"
        />
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2.5 rounded-xl font-medium transition-all backdrop-blur-xl ${
              selectedCategory === category
                ? 'bg-blue-500 dark:bg-blue-600 text-white shadow-lg shadow-blue-500/30 dark:shadow-blue-600/30'
                : 'bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
