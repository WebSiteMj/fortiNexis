export const accordionTheme = { 
  root: {
    base: "divide-y divide-gray-300 border-gray-300 dark:divide-gray-700 dark:border-gray-700 rounded-lg shadow-lg",
  },
  content: {
    base: "p-5 bg-blue-50 dark:bg-blue-900 first:rounded-t-lg last:rounded-b-lg transition-all duration-300",
  },
  title: {
    base: "flex w-full items-center justify-between p-5 text-left font-medium !text-white first:rounded-t-lg last:rounded-b-lg",
    arrow: {
      base: "h-6 w-6 shrink-0",
      open: { on: "rotate-180" },
    },
    open: {
      on: "bg-gray-800 !text-white", // force white text when panel is open
    },
  },
};
