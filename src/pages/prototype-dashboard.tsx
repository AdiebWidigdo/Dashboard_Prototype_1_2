import { FunctionComponent, useState, useCallback } from "react";
import DrawerMenu from "../components/drawer-menu";
import PortalDrawer from "../components/portal-drawer";
import { useNavigate } from "react-router-dom";

const PrototypeDashboard: FunctionComponent = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const onProfileClick = useCallback(() => {
    // Please sync "Prototype-Dashboard-profile" to the project
  }, []);

  const onInventoryClick = useCallback(() => {
    // Please sync "Prototype-Dashboard-All-type" to the project
  }, []);

  const onTerraquestLogoBig2ImageClick = useCallback(() => {
    // Please sync "Dashboard(Mobile)" to the project
  }, []);

  const openDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  const onProfile1Click = useCallback(() => {
    // Please sync "Prototype-Dashboard-profile" to the project
  }, []);

  const onBookmarrkClick = useCallback(() => {
    // Please sync "Prototype-Dashboard-bookmark" to the project
  }, []);

  const onMemoryFragmentClick = useCallback(() => {
    // Please sync "Prototype-Dashboard-Memory Fragment" to the project
  }, []);

  const onAllItemClick = useCallback(() => {
    // Please sync "Prototype-Dashboard-All-type" to the project
  }, []);

  const onBookmark1ContainerClick = useCallback(() => {
    // Please sync "Prototype-Dashboard-profile" to the project
  }, []);

  const onBookmark1Container1Click = useCallback(() => {
    // Please sync "Prototype-Dashboard-Memory Fragment" to the project
  }, []);

  const onBookmark1Container2Click = useCallback(() => {
    // Please sync "Prototype-Dashboard-All-type" to the project
  }, []);

  const onBookmark1Container3Click = useCallback(() => {
    // Please sync "Prototype-Dashboard-bookmark" to the project
  }, []);

  const onBxsdashboardIcon3Click = useCallback(() => {
    navigate("/dashboardmobile");
  }, [navigate]);

  const onMditreasureChestIcon2Click = useCallback(() => {
    // Please sync "Prototype-Dashboard-All-type" to the project
  }, []);

  const onIconamoonprofileFill9Click = useCallback(() => {
    // Please sync "Prototype-Dashboard-profile" to the project
  }, []);

  return (
    <>
      <div className="relative bg-whitesmoke-100 w-full h-auto overflow-hidden flex flex-row items-start justify-start gap-[8px] sm:h-screen">
        <section className="self-stretch rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-none bg-colors-white-100 flex flex-col items-start justify-start py-6 px-10 lg:self-stretch lg:h-auto lg:pl-4 lg:pt-6 lg:pr-0.5 lg:box-border md:hidden sm:hidden">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[24px]">
            <img
              className="relative w-[199.6px] h-[120px] object-cover lg:w-[199px]"
              alt=""
              src="/terraquestlogobig-12@2x.png"
            />
            <img
              className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 opacity-[0.2]"
              alt=""
              src="/vector-94.svg"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] lg:gap-[0px] lg:pl-0 lg:box-border">
              <button className="cursor-pointer [border:none] py-4 px-6 bg-[transparent] self-stretch rounded-lg flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative rounded w-8 h-8 overflow-hidden shrink-0"
                  alt=""
                  src="/bxsdashboard20.svg"
                />
                <div className="relative text-base tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-dimgray text-left inline-block w-32 shrink-0 lg:text-base">
                  Dashboard
                </div>
              </button>
              <button
                className="cursor-pointer [border:none] py-4 px-6 bg-[transparent] self-stretch flex flex-row items-center justify-start gap-[8px] opacity-[0.2] sm:h-screen"
                onClick={onProfileClick}
              >
                <img
                  className="relative rounded w-8 h-8 overflow-hidden shrink-0"
                  alt=""
                  src="/iconamoonprofilefill4.svg"
                />
                <div className="flex-1 relative text-base tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left">
                  Profile
                </div>
              </button>
              <button
                className="cursor-pointer [border:none] py-4 px-6 bg-[transparent] self-stretch flex flex-row items-center justify-start gap-[8px] opacity-[0.2]"
                onClick={onInventoryClick}
              >
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0"
                  alt=""
                  src="/mditreasurechest3.svg"
                />
                <div className="flex-1 relative text-base tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left">
                  Inventory
                </div>
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0"
                  alt=""
                  src="/iconparksoliddownone2.svg"
                />
              </button>
              <button className="cursor-pointer [border:none] py-4 px-6 bg-[transparent] self-stretch flex flex-row items-center justify-start gap-[8px] opacity-[0.2]">
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0"
                  alt=""
                  src="/akariconscoin1.svg"
                />
                <div className="flex-1 relative text-base tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left">
                  Staking
                </div>
              </button>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-end">
            <div className="self-stretch flex-1 flex flex-col items-start justify-end">
              <button className="cursor-pointer [border:none] py-4 px-6 bg-[transparent] self-stretch rounded-lg flex flex-row items-center justify-start gap-[8px] opacity-[0.2]">
                <img
                  className="relative rounded w-8 h-8 overflow-hidden shrink-0"
                  alt=""
                  src="/bxsdashboard19.svg"
                />
                <div className="flex-1 relative text-base tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left">
                  Creators
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-4 px-6 bg-[transparent] self-stretch flex flex-row items-center justify-start gap-[8px] opacity-[0.2]">
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0"
                  alt=""
                  src="/mditreasurechest2.svg"
                />
                <div className="flex-1 relative text-base tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left">
                  Logout
                </div>
              </button>
            </div>
          </div>
        </section>
        <main className="self-stretch flex-1 bg-whitesmoke-100 flex flex-col items-start justify-start gap-[8px] text-left text-5xs text-royalblue font-dm-sans sm:w-auto sm:self-stretch sm:h-auto sm:gap-[0px] sm:items-center sm:justify-start">
          <div className="self-stretch bg-colors-white-100 shadow-[0px_3.5px_5.5px_rgba(0,_0,_0,_0.02)] hidden flex-row items-center justify-between py-2 px-4 md:flex sm:self-stretch sm:w-auto">
            <img
              className="relative w-[92.8px] h-14 object-cover cursor-pointer"
              alt=""
              src="/terraquestlogobig-22@2x.png"
              onClick={onTerraquestLogoBig2ImageClick}
            />
            <img
              className="relative w-12 h-12 overflow-hidden shrink-0 cursor-pointer"
              alt=""
              src="/iconamoonmenuburgerhorizontalbold1.svg"
              onClick={openDrawer}
            />
          </div>
          <section className="self-stretch flex-1 flex flex-col items-start justify-start p-6 gap-[16px] md:gap-[0px] sm:gap-[0px] sm:items-center sm:justify-start sm:p-2 sm:box-border">
            <section className="self-stretch flex flex-row items-center justify-end gap-[8px] md:hidden">
              <img
                className="flex-1 relative rounded-2xl max-w-full overflow-hidden h-[13px]"
                alt=""
                src="/sparator2.svg"
              />
              <button className="cursor-pointer [border:none] py-0 px-6 bg-royalblue rounded-lg h-8 flex flex-row items-center justify-end box-border gap-[8px]">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/phplayfill1.svg"
                />
                <div className="relative text-sm tracking-[0.02em] leading-[100%] font-semibold font-hind text-colors-white-100 text-left md:hidden">
                  Play Game
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-0 px-6 bg-dimgray rounded-lg h-8 flex flex-row items-center justify-end box-border gap-[8px]">
                <img
                  className="relative rounded-sm w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/bxsdashboard1.svg"
                />
                <div className="relative text-sm tracking-[0.02em] leading-[100%] font-semibold font-hind text-colors-white-100 text-left md:hidden">
                  0x923749237493
                </div>
              </button>
            </section>
            <section className="self-stretch rounded-2xl bg-colors-white-100 flex flex-col items-center justify-center p-6 sm:self-stretch sm:w-auto sm:h-auto sm:p-2 sm:box-border">
              <section className="self-stretch rounded-2xl shadow-[0px_3.5px_5.5px_rgba(0,_0,_0,_0.02)] flex flex-col items-start justify-start p-4 gap-[8px] text-left text-xl text-dimgray font-baloo-bhaina-2 border-[1px] border-dashed border-whitesmoke-400 sm:self-stretch sm:w-auto sm:h-auto sm:items-center sm:justify-center sm:rounded-lg sm:py-4 sm:px-1 sm:box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] sm:hidden">
                  <div className="w-[156px] h-8 flex flex-row items-center justify-start gap-[8px]">
                    <h1
                      className="m-0 relative text-inherit leading-[60px] uppercase font-bold font-inherit flex items-center w-[114px] h-[22px] shrink-0 md:text-base"
                      id="Dashboard"
                    >
                      Dashboard
                    </h1>
                    <img
                      className="relative w-8 h-8 overflow-hidden shrink-0 sm:w-6 sm:h-6"
                      alt=""
                      src="/phinfobold1.svg"
                    />
                  </div>
                  <div className="self-stretch rounded-2xl flex flex-col items-center justify-center bg-[url('/public/welcomebanner2@3x.png')] bg-cover bg-no-repeat bg-[top] text-13xl text-colors-white-100">
                    <h1 className="m-0 relative text-inherit leading-[92.23px] uppercase font-bold font-inherit">
                      Welcome to Terraquest
                    </h1>
                  </div>
                  <div
                    className="self-stretch rounded-2xl bg-colors-white-100 flex flex-col items-start justify-start pt-0 px-0 pb-2 gap-[8px] cursor-pointer border-[1px] border-solid border-whitesmoke-200 sm:self-stretch sm:w-auto"
                    onClick={onProfile1Click}
                  >
                    <img
                      className="self-stretch relative rounded-2xl max-w-full overflow-hidden h-[199.1px] shrink-0 object-cover lg:h-40 md:h-[120px] sm:self-stretch sm:w-auto"
                      alt=""
                      src="/group-36892@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-center justify-start py-0 px-6 gap-[16px] sm:self-stretch sm:w-auto">
                      <div className="flex flex-row items-end justify-start p-2 gap-[8px]">
                        <img
                          className="relative rounded w-[32.1px] h-8 overflow-hidden shrink-0"
                          alt=""
                          src="/iconamoonprofilefill5.svg"
                        />
                        <h2 className="m-0 relative text-inherit leading-[120%] font-bold font-inherit md:text-lg">
                          Profile
                        </h2>
                        <img
                          className="relative w-8 h-8 overflow-hidden shrink-0"
                          alt=""
                          src="/icroundnavigatenext1.svg"
                        />
                      </div>
                      <h3 className="m-0 flex-1 relative text-sm tracking-[0.02em] leading-[120%] font-normal font-dm-sans text-gray sm:flex-1">
                        Sed quis cursus metus. Nam non ex tempor, consequat
                        lectus ut, gravida libero. Fusce condimentum at massa ut
                        rutrum.
                      </h3>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[24px] sm:flex-col">
                    <div
                      className="flex-1 rounded-2xl bg-colors-white-100 flex flex-col items-start justify-start pt-0 px-0 pb-2 gap-[8px] cursor-pointer border-[1px] border-solid border-whitesmoke-200 sm:flex-[unset] sm:self-stretch"
                      onClick={onBookmarrkClick}
                    >
                      <div className="self-stretch rounded-2xl h-[174px] flex flex-col items-center justify-center bg-[url('/public/bannerbookmark2@3x.png')] bg-cover bg-no-repeat bg-[top]">
                        <img
                          className="relative w-40 h-40 object-cover"
                          alt=""
                          src="/achievementflag1-35@2x.png"
                        />
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start py-0 px-6">
                        <div className="flex flex-row items-end justify-start p-2 gap-[8px]">
                          <img
                            className="relative rounded w-[32.1px] h-8 overflow-hidden shrink-0"
                            alt=""
                            src="/iconamoonprofilefill6.svg"
                          />
                          <h2 className="m-0 relative text-inherit leading-[120%] font-bold font-inherit lg:flex-1 md:text-lg">
                            Bookmark
                          </h2>
                          <img
                            className="relative w-8 h-8 overflow-hidden shrink-0"
                            alt=""
                            src="/icroundnavigatenext1.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex-1 rounded-2xl bg-colors-white-100 flex flex-col items-start justify-start pt-0 px-0 pb-2 gap-[8px] cursor-pointer border-[1px] border-solid border-whitesmoke-200 sm:flex-[unset] sm:self-stretch"
                      onClick={onMemoryFragmentClick}
                    >
                      <div className="self-stretch rounded-lg h-[174px] flex flex-col items-center justify-center bg-[url('/public/bannermemoryfragment2@3x.png')] bg-cover bg-no-repeat bg-[top]">
                        <img
                          className="relative w-40 h-40 object-cover"
                          alt=""
                          src="/achievementflag1-36@2x.png"
                        />
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start py-0 px-6">
                        <div className="flex-1 flex flex-row items-end justify-start p-2 gap-[8px]">
                          <img
                            className="relative rounded w-[32.1px] h-8 overflow-hidden shrink-0"
                            alt=""
                            src="/iconamoonprofilefill7.svg"
                          />
                          <h2 className="m-0 relative text-inherit leading-[120%] font-bold font-inherit lg:flex-1 md:text-lg">
                            Memory Fragment
                          </h2>
                          <img
                            className="relative w-8 h-8 overflow-hidden shrink-0"
                            alt=""
                            src="/icroundnavigatenext1.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex-1 rounded-2xl bg-colors-white-100 flex flex-col items-start justify-start pt-0 px-0 pb-2 gap-[8px] cursor-pointer border-[1px] border-solid border-whitesmoke-200 sm:flex-[unset] sm:self-stretch"
                      onClick={onAllItemClick}
                    >
                      <img
                        className="self-stretch rounded-2xl max-w-full overflow-hidden h-[174px] shrink-0 object-cover"
                        alt=""
                        src="/bannerallitem2@2x.png"
                      />
                      <div className="self-stretch flex flex-row items-center justify-start py-0 px-6">
                        <div className="flex flex-row items-end justify-start p-2 gap-[8px]">
                          <img
                            className="relative rounded w-[32.1px] h-8 overflow-hidden shrink-0"
                            alt=""
                            src="/iconamoonprofilefill8.svg"
                          />
                          <h2 className="m-0 relative text-inherit leading-[120%] font-bold font-inherit md:text-lg">
                            All Item
                          </h2>
                          <img
                            className="relative w-8 h-8 overflow-hidden shrink-0"
                            alt=""
                            src="/icroundnavigatenext1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden flex-col items-center justify-start gap-[8px] text-base sm:flex">
                  <img
                    className="relative rounded-xl w-[340px] h-[104px] object-cover"
                    alt=""
                    src="/bannerdashboardmobile1@2x.png"
                  />
                  <div
                    className="rounded-lg bg-colors-white-100 shadow-[0px_4px_10px_rgba(0,_0,_0,_0.05)] w-80 overflow-hidden flex flex-col items-center justify-center pt-0 px-0 pb-2 box-border gap-[8px] cursor-pointer"
                    onClick={onBookmark1ContainerClick}
                  >
                    <img
                      className="relative w-80 h-[58.7px] object-cover"
                      alt=""
                      src="/bookmarkimage2@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 gap-[8px]">
                      <img
                        className="relative rounded w-[24.1px] h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/iconamoonprofilefill1.svg"
                      />
                      <b className="flex-1 relative leading-[120%] flex items-end h-[26px]">
                        Profile
                      </b>
                      <img
                        className="relative w-8 h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/icroundnavigatenext.svg"
                      />
                    </div>
                  </div>
                  <div
                    className="rounded-lg bg-colors-white-100 shadow-[0px_4px_10px_rgba(0,_0,_0,_0.05)] w-80 overflow-hidden flex flex-col items-center justify-center pt-0 px-0 pb-2 box-border gap-[8px] cursor-pointer"
                    onClick={onBookmark1Container1Click}
                  >
                    <div className="w-80 h-[58.7px] flex flex-row items-center justify-center gap-[8px] bg-[url('/public/frame-42861@3x.png')] bg-cover bg-no-repeat bg-[top]">
                      <img
                        className="relative w-[156px] h-[58.7px] object-cover"
                        alt=""
                        src="/achievementflag1-25@2x.png"
                      />
                      <img
                        className="relative w-[156px] h-[58.7px] object-cover"
                        alt=""
                        src="/achievementflag1-37@2x.png"
                      />
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 gap-[8px]">
                      <img
                        className="relative rounded w-[24.1px] h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/iconamoonprofilefill2.svg"
                      />
                      <b className="flex-1 relative leading-[120%] flex items-end h-[26px]">
                        Memory Fragment
                      </b>
                      <img
                        className="relative w-8 h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/icroundnavigatenext.svg"
                      />
                    </div>
                  </div>
                  <div
                    className="rounded-lg bg-colors-white-100 shadow-[0px_4px_10px_rgba(0,_0,_0,_0.05)] w-80 overflow-hidden flex flex-col items-center justify-center pt-0 px-0 pb-2 box-border gap-[8px] cursor-pointer"
                    onClick={onBookmark1Container2Click}
                  >
                    <div className="self-stretch h-[58.7px] flex flex-row items-center justify-center gap-[8px] bg-[url('/public/frame-42851@3x.png')] bg-cover bg-no-repeat bg-[top]">
                      <img
                        className="self-stretch relative max-h-full w-[156px] object-cover"
                        alt=""
                        src="/achievementflag1-26@2x.png"
                      />
                      <img
                        className="self-stretch relative max-h-full w-[156px] object-cover"
                        alt=""
                        src="/achievementflag1-41@2x.png"
                      />
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 gap-[8px]">
                      <img
                        className="relative rounded w-[24.1px] h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/iconamoonprofilefill3.svg"
                      />
                      <b className="flex-1 relative leading-[120%] flex items-end h-[26px]">
                        Placed Bookmark
                      </b>
                      <img
                        className="relative w-8 h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/icroundnavigatenext.svg"
                      />
                    </div>
                  </div>
                  <div
                    className="rounded-lg bg-colors-white-100 shadow-[0px_4px_10px_rgba(0,_0,_0,_0.05)] w-80 overflow-hidden flex flex-col items-center justify-center pt-0 px-0 pb-2 box-border gap-[8px] cursor-pointer"
                    onClick={onBookmark1Container3Click}
                  >
                    <img
                      className="relative w-80 h-[58.7px] object-cover"
                      alt=""
                      src="/bookmarkimage3@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 gap-[8px]">
                      <img
                        className="relative rounded w-[24.1px] h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/iconamoonprofilefill3.svg"
                      />
                      <b className="flex-1 relative leading-[120%] flex items-end h-[26px]">
                        All Item
                      </b>
                      <img
                        className="relative w-8 h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/icroundnavigatenext.svg"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </section>
          <div className="self-stretch bg-colors-white-100 hidden flex-row items-center justify-between py-2 px-6 sm:flex sm:gap-[8px]">
            <div className="flex flex-col items-center justify-start">
              <img
                className="relative rounded w-8 h-7 overflow-hidden shrink-0 mix-blend-normal cursor-pointer"
                alt=""
                src="/bxsdashboard21.svg"
                onClick={onBxsdashboardIcon3Click}
              />
              <div className="relative tracking-[0.02em] leading-[100%] font-medium">
                Dashboard
              </div>
            </div>
            <div className="flex flex-col items-center justify-start">
              <img
                className="relative w-7 h-7 overflow-hidden shrink-0 mix-blend-normal cursor-pointer"
                alt=""
                src="/mditreasurechest4.svg"
                onClick={onMditreasureChestIcon2Click}
              />
              <div className="relative tracking-[0.02em] leading-[100%] font-medium">
                Inventory
              </div>
            </div>
            <div className="hidden flex-col items-center justify-start">
              <img
                className="relative w-7 h-7 overflow-hidden shrink-0 mix-blend-normal"
                alt=""
                src="/mditreasurechest5.svg"
              />
              <div className="relative tracking-[0.02em] leading-[100%] font-medium">
                Logout
              </div>
            </div>
            <div className="flex flex-col items-center justify-start">
              <img
                className="relative rounded w-8 h-7 overflow-hidden shrink-0 mix-blend-normal cursor-pointer"
                alt=""
                src="/iconamoonprofilefill9.svg"
                onClick={onIconamoonprofileFill9Click}
              />
              <div className="relative tracking-[0.02em] leading-[100%] font-medium">
                Profile
              </div>
            </div>
          </div>
          <section className="self-stretch flex flex-row items-end justify-between py-1 px-6 text-left text-xs text-darkgray font-baloo-bhaina-2 sm:hidden">
            <div className="h-[15.1px] flex flex-row items-center justify-start gap-[16px] sm:gap-[4px]">
              <div className="relative leading-[133.2%] font-semibold sm:text-3xs">
                Privacy Policy
              </div>
              <img
                className="relative w-0.5 h-[16.5px]"
                alt=""
                src="/sparator1.svg"
              />
              <div className="relative leading-[133.2%] font-semibold sm:text-3xs">
                Terms and Services
              </div>
              <img
                className="relative w-0 h-[14.5px] hidden"
                alt=""
                src="/sparator1.svg"
              />
            </div>
            <div className="relative leading-[133.2%] font-semibold inline-block w-[154px] h-[15.1px] shrink-0 sm:text-3xs sm:text-right sm:flex-1">
              Copyright © 2023 TerraQuest
            </div>
          </section>
        </main>
      </div>
      {isDrawerOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeDrawer}
        >
          <DrawerMenu onClose={closeDrawer} />
        </PortalDrawer>
      )}
    </>
  );
};

export default PrototypeDashboard;
