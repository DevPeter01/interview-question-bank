import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 dark:from-blue-600/20 dark:to-cyan-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 dark:from-emerald-600/20 dark:to-teal-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-1/3 w-80 h-80 bg-gradient-to-br from-violet-400/30 to-fuchsia-400/30 dark:from-violet-600/20 dark:to-fuchsia-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-orange-400/20 dark:from-amber-600/15 dark:to-orange-600/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.25, 1],
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
    </div>
  );
}
