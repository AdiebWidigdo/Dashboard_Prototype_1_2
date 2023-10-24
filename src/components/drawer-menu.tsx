import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type DrawerMenuType = {
  onClose?: () => void;
};

const DrawerMenu: FunctionComponent<DrawerMenuType> = ({ onClose }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onTerraquestLogoBig2ImageClick = useCallback(() => {
    // Please sync "Dashboard(Mobile)" to the project
  }, []);

  const onFrameButtonClick = useCallback(() => {
    navigate("/dashboardmobile");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    // Please sync "Prototype-Dashboard-profile" to the project
  }, []);

  const onFrameButton2Click = useCallback(() => {
    // Please sync "Prototype-Dashboard-All-type" to the project
  }, []);

  const onFrameButton3Click = useCallback(() => {
    // Please sync "Staking Section (Unable)(Mobile)" to the project
  }, []);

  const onFrameContainerClick = useCallback(() => {
    // Please sync "Logout(Mobile)" to the project
  }, []);

  return (
    <div
      className="relative w-full h-[474px] overflow-hidden flex flex-row items-start justify-start [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] max-h-[90%]"
      data-animate-on-scroll
    >
      <section className="flex-1 bg-colors-white-100 shadow-[0px_3.5px_5.5px_rgba(0,_0,_0,_0.02)] flex flex-col items-center justify-start pt-0 px-0 pb-10 gap-[24px]">
        <section className="self-stretch bg-colors-white-100 shadow-[0px_3.5px_5.5px_rgba(0,_0,_0,_0.02)] flex flex-row items-center justify-between p-4 md:flex sm:self-stretch sm:w-auto">
          <img
            className="relative w-[106px] h-16 object-cover cursor-pointer"
            alt=""
            src="/terraquestlogobig-21@2x.png"
            onClick={onTerraquestLogoBig2ImageClick}
          />
          <img
            className="relative w-12 h-12 overflow-hidden shrink-0"
            alt=""
            src="/iconamoonmenuburgerhorizontalbold.svg"
          />
        </section>
        <section className="self-stretch flex flex-col items-center justify-start py-0 px-6 gap-[21px]">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
            alt=""
            src="/vector-101.svg"
          />
          <section className="flex flex-col items-start justify-start text-left text-base text-dimgray font-dm-sans">
            <button
              className="cursor-pointer [border:none] py-4 px-6 bg-[transparent] rounded-lg w-60 flex flex-row items-center justify-start box-border gap-[8px] mix-blend-normal"
              onClick={onFrameButtonClick}
            >
              <img
                className="relative rounded w-8 h-8 overflow-hidden shrink-0"
                alt=""
                src="/bxsdashboard11.svg"
              />
              <div className="relative text-base tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-dimgray text-left">
                Dashboard
              </div>
            </button>
            <button
              className="cursor-pointer [border:none] py-4 px-6 bg-[transparent] w-60 flex flex-row items-center justify-start box-border gap-[8px] mix-blend-normal mt-[-8px]"
              onClick={onFrameButton1Click}
            >
              <img
                className="relative rounded w-8 h-8 overflow-hidden shrink-0"
                alt=""
                src="/iconamoonprofilefill.svg"
              />
              <div className="relative text-base tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-dimgray text-left">
                Profile
              </div>
            </button>
            <button
              className="cursor-pointer [border:none] py-4 px-6 bg-[transparent] w-60 flex flex-row items-center justify-start box-border gap-[8px] mix-blend-normal mt-[-8px]"
              onClick={onFrameButton2Click}
            >
              <img
                className="relative w-8 h-8 overflow-hidden shrink-0"
                alt=""
                src="/mditreasurechest.svg"
              />
              <div className="relative text-base tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-dimgray text-left">
                Inventory
              </div>
            </button>
            <button
              className="cursor-pointer [border:none] py-4 px-6 bg-[transparent] w-60 flex flex-row items-center justify-start box-border gap-[8px] mix-blend-normal mt-[-8px]"
              onClick={onFrameButton3Click}
            >
              <img
                className="relative w-8 h-8 overflow-hidden shrink-0"
                alt=""
                src="/akariconscoin.svg"
              />
              <div className="relative text-base tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-dimgray text-left">
                Staking
              </div>
            </button>
            <div
              className="w-60 hidden flex-row items-center justify-start py-4 px-6 box-border gap-[8px] mix-blend-normal cursor-pointer mt-[-8px]"
              onClick={onFrameContainerClick}
            >
              <img
                className="relative w-8 h-8 overflow-hidden shrink-0"
                alt=""
                src="/mditreasurechest1.svg"
              />
              <div className="relative tracking-[0.02em] leading-[100%] font-medium">
                Logout
              </div>
            </div>
          </section>
          <button className="cursor-pointer [border:none] py-0 px-6 bg-royalblue rounded-lg w-80 h-10 flex flex-row items-center justify-center box-border gap-[8px]">
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/phplayfill1.svg"
            />
            <b className="relative text-sm tracking-[0.02em] leading-[100%] font-dm-sans text-colors-white-100 text-left">
              Play Game
            </b>
          </button>
        </section>
      </section>
    </div>
  );
};

export default DrawerMenu;
