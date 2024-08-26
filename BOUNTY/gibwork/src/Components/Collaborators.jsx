import { collaborators } from "./data";
import {motion} from 'framer-motion';
const Collaborators = () => {
  return (
    <div className="max-w-[1200px] w-full h-auto justify-center items-center text-center mx-auto px-4 mb-10">
      
      <motion.h2
      initial={{opacity:0.5, y:20}}
      whileHover={{opacity:1,y:0}}
      transition={{duration:0.5}}
      className=" font-bold text-[32px] mb-2 text-center">
        In Collaboration with
      </motion.h2>
      <motion.div
      initial={{opacity:0.5, y:10}}
      whileHover={{opacity:1,y:0}}
      transition={{duration:0.5}}
       className=" text-[20px] mb-10">
          Top Open Source initiatives
        </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {collaborators.map((collaborator, index) => (
          <motion.div
          initial={{scale:1}}
          whileHover={{scale:1.03}}
          key={index} className="bg-[#a8a29e] rounded-lg p-4 flex items-center shadow-lg">
            <img
              src={collaborator.logo}
              alt={`${collaborator.name} logo`}
              className="w-20 h-20 object-contain mr-4 rounded-full"
            />
            <div className="text-left">
              <h3 className="text-gray-800 font-semibold text-[20px] mb-2">
                {collaborator.name}
              </h3>
              <p className="text-gray-800 text-[16px]">
                {collaborator.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Collaborators;