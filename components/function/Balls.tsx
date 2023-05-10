import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
const Balls = (props: any) => {
  const router = useRouter();
  const backgroundDiv = useRef<any>();
  const colors = ["#55d9e8", "#fbec1a", "#2c1f88", "#FCBC0F", "#F85F36"];
  const totalBalls = props.ballCount;
  const balls: any = [];
  useEffect(() => {
    backgroundDiv.current.innerHTML = '';
    if (typeof document !== "undefined" && router.pathname.split('/')[0] == "") {
      for (let i = 0; i < totalBalls; i++) {
        let yRand = Math.floor(Math.random() * 100);
        //yRand = (yRand < 10) ? 10 : yRand;
        let ballDiv = document.createElement("div");
        //ballDiv.id = 'balls';
        ballDiv.classList.add("ball");
        ballDiv.style.background = colors[Math.floor(Math.random() * colors.length)];
        ballDiv.style.left = `${Math.floor(Math.random() * 100)}%`;
        ballDiv.style.top = `calc(${yRand}% `;
        ballDiv.style.transform = `scale(${Math.random()})`;
        ballDiv.style.width = `${Math.random()}em`;
        ballDiv.style.height = ballDiv.style.width;
        balls.push(ballDiv);
        backgroundDiv.current.append(ballDiv);
      }
    }
    balls.forEach((el: any, i: number) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
      };
      let anim = el.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
          duration: (Math.random() + 1) * 1500, // random duration
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out"
        }
      );
    });
  }, [props.ballCount]);
  // 애니메이션 적용

  return (
    <div className="position-fixed" ref={backgroundDiv} style={{ opacity: ".5", overflow: "hidden", left: "0", top: "0", width: "100vw", height: "100vh" }}>
      <div className="home_intro_videos">
      </div>
    </div>
  )
}
export default Balls