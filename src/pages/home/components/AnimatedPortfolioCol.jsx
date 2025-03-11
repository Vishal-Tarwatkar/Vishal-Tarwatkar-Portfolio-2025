import portfolioStyles from "./portfolioStyles.module.scss";
import { useRef } from "react";
import { GoDotFill } from "react-icons/go";

const AnimatedPortfolioCol = ({ data, reversed }) => {
   const firstImage = useRef(null);
   const secondImage = useRef(null);
   let requestAnimationFrameId = null;
   let xPercent = reversed ? 100 : 0;
   let currentXPercent = reversed ? 100 : 0;
   const speed = 0.15;

   const manageMouseMove = (e) => {
      const { clientX } = e;
      xPercent = (clientX / window.innerWidth) * 100;

      if (!requestAnimationFrameId) {
         requestAnimationFrameId = window.requestAnimationFrame(animate);
      }
   };

   const animate = () => {
      //Add easing to the animation
      const xPercentDelta = xPercent - currentXPercent;
      currentXPercent = currentXPercent + xPercentDelta * speed;

      //Change width of images between 33.33% and 66.66% based on cursor
      const firstImagePercent = 66.66 - currentXPercent * 0.33;
      const secondImagePercent = 33.33 + currentXPercent * 0.33;
      console.log(secondImagePercent);
      firstImage.current.style.width = `${firstImagePercent}%`;
      secondImage.current.style.width = `${secondImagePercent}%`;

      if (Math.round(xPercent) == Math.round(currentXPercent)) {
         window.cancelAnimationFrame(requestAnimationFrameId);
         requestAnimationFrameId = null;
      } else {
         window.requestAnimationFrame(animate);
      }
   };

   return (
      <div
         onMouseMove={(e) => {
            manageMouseMove(e);
         }}
         className={portfolioStyles.mainContainer}
      >
         <div ref={firstImage} className={portfolioStyles.imageContainer}>
            <div className={portfolioStyles.upperBody}>
               <GoDotFill /> <h3>{data[0].name}</h3>
            </div>
            <div className={portfolioStyles.stretchyWrapper}>
               <img src={data[0].imgUrl} alt={"image"} />
            </div>
            <div className={portfolioStyles.lowerBody}>
               <div className="flex flex-wrap gap-3 items-center">
                  {data[0].tags.map((tags, i) => (
                     <div
                        key={i}
                        className="border border-[#212121] rounded-full py-0.5 px-3"
                     >
                        {tags}
                     </div>
                  ))}
               </div>
               <p>{data[0].year}</p>
            </div>
         </div>
         <div ref={secondImage} className={portfolioStyles.imageContainer}>
            <div className={portfolioStyles.upperBody}>
               <GoDotFill /> <h3>{data[1].name}</h3>
            </div>
            <div className={portfolioStyles.stretchyWrapper}>
               <img src={data[1].imgUrl} alt={"image"} />
            </div>
            <div className={portfolioStyles.lowerBody}>
               <div className="flex flex-wrap gap-3 items-center">
                  {data[1].tags.map((tags, i) => (
                     <div
                        key={i}
                        className="border border-[#212121] rounded-full py-0.5 px-3"
                     >
                        {tags}
                     </div>
                  ))}
               </div>
               <p>{data[1].year}</p>
            </div>
         </div>
      </div>
   );
};

export default AnimatedPortfolioCol;
