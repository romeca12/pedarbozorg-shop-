const LoadingCricle = () => {
    return (
        <div className="loader-wrapper">
            <section className="dots-container">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
            </section>

            <style jsx>{`
        .loader-wrapper {
          width: 100%;
          height: 100%;
          padding: 5px 0px;
        }

        .dots-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
          gap: 8px; /* فاصله مناسب برای اندازه کوچک‌تر */
        }

        .dot {
          height: 14px;
          width: 14px;
          border-radius: 50%;
          background-color: #ffffff; /* رنگ سفید */
          animation: pulse 0.7s infinite ease-in-out;
        }

        .dot:nth-child(1) {
          animation-delay: -0.2s;
        }

        .dot:nth-child(2) {
          animation-delay: 0s;
        }

        .dot:nth-child(3) {
          animation-delay: 0.2s;
        }

        @keyframes pulse {
          0% {
            transform: scale(0.8);
            background-color: #ffffff;
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
          }
          50% {
            transform: scale(1.2);
            background-color: #ffffff;
            box-shadow: 0 0 0 6px rgba(255, 255, 255, 0);
          }
          100% {
            transform: scale(0.8);
            background-color: #ffffff;
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
          }
        }
      `}</style>
        </div>
    );
};

export default LoadingCricle;