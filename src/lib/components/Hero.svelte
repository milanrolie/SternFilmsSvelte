<script>
  import Showreel from "$lib/assets/Showreel_Stern_2023_V1.webm";
  import mobileShowreel from "$lib/assets/62e33ad7-852f-403d-aa8b-d77f8f582fc3.mp4";
  import gradientBG from "$lib/assets/gradientBG.png";
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

  onMount(() => {
    const circle = document.querySelector(".circle");
    const AnimateSvg = document.querySelector(".rotate-svg");
    const showCircle = document.querySelector(".background-wrapper");
    const gradientCircle = document.querySelector(".gradient-circle");

    let circleX = 0;
    let circleY = 0;
    let lastCircleX = 0;
    let lastCircleY = 0;
    let gradientCircleX = 0;
    let gradientCircleY = 0;
    let lastgradientCircleX = 0;
    let lastgradientCircleY = 0;
    let targetX = 0;
    let targetY = 0;
    const smoothFactor = 0.05;

    showCircle.addEventListener("mousemove", (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      circle.classList.add("show");
      AnimateSvg.classList.add("rotate");
    });

    showCircle.addEventListener("mouseout", () => {
      targetX = lastCircleX;
      targetY = lastCircleY;

      circle.classList.remove("show");
      AnimateSvg.classList.remove("rotate");
    });

    document.addEventListener("mousemove", (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    });

    function updateCirclePosition() {
      const dx = targetX - circleX;
      const dy = targetY - circleY;

      circleX += dx * smoothFactor;
      circleY += dy * smoothFactor;

      circle.style.left = circleX - circle.offsetWidth / 2 + "px";
      circle.style.top = circleY - circle.offsetHeight / 2 + "px";

      lastCircleX = circleX;
      lastCircleY = circleY;

      requestAnimationFrame(updateCirclePosition);
    }

    updateCirclePosition();

    function updategradientCirclePosition() {
      const dx = targetX - gradientCircleX;
      const dy = targetY - gradientCircleY;

      gradientCircleX += dx * smoothFactor;
      gradientCircleY += dy * smoothFactor;

      gradientCircle.style.left =
        gradientCircleX - gradientCircle.offsetWidth / 2 + "px";
      gradientCircle.style.top =
        gradientCircleY - gradientCircle.offsetHeight / 2 + "px";

      lastgradientCircleX = gradientCircleX;
      lastgradientCircleY = gradientCircleY;

      requestAnimationFrame(updategradientCirclePosition);
    }

    updategradientCirclePosition();

    gsap.from(".blur-gsap", {
      delay: 3,
      duration: 1.5,
      ease: "Expo.easeOut",
      filter: "blur(50px)",
    });

    let tl = gsap.timeline();

    tl.from(".move", {
      delay: 3.5,
      y: "100%",
      opacity: 0,
      duration: 1.5,
      ease: "Expo.easeOut",
      stagger: 0.2,
    });

    tl.from(".circle", {
      delay: 0,
      duration: 1.5,
      ease: "Expo.easeOut",
      opacity: 0,
    });
  });
</script>

<section>
  <div class="background-wrapper">
    <div class="circle">Coming soon!</div>
    <div class="blue blur"></div>
    <div class="yellow blur"></div>
    <div class="red blur"></div>
    <img src={gradientBG} alt="" />
    <video class="blur-gsap mobile-hide" src={Showreel} loop autoplay muted
    ></video>
    <video
      class="blur-gsap mobile-show"
      src={mobileShowreel}
      loop
      autoplay
      muted
      playsinline
    ></video>
    <h1>
      <span class="indent"> </span>
    </h1>

    <h1 class="desktop">
      <span class="creatief words indent">
        <div class="move">Filmmaker and editor</div>
      </span>
      <span class="webbureau words">
        <div class="move">creating engaging visual</div>
      </span>
      <span class="ballen words">
        <div class="move">
          <svg
            width="96"
            height="38"
            viewBox="0 0 96 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 32.1C65.4 32.1 80.5 32.1 95.8 32.1C95.7 31.1 95.7 30.3 95.6 29.3C81.3 29.3 67.2 29.3 52.7 29.3C52.7 19.4 52.7 9.79999 52.7 -1.48192e-05C51.6 0.0999852 50.8 0.0999852 49.9 0.0999852C50 10.9 50 21.5 50 32.1ZM45.5 35.3C45.5 23.3 45.5 11.8 45.5 0.199985C44.5 0.199985 43.7 0.199985 42.8 0.199985C42.8 12.6 42.8 25 42.8 37.3C60.5 37.3 78 37.3 95.5 37.3C96.3 34.8 94.4 35.4 93.3 35.4C78.5 35.4 63.6 35.4 48.8 35.4C47.9 35.3 46.9 35.3 45.5 35.3ZM57.1 26.3C70.1 26.3 82.9 26.3 95.8 26.3C95.7 25.3 95.7 24.5 95.6 23.4C83.6 23.4 71.9 23.4 59.8 23.4C59.8 15.4 59.8 7.79999 59.8 -1.48192e-05C58.8 0.0999852 58 0.0999852 57.1 0.0999852C57.1 8.89999 57.1 17.5 57.1 26.3ZM95.6 17.6C86.1 17.6 76.8 17.6 67.1 17.6C67.1 11.6 67.1 5.89999 67.1 0.0999852C66 0.0999852 65.2 0.0999852 64.3 0.0999852C64.3 6.89999 64.3 13.6 64.3 20.4C74.9 20.4 85.2 20.4 95.5 20.4C95.6 19.4 95.6 18.7 95.6 17.6ZM7.1 0.0999852C7.1 12.6 7.1 24.9 7.1 37.3C8.1 37.2 8.9 37.2 9.7 37.1C9.7 24.6 9.7 12.4 9.7 -1.48192e-05C8.7 0.0999852 8 0.0999852 7.1 0.0999852ZM16.9 37.2C16.9 24.8 16.9 12.5 16.9 0.199985C15.9 0.199985 15.1 0.199985 14.2 0.199985C14.2 12.7 14.2 24.9 14.2 37.2C15.2 37.2 16 37.2 16.9 37.2ZM24 -1.48192e-05C23 -1.48192e-05 22.2 0.0999852 21.3 0.0999852C21.3 12.6 21.3 24.9 21.3 37.3C22.3 37.3 23.1 37.2 24 37.2C24 24.8 24 12.5 24 -1.48192e-05ZM38.4 37.2C38.4 24.8 38.4 12.5 38.4 0.199985C37.4 0.199985 36.6 0.199985 35.7 0.199985C35.7 12.7 35.7 24.9 35.7 37.2C36.7 37.2 37.5 37.2 38.4 37.2ZM95.7 11.6C88.5 11.6 81.5 11.6 74.3 11.6C74.3 7.59999 74.3 3.89999 74.3 0.199985C73.2 0.199985 72.4 0.199985 71.5 0.199985C71.5 5.09999 71.5 9.69998 71.5 14.5C79.6 14.5 87.6 14.5 95.7 14.5C95.7 13.6 95.7 12.9 95.7 11.6ZM31 37.2C31.1 36.8 31.2 36.7 31.2 36.5C31.2 24.9 31.2 13.2 31.2 1.59999C31.2 -0.700015 29.8 -1.48267e-05 28.5 0.199985C28.5 12.6 28.5 24.8 28.5 37.2C29.5 37.2 30.2 37.2 31 37.2ZM2.5 37.2C2.5 24.8 2.5 12.4 2.5 0.199985C0.3 -0.500015 0 0.599985 0 2.29999C0 13.3 0 24.4 0 35.4C0 36 0.1 36.5 0.2 37.1C1.1 37.2 1.8 37.2 2.5 37.2ZM95.7 5.89999C90.9 5.89999 86.3 5.89999 81.4 5.89999C81.4 3.69999 81.4 1.99999 81.4 0.199985C80.3 0.199985 79.6 0.199985 78.7 0.199985C78.7 3.19999 78.7 5.99998 78.7 8.79998C84.5 8.79998 90.1 8.79998 95.7 8.79998C95.7 7.79998 95.7 6.99999 95.7 5.89999ZM85.8 2.89999C89.1 2.89999 92.3 2.89999 95.6 2.89999C95.6 1.89999 95.6 1.09999 95.6 0.199985C92.2 0.199985 89.1 0.199985 85.8 0.199985C85.8 1.19999 85.8 1.99999 85.8 2.89999Z"
              fill="black"
            />
            <path
              d="M50 32.1C50 21.4 50 10.9 50 0.1C50.9 0.1 51.7 0 52.8 0C52.8 9.8 52.8 19.4 52.8 29.3C67.2 29.3 81.4 29.3 95.7 29.3C95.8 30.3 95.8 31.1 95.9 32.1C80.5 32.1 65.4 32.1 50 32.1Z"
              fill="white"
            />
            <path
              d="M45.4998 35.3C46.8998 35.3 47.7998 35.3 48.7998 35.3C63.5998 35.3 78.4998 35.3 93.2998 35.3C94.3998 35.3 96.2998 34.7 95.4998 37.2C77.9998 37.2 60.4998 37.2 42.7998 37.2C42.7998 24.9 42.7998 12.6 42.7998 0.0999756C43.6998 0.0999756 44.4998 0.0999756 45.4998 0.0999756C45.4998 11.8 45.4998 23.3 45.4998 35.3Z"
              fill="white"
            />
            <path
              d="M57.0996 26.3C57.0996 17.5 57.0996 8.89998 57.0996 0.199976C57.9996 0.199976 58.7996 0.0999756 59.7996 0.0999756C59.7996 7.89998 59.7996 15.5 59.7996 23.5C71.7996 23.5 83.5996 23.5 95.5996 23.5C95.6996 24.6 95.6996 25.4 95.7996 26.4C82.8996 26.3 70.0996 26.3 57.0996 26.3Z"
              fill="white"
            />
            <path
              d="M95.6004 17.6C95.6004 18.6 95.6004 19.4 95.6004 20.4C85.2004 20.4 74.9004 20.4 64.4004 20.4C64.4004 13.7 64.4004 6.99998 64.4004 0.0999756C65.2004 0.0999756 66.0004 0.0999756 67.2004 0.0999756C67.2004 5.89998 67.2004 11.6 67.2004 17.6C76.8004 17.6 86.2004 17.6 95.6004 17.6Z"
              fill="white"
            />
            <path
              d="M7.09961 0.0999756C7.99961 0.0999756 8.79961 0.0999756 9.69961 0.0999756C9.69961 12.4 9.69961 24.7 9.69961 37.2C8.89961 37.2 8.09961 37.3 7.09961 37.4C7.09961 24.9 7.09961 12.7 7.09961 0.0999756Z"
              fill="white"
            />
            <path
              d="M16.9002 37.2C16.0002 37.2 15.2002 37.2 14.2002 37.2C14.2002 24.9 14.2002 12.6 14.2002 0.200012C15.1002 0.200012 15.9002 0.200012 16.9002 0.200012C16.9002 12.6 16.9002 24.8 16.9002 37.2Z"
              fill="white"
            />
            <path
              d="M23.9998 0C23.9998 12.5 23.9998 24.8 23.9998 37.2C23.0998 37.2 22.2998 37.3 21.2998 37.3C21.2998 24.9 21.2998 12.6 21.2998 0.1C22.1998 0.1 22.9998 0.1 23.9998 0Z"
              fill="white"
            />
            <path
              d="M38.4002 37.2C37.5002 37.2 36.7002 37.2 35.7002 37.2C35.7002 24.9 35.7002 12.7 35.7002 0.200012C36.6002 0.200012 37.4002 0.200012 38.4002 0.200012C38.4002 12.5 38.4002 24.8 38.4002 37.2Z"
              fill="white"
            />
            <path
              d="M95.7 11.6C95.7 12.8 95.7 13.6 95.7 14.5C87.6 14.5 79.7 14.5 71.5 14.5C71.5 9.70001 71.5 5.10001 71.5 0.200012C72.4 0.200012 73.2 0.200012 74.3 0.200012C74.3 3.90001 74.3 7.60001 74.3 11.6C81.5 11.6 88.5 11.6 95.7 11.6Z"
              fill="white"
            />
            <path
              d="M31 37.2C30.1 37.2 29.4 37.2 28.5 37.2C28.5 24.9 28.5 12.6 28.5 0.199985C29.8 -1.48267e-05 31.2 -0.700015 31.2 1.59999C31.2 13.2 31.2 24.9 31.2 36.5C31.3 36.7 31.2 36.9 31 37.2Z"
              fill="white"
            />
            <path
              d="M2.5 37.2C1.7 37.2 1 37.2 0.2 37.2C0.1 36.6 0 36 0 35.5C0 24.5 0 13.4 0 2.39998C0 0.699976 0.3 -0.400024 2.5 0.299976C2.5 12.5 2.5 24.8 2.5 37.2Z"
              fill="white"
            />
            <path
              d="M95.7002 5.90001C95.7002 7.10001 95.7002 7.90001 95.7002 8.80001C90.0002 8.80001 84.5002 8.80001 78.7002 8.80001C78.7002 5.90001 78.7002 3.10001 78.7002 0.200012C79.6002 0.200012 80.4002 0.200012 81.4002 0.200012C81.4002 2.00001 81.4002 3.80001 81.4002 5.90001C86.2002 5.90001 90.9002 5.90001 95.7002 5.90001Z"
              fill="white"
            />
            <path
              d="M85.7998 2.90001C85.7998 2.00001 85.7998 1.20001 85.7998 0.200012C88.9998 0.200012 92.1998 0.200012 95.5998 0.200012C95.5998 1.10001 95.5998 1.90001 95.5998 2.90001C92.2998 2.90001 89.1998 2.90001 85.7998 2.90001Z"
              fill="white"
            />
          </svg>
          stories for your needs.
        </div>
      </span>
    </h1>

    <h1 class="mobile">
      <span class="creatief words indent">
        <div class="move">Filmmaker and</div>
      </span>
      <span class="webbureau words">
        <div class="move">editor creating</div>
      </span>
      <span class="webbureau words">
        <div class="move">engaging visual</div>
      </span>

      <span class="ballen words">
        <div class="move">
          <svg
            width="96"
            height="38"
            viewBox="0 0 96 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 32.1C65.4 32.1 80.5 32.1 95.8 32.1C95.7 31.1 95.7 30.3 95.6 29.3C81.3 29.3 67.2 29.3 52.7 29.3C52.7 19.4 52.7 9.79999 52.7 -1.48192e-05C51.6 0.0999852 50.8 0.0999852 49.9 0.0999852C50 10.9 50 21.5 50 32.1ZM45.5 35.3C45.5 23.3 45.5 11.8 45.5 0.199985C44.5 0.199985 43.7 0.199985 42.8 0.199985C42.8 12.6 42.8 25 42.8 37.3C60.5 37.3 78 37.3 95.5 37.3C96.3 34.8 94.4 35.4 93.3 35.4C78.5 35.4 63.6 35.4 48.8 35.4C47.9 35.3 46.9 35.3 45.5 35.3ZM57.1 26.3C70.1 26.3 82.9 26.3 95.8 26.3C95.7 25.3 95.7 24.5 95.6 23.4C83.6 23.4 71.9 23.4 59.8 23.4C59.8 15.4 59.8 7.79999 59.8 -1.48192e-05C58.8 0.0999852 58 0.0999852 57.1 0.0999852C57.1 8.89999 57.1 17.5 57.1 26.3ZM95.6 17.6C86.1 17.6 76.8 17.6 67.1 17.6C67.1 11.6 67.1 5.89999 67.1 0.0999852C66 0.0999852 65.2 0.0999852 64.3 0.0999852C64.3 6.89999 64.3 13.6 64.3 20.4C74.9 20.4 85.2 20.4 95.5 20.4C95.6 19.4 95.6 18.7 95.6 17.6ZM7.1 0.0999852C7.1 12.6 7.1 24.9 7.1 37.3C8.1 37.2 8.9 37.2 9.7 37.1C9.7 24.6 9.7 12.4 9.7 -1.48192e-05C8.7 0.0999852 8 0.0999852 7.1 0.0999852ZM16.9 37.2C16.9 24.8 16.9 12.5 16.9 0.199985C15.9 0.199985 15.1 0.199985 14.2 0.199985C14.2 12.7 14.2 24.9 14.2 37.2C15.2 37.2 16 37.2 16.9 37.2ZM24 -1.48192e-05C23 -1.48192e-05 22.2 0.0999852 21.3 0.0999852C21.3 12.6 21.3 24.9 21.3 37.3C22.3 37.3 23.1 37.2 24 37.2C24 24.8 24 12.5 24 -1.48192e-05ZM38.4 37.2C38.4 24.8 38.4 12.5 38.4 0.199985C37.4 0.199985 36.6 0.199985 35.7 0.199985C35.7 12.7 35.7 24.9 35.7 37.2C36.7 37.2 37.5 37.2 38.4 37.2ZM95.7 11.6C88.5 11.6 81.5 11.6 74.3 11.6C74.3 7.59999 74.3 3.89999 74.3 0.199985C73.2 0.199985 72.4 0.199985 71.5 0.199985C71.5 5.09999 71.5 9.69998 71.5 14.5C79.6 14.5 87.6 14.5 95.7 14.5C95.7 13.6 95.7 12.9 95.7 11.6ZM31 37.2C31.1 36.8 31.2 36.7 31.2 36.5C31.2 24.9 31.2 13.2 31.2 1.59999C31.2 -0.700015 29.8 -1.48267e-05 28.5 0.199985C28.5 12.6 28.5 24.8 28.5 37.2C29.5 37.2 30.2 37.2 31 37.2ZM2.5 37.2C2.5 24.8 2.5 12.4 2.5 0.199985C0.3 -0.500015 0 0.599985 0 2.29999C0 13.3 0 24.4 0 35.4C0 36 0.1 36.5 0.2 37.1C1.1 37.2 1.8 37.2 2.5 37.2ZM95.7 5.89999C90.9 5.89999 86.3 5.89999 81.4 5.89999C81.4 3.69999 81.4 1.99999 81.4 0.199985C80.3 0.199985 79.6 0.199985 78.7 0.199985C78.7 3.19999 78.7 5.99998 78.7 8.79998C84.5 8.79998 90.1 8.79998 95.7 8.79998C95.7 7.79998 95.7 6.99999 95.7 5.89999ZM85.8 2.89999C89.1 2.89999 92.3 2.89999 95.6 2.89999C95.6 1.89999 95.6 1.09999 95.6 0.199985C92.2 0.199985 89.1 0.199985 85.8 0.199985C85.8 1.19999 85.8 1.99999 85.8 2.89999Z"
              fill="black"
            />
            <path
              d="M50 32.1C50 21.4 50 10.9 50 0.1C50.9 0.1 51.7 0 52.8 0C52.8 9.8 52.8 19.4 52.8 29.3C67.2 29.3 81.4 29.3 95.7 29.3C95.8 30.3 95.8 31.1 95.9 32.1C80.5 32.1 65.4 32.1 50 32.1Z"
              fill="white"
            />
            <path
              d="M45.4998 35.3C46.8998 35.3 47.7998 35.3 48.7998 35.3C63.5998 35.3 78.4998 35.3 93.2998 35.3C94.3998 35.3 96.2998 34.7 95.4998 37.2C77.9998 37.2 60.4998 37.2 42.7998 37.2C42.7998 24.9 42.7998 12.6 42.7998 0.0999756C43.6998 0.0999756 44.4998 0.0999756 45.4998 0.0999756C45.4998 11.8 45.4998 23.3 45.4998 35.3Z"
              fill="white"
            />
            <path
              d="M57.0996 26.3C57.0996 17.5 57.0996 8.89998 57.0996 0.199976C57.9996 0.199976 58.7996 0.0999756 59.7996 0.0999756C59.7996 7.89998 59.7996 15.5 59.7996 23.5C71.7996 23.5 83.5996 23.5 95.5996 23.5C95.6996 24.6 95.6996 25.4 95.7996 26.4C82.8996 26.3 70.0996 26.3 57.0996 26.3Z"
              fill="white"
            />
            <path
              d="M95.6004 17.6C95.6004 18.6 95.6004 19.4 95.6004 20.4C85.2004 20.4 74.9004 20.4 64.4004 20.4C64.4004 13.7 64.4004 6.99998 64.4004 0.0999756C65.2004 0.0999756 66.0004 0.0999756 67.2004 0.0999756C67.2004 5.89998 67.2004 11.6 67.2004 17.6C76.8004 17.6 86.2004 17.6 95.6004 17.6Z"
              fill="white"
            />
            <path
              d="M7.09961 0.0999756C7.99961 0.0999756 8.79961 0.0999756 9.69961 0.0999756C9.69961 12.4 9.69961 24.7 9.69961 37.2C8.89961 37.2 8.09961 37.3 7.09961 37.4C7.09961 24.9 7.09961 12.7 7.09961 0.0999756Z"
              fill="white"
            />
            <path
              d="M16.9002 37.2C16.0002 37.2 15.2002 37.2 14.2002 37.2C14.2002 24.9 14.2002 12.6 14.2002 0.200012C15.1002 0.200012 15.9002 0.200012 16.9002 0.200012C16.9002 12.6 16.9002 24.8 16.9002 37.2Z"
              fill="white"
            />
            <path
              d="M23.9998 0C23.9998 12.5 23.9998 24.8 23.9998 37.2C23.0998 37.2 22.2998 37.3 21.2998 37.3C21.2998 24.9 21.2998 12.6 21.2998 0.1C22.1998 0.1 22.9998 0.1 23.9998 0Z"
              fill="white"
            />
            <path
              d="M38.4002 37.2C37.5002 37.2 36.7002 37.2 35.7002 37.2C35.7002 24.9 35.7002 12.7 35.7002 0.200012C36.6002 0.200012 37.4002 0.200012 38.4002 0.200012C38.4002 12.5 38.4002 24.8 38.4002 37.2Z"
              fill="white"
            />
            <path
              d="M95.7 11.6C95.7 12.8 95.7 13.6 95.7 14.5C87.6 14.5 79.7 14.5 71.5 14.5C71.5 9.70001 71.5 5.10001 71.5 0.200012C72.4 0.200012 73.2 0.200012 74.3 0.200012C74.3 3.90001 74.3 7.60001 74.3 11.6C81.5 11.6 88.5 11.6 95.7 11.6Z"
              fill="white"
            />
            <path
              d="M31 37.2C30.1 37.2 29.4 37.2 28.5 37.2C28.5 24.9 28.5 12.6 28.5 0.199985C29.8 -1.48267e-05 31.2 -0.700015 31.2 1.59999C31.2 13.2 31.2 24.9 31.2 36.5C31.3 36.7 31.2 36.9 31 37.2Z"
              fill="white"
            />
            <path
              d="M2.5 37.2C1.7 37.2 1 37.2 0.2 37.2C0.1 36.6 0 36 0 35.5C0 24.5 0 13.4 0 2.39998C0 0.699976 0.3 -0.400024 2.5 0.299976C2.5 12.5 2.5 24.8 2.5 37.2Z"
              fill="white"
            />
            <path
              d="M95.7002 5.90001C95.7002 7.10001 95.7002 7.90001 95.7002 8.80001C90.0002 8.80001 84.5002 8.80001 78.7002 8.80001C78.7002 5.90001 78.7002 3.10001 78.7002 0.200012C79.6002 0.200012 80.4002 0.200012 81.4002 0.200012C81.4002 2.00001 81.4002 3.80001 81.4002 5.90001C86.2002 5.90001 90.9002 5.90001 95.7002 5.90001Z"
              fill="white"
            />
            <path
              d="M85.7998 2.90001C85.7998 2.00001 85.7998 1.20001 85.7998 0.200012C88.9998 0.200012 92.1998 0.200012 95.5998 0.200012C95.5998 1.10001 95.5998 1.90001 95.5998 2.90001C92.2998 2.90001 89.1998 2.90001 85.7998 2.90001Z"
              fill="white"
            />
          </svg>
          stories for your needs.
        </div>
      </span>
    </h1>
    <!-- <button>Play showreel</button> -->
  </div>
  <div class="gradient-circle"></div>
</section>

<style>
  section {
    position: relative;
    height: 100vh;
    width: 100%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 2em;
  }

  .mobile {
    display: none;
  }

  .desktop {
    display: block;
  }

  .mobile-hide {
    display: block;
  }

  .mobile-show {
    display: none;
  }

  .background-wrapper {
    position: relative;
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 5;
    clip-path: inset(calc((0 + var(--progress)) * 100%) 0 0 0 round 0em);
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    opacity: 0.3;
    mix-blend-mode: multiply;
  }

  video {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    transform: scale(1.05);
    object-fit: cover;
  }

  .blur {
    filter: blur(10rem);
    border-radius: 100%;
    opacity: 0.3;
  }

  .blue {
    position: absolute;
    top: 10%;
    left: 10%;
    height: 90vh;
    width: 90vh;
    background-color: #5e579d;
    z-index: 3;
  }

  .yellow {
    position: absolute;
    top: -10%;
    right: -30%;
    height: 100vh;
    aspect-ratio: 1;
    background-color: #ffd034;
    z-index: 2;
    filter: blur(40rem);
  }

  .red {
    position: absolute;
    top: 65%;
    right: -20%;
    height: 80vh;
    width: 60vw;
    background-color: #ff4747;
    z-index: 1;
  }

  svg {
    height: 0.6em;
    /* transform: translateY(3px) translateX(0px); */
    opacity: 1;
  }

  h1 {
    font-size: 4em;
    color: var(--main-offwhite);
    max-width: 60%;
    font-weight: 300;
    /* text-indent: 6vw; */
    line-height: 1.2em;
    z-index: 15;
    text-align: left;
  }

  button {
    position: absolute;
    background-color: white;
    z-index: 3;
    left: 2rem;
    bottom: 2rem;
    padding: 0.5rem 0.7rem;
    border: 1px solid var(--main-offwhite);
    border-radius: 0.4rem;
    background: none;
    color: currentColor;
  }

  .circle {
    position: fixed;
    top: 50%;
    height: 10em;
    border-radius: 100%;
    aspect-ratio: 1;
    z-index: 10;
    transform: scale(0);
    transition: transform 0.2s;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 2px solid var(--main-offwhite); */
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    pointer-events: none;
  }

  :is(.show) {
    transform: scale(1);
    opacity: 1;
  }

  .rotate-svg {
    transition: 0.3s;
    transition-delay: 0.1s;
    stroke: var(--main-offwhite);
    transform: scale(0.5);
  }

  :is(.rotate) {
    transform: scale(1.5) rotate(-45deg);
  }

  .gradient-circle {
    position: fixed;
    width: 30rem;
    height: 15rem;
    background-color: rgb(121, 207, 250);
    border-radius: 50%;
    filter: blur(200px);
    z-index: -1;
    transform: scale(0);
    transition: transform 0.5s;
    pointer-events: none;
    display: none;
  }

  .background-wrapper:not(:hover) ~ .gradient-circle {
    transform: scale(1);
  }

  span {
    position: relative;
  }

  /* .creatief {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }

  .webbureau {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }

  .ballen {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }

  .words {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  } */

  @media (max-width: 768px) {
    section {
      padding: 1rem;
    }

    h1 {
      font-size: 3em;
      max-width: 100%;
    }

    .mobile {
      display: block;
    }

    .desktop {
      display: none;
    }

    .circle {
      display: none;
    }

    .gradient-circle {
      display: none;
    }

    video {
      aspect-ratio: 16/9;
      object-fit: contain;
      border-radius: 1rem;
      bottom: 0;
      height: max-content;
    }

    img {
      display: none;
    }

    .blur {
      display: none;
    }

    .mobile-hide {
      display: none;
    }

    .mobile-show {
      display: block;
    }
  }
</style>
