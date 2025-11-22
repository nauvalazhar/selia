import { Link } from 'react-router';

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <svg
        className="size-8.5"
        width="1000"
        height="1000"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_448_30)">
          <rect
            width="1000"
            height="1000"
            rx="220"
            fill="url(#paint0_linear_448_30)"
          />
          <path
            d="M417.175 186.466C440.739 155.817 484.687 150.075 515.335 173.64L680.016 300.259C710.665 323.823 716.407 367.771 692.842 398.419L634.752 473.971L414.578 304.685C383.93 281.121 378.187 237.173 401.752 206.525L417.175 186.466Z"
            fill="white"
          />
          <rect
            x="346.904"
            y="277.858"
            width="512.257"
            height="165.303"
            rx="70"
            transform="rotate(37.5557 346.904 277.858)"
            fill="white"
            fillOpacity="0.8"
          />
          <path
            d="M363.586 524.406L584.571 694.315C615.219 717.88 620.961 761.828 597.397 792.476L581.974 812.535C558.409 843.183 514.461 848.925 483.813 825.361L318.322 698.119C287.674 674.554 281.931 630.606 305.496 599.958L363.586 524.406Z"
            fill="white"
            fillOpacity="0.6"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_448_30"
            x1="500"
            y1="0"
            x2="500"
            y2="1000"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A7FF2" />
            <stop offset="1" stopColor="#336FF1" />
          </linearGradient>
          <clipPath id="clip0_448_30">
            <rect width="1000" height="1000" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span className="font-semibold text-lg">Selia</span>
    </Link>
  );
}
