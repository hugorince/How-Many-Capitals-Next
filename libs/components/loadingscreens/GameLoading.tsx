import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGlobalContext } from "../../providers/global-context";

const GameLoading = () => {
  const { difficulty } = useGlobalContext();
  const [content, setContent] = useState(`${difficulty} mode`);

  useEffect(() => {
    setInterval(() => {
      setContent("Good luck !");
    }, 1500);
  }, []);

  return (
    <>
      <div className="relative flex flex-col text-2xl font-bold items-center justify-center h-screen w-screen bg-blue-700 text-white">
        <AnimatePresence>
          <motion.div
            key={content}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ ease: "easeInOut" }}
            style={{ position: "absolute" }}
          >
            {content}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default GameLoading;
