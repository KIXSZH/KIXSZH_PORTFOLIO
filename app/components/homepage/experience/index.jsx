// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import experience from '/public/lottie/code.json';
import { educations } from "@/utils/data/educations";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-8 sm:my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-3 sm:px-5 font-medium mb-5 text-base sm:text-xl font-roboto-mono uppercase rounded-md">
            Education
          </span>
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {educations.map((education) => (
                <GlowCard key={education.id} identifier={`education-${education.id}`}>
                  <div className="p-3 relative text-white">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-lg text-[#16f2b3] font-roboto-mono">
                        {education.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-4 sm:gap-x-8 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125 text-2xl sm:text-3xl">
                        <BsPersonWorkspace />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-1 sm:mb-2 font-roboto-mono font-medium uppercase">
                          {education.title}
                        </p>
                        <p className="text-sm sm:text-base font-roboto-mono">
                          {education.institution}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
