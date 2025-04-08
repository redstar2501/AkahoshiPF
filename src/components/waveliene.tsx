const Waveliene = () => {
  return (
    <svg className="w-full h-screen" xmlns="http://www.w3.org/2000/svg">
      <g className="wave-container">
        <path
          className="wave wave1 stroke-white"
          d="M0 50 Q 50 100 100 50 T 200 50"
          fill="transparent"
          strokeWidth="2"
        />
        <path
          className="wave wave2 stroke-white"
          d="M0 70 Q 50 120 100 70 T 200 70"
          fill="transparent"
          strokeWidth="2"
        />
        <path
          className="wave wave3 stroke-white"
          d="M0 90 Q 50 140 100 90 T 200 90"
          fill="transparent"
          strokeWidth="2"
        />
      </g>

      <style>{`
        .wave-container {
          animation: wave-animation 2s infinite ease-in-out;
        }

        .wave {
          animation: wave-motion 2s infinite ease-in-out;
        }

        .wave1 {
          animation-delay: 0s;
        }

        .wave2 {
          animation-delay: 0.2s;
        }

        .wave3 {
          animation-delay: 0.4s;
        }

        @keyframes wave-animation {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        @keyframes wave-motion {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </svg>
  );
};

export default Waveliene;
