<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { onMount } from "svelte";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    gsap.to(".gsap-path", {
      duration: 2,
      opacity: 1,
      stagger: 0.05,
    });

    gsap.to(".sternfilms", {
      delay: 0,
      duration: 2,
      opacity: 1,
      ease: "power4.out",
    });

    gsap.from(".sternfilms", {
      delay: 0.5,
      "--progress": 1,
      duration: 2,
      ease: "power4.out",
    });

    gsap.to(".gsap-path", {
      delay: 2.5,
      duration: 1,
      opacity: 0,
      ease: "power4.out",
    });

    gsap.to(".sternfilms", {
      delay: 2.5,
      duration: 1,
      opacity: 0,
      ease: "power4.out",
    });

    gsap.to(".gsap-reveal", {
      delay: 3,
      duration: 1.5,
      ease: "power4.out",
      y: "100vh",
    });
  });
</script>

<section class="gsap-reveal">
  <div class="logo-wrapper">
    <svg
      width="63"
      height="40"
      viewBox="0 0 63 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="1">
        <mask
          id="mask0_147_719"
          style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="63"
          height="40"
        >
          <path
            class="gsap-path"
            d="M2.41873e-05 0.823208L0 39.9896L63 39.9896L63 0.823262L2.41873e-05 0.823208Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_147_719)">
          <path
            class="gsap-path"
            d="M136.825 14.1301H61.0625V-33.357H136.825V14.1301ZM63.0416 12.2099H134.846V-31.4368H63.0416V12.2099Z"
            fill="white"
          />
          <path
            class="gsap-path"
            d="M140.933 17.8719H56.3662V-33.997H140.933V17.8719ZM58.3199 15.9518H138.954V-32.0768H58.3199V15.9518Z"
            fill="white"
          />
          <path
            class="gsap-path"
            d="M145.046 21.6138H51.6748V-34.6371H145.046V21.6138ZM53.6285 19.7183H143.067V-32.7169H53.6285V19.7183Z"
            fill="white"
          />
          <path
            class="gsap-path"
            d="M149.13 25.3803H46.9297V-35.2771H149.13V25.3803ZM48.9087 23.4601H147.151V-33.3569H48.9087V23.4601Z"
            fill="white"
          />
          <path
            class="gsap-path"
            d="M153.239 29.1221H42.2344V-35.9172H153.239V29.1221ZM44.2134 27.2266H151.285V-33.997H44.2134V27.2266Z"
            fill="white"
          />
          <path
            class="gsap-path"
            d="M157.349 32.8886H37.54V-36.5572H157.349V32.8886ZM39.4937 30.9684H155.37V-34.6371H39.4937V30.9684Z"
            fill="white"
          />
          <path
            class="gsap-path"
            d="M161.462 36.6305H32.8232V-37.1973H161.462V36.6305ZM34.8023 34.7103H159.483V-35.2771H34.8023V34.7103Z"
            fill="white"
          />
          <path
            class="gsap-path"
            d="M165.57 40.3723H28.127V-37.8373H165.57V40.3723ZM30.106 38.4768H163.616V-35.9172H30.106V38.4768Z"
            fill="white"
          />
          <path
            class="gsap-path"
            d="M169.683 44.1388H23.4355V-38.4774H169.683V44.1388ZM25.3892 42.2186H167.704V-36.5572H25.3892V42.2186Z"
            fill="white"
          />
          <path
            class="gsap-path"
            d="M173.791 47.8806H18.7139V-39.1174H173.791V47.8806ZM20.6929 45.9851H171.837V-37.1973H20.6929V45.9851Z"
            fill="white"
          />
          <path
            class="gsap-path"
            d="M177.901 51.6471H14.0195V-39.7575H177.901V51.6471ZM15.9732 49.7269H175.922V-37.8373H15.9732V49.7269Z"
            fill="white"
          />
          <path
            class="gsap-path"
            d="M186.121 57.6426H10V-39.5494H186.121V57.6426ZM11.8956 55.8034H184.201V-37.6863H11.8956V55.8034Z"
            fill="white"
          />
          <path
            class="gsap-path"
            d="M196.319 62.8973H6V-41.6776H196.319V62.8973ZM7.95368 60.9771H194.34V-39.7575H7.95368V60.9771Z"
            fill="white"
          />
          <path
            class="gsap-path"
            d="M194.319 66.6391H-4.83008V-42.3177H194.319V66.6391ZM-2.82565 64.719H192.365V-40.3975H-2.82565V64.719Z"
            fill="white"
          />
          <path
            class="gsap-path"
            d="M198.428 70.381H-9.52539V-42.9577H198.428V70.381ZM-7.54633 68.4855H196.474V-41.0376H-7.54633V68.4855Z"
            fill="white"
          />
          <path
            class="gsap-path"
            d="M202.536 74.1474H-14.2217V-43.5978H202.536V74.1474ZM-12.2426 72.2273H200.582V-41.7023L-12.2426 -41.6776V72.2273Z"
            fill="white"
          />
        </g>
      </g>
    </svg>
    <div class="sternfilms">SternFilms</div>
  </div>
</section>

<style>
  section {
    position: fixed;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 9999999;
    background-color: var(--main-dark);
    pointer-events: none;
  }

  .gsap-path {
    opacity: 0;
  }

  .logo-wrapper {
    width: 50%;
    display: flex;
    gap: 1rem;
    font-size: 3rem;
    opacity: 0.7;
    align-items: center;
    justify-content: center;
  }

  svg {
    opacity: 1;
  }

  .sternfilms {
    clip-path: polygon(
      0 0,
      calc((1 - var(--progress)) * 100%) 0,
      calc((1 - var(--progress)) * 100%) 100%,
      0% 100%
    );
    opacity: 0;
  }


  @media (max-width: 768px) {
    .logo-wrapper {
      width: 100%;
      font-size: 2rem;
    }
  }

</style>
