import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DrawerMenu from "../components/drawer-menu";
import PortalDrawer from "../components/portal-drawer";

const DashboardBasic: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const onDashboardClick = useCallback(() => {
    navigate("/prototypedashboard");
  }, [navigate]);

  const onProfileClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onInventoryClick = useCallback(() => {
    navigate("/placedbookmark");
  }, [navigate]);

  const onInventoryMemoryFragmentClick = useCallback(() => {
    navigate("/memory-fragment");
  }, [navigate]);

  const onInventoryAllItemClick = useCallback(() => {
    navigate("/in-game-inventory-item");
  }, [navigate]);

  const onLogoutClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  const onProfile1Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onBookmarrkClick = useCallback(() => {
    navigate("/placedbookmark");
  }, [navigate]);

  const onMemoryFragmentClick = useCallback(() => {
    navigate("/memory-fragment");
  }, [navigate]);

  const onAllItemClick = useCallback(() => {
    navigate("/in-game-inventory-item");
  }, [navigate]);

  const onProfileMenuContainerClick = useCallback(() => {
    // Please sync "Prototype-Dashboard-profile" to the project
  }, []);

  const onBookmark1ContainerClick = useCallback(() => {
    // Please sync "Prototype-Dashboard-Memory Fragment" to the project
  }, []);

  const onBookmark1Container1Click = useCallback(() => {
    // Please sync "Prototype-Dashboard-All-type" to the project
  }, []);

  const onBookmark1Container2Click = useCallback(() => {
    // Please sync "Prototype-Dashboard-bookmark" to the project
  }, []);

  return (
    <>
      <div className="relative bg-whitesmoke-100 w-full h-screen overflow-hidden flex flex-col items-start justify-start text-left text-base text-dimgray font-baloo-bhaina-2">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[16px]">
          <div className="h-[824px] flex flex-row items-start justify-start md:hidden sm:hidden">
            <nav className="m-0 self-stretch rounded-tl-none rounded-tr-2xl rounded-br-2xl rounded-bl-none bg-colors-white-100 w-60 flex flex-col items-start justify-between p-4 box-border">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <img
                  className="relative w-52 h-24 object-cover"
                  alt=""
                  src="/logo208x96-1@2x.png"
                />
                <div className="self-stretch h-24 hidden flex-col items-center justify-center">
                  <img
                    className="relative w-[133.1px] h-20 object-cover lg:w-[199px]"
                    alt=""
                    src="/terraquestlogobig-11@2x.png"
                  />
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 opacity-[0.2]"
                  alt=""
                  src="/sparator.svg"
                />
                <div className="flex flex-col items-start justify-start p-2 gap-[16px]">
                  <button
                    className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] self-stretch rounded flex flex-row items-center justify-start gap-[8px]"
                    onClick={onDashboardClick}
                  >
                    <img
                      className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/bxsdashboard18.svg"
                    />
                    <div className="relative text-xs tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-dimgray text-left inline-block w-[104px] shrink-0 lg:text-base">
                      Dashboard
                    </div>
                  </button>
                  <button
                    className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] self-stretch rounded-lg flex flex-row items-center justify-start gap-[8px] opacity-[0.2]"
                    onClick={onProfileClick}
                  >
                    <img
                      className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/bxsdashboard3.svg"
                    />
                    <div className="relative text-xs tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left inline-block w-[104px] shrink-0 lg:text-base">
                      Profile
                    </div>
                  </button>
                  <button
                    className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] rounded-lg flex flex-row items-center justify-start gap-[8px] opacity-[0.2]"
                    onClick={onInventoryClick}
                  >
                    <img
                      className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/bxsdashboard4.svg"
                    />
                    <div className="relative text-xs tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left inline-block w-[104px] shrink-0 lg:text-base">
                      Inventory
                    </div>
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/iconparksoliddownone.svg"
                    />
                  </button>
                  <button className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] rounded-lg hidden flex-row items-center justify-start gap-[8px] opacity-[0.2]">
                    <img
                      className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/bxsdashboard5.svg"
                    />
                    <div className="relative text-xs tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left inline-block w-[104px] shrink-0 lg:text-base">
                      Placed Bookmark
                    </div>
                    <div className="relative w-4 h-4 overflow-hidden shrink-0" />
                  </button>
                  <button
                    className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] rounded-lg hidden flex-row items-center justify-start gap-[8px] opacity-[0.2]"
                    onClick={onInventoryMemoryFragmentClick}
                  >
                    <img
                      className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/bxsdashboard6.svg"
                    />
                    <div className="relative text-xs tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left inline-block w-[104px] shrink-0 lg:text-base">
                      Memory Fragment
                    </div>
                  </button>
                  <button
                    className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] rounded-lg hidden flex-row items-center justify-start gap-[8px] opacity-[0.2]"
                    onClick={onInventoryAllItemClick}
                  >
                    <img
                      className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/bxsdashboard7.svg"
                    />
                    <div className="relative text-xs tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left inline-block w-[104px] shrink-0 lg:text-base">
                      All item
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] self-stretch rounded-lg flex flex-row items-center justify-start gap-[8px] opacity-[0.2]">
                    <img
                      className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/bxsdashboard8.svg"
                    />
                    <div className="relative text-xs tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left inline-block w-[104px] shrink-0 lg:text-base">
                      Staking
                    </div>
                  </button>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start p-2 gap-[8px]">
                <button className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] self-stretch rounded-lg flex flex-row items-center justify-start gap-[8px] opacity-[0.2]">
                  <img
                    className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/bxsdashboard9.svg"
                  />
                  <div className="relative text-xs tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left lg:text-base">
                    Catalog Character
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] self-stretch rounded-lg flex flex-row items-center justify-start gap-[8px] opacity-[0.2]">
                  <img
                    className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/bxsdashboard10.svg"
                  />
                  <div className="relative text-xs tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left inline-block w-[104px] shrink-0 lg:text-base">
                    Creators
                  </div>
                </button>
                <button
                  className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] self-stretch rounded-lg flex flex-row items-center justify-start gap-[8px] opacity-[0.2]"
                  onClick={onLogoutClick}
                >
                  <img
                    className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/bxsdashboard13.svg"
                  />
                  <div className="relative text-xs tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left inline-block w-[104px] shrink-0 lg:text-base">
                    Logout
                  </div>
                </button>
              </div>
            </nav>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-center justify-between pt-0 px-0 pb-1 md:gap-[24px]">
            <div className="self-stretch bg-colors-white-100 shadow-[0px_3.5px_5.5px_rgba(0,_0,_0,_0.02)] hidden flex-row items-center justify-between py-2 px-4 md:flex sm:self-stretch sm:w-auto">
              <img
                className="relative w-[92.8px] h-14 object-cover"
                alt=""
                src="/terraquestlogobig-21@2x.png"
              />
              <img
                className="relative w-12 h-12 overflow-hidden shrink-0 cursor-pointer"
                alt=""
                src="/iconamoonmenuburgerhorizontalbold.svg"
                onClick={openDrawer}
              />
            </div>
            <div className="self-stretch h-[695.5px] flex flex-col items-center justify-start py-0 px-4 box-border gap-[24px]">
              <section className="self-stretch flex flex-row items-center justify-end py-4 px-0 gap-[8px] md:hidden">
                <img
                  className="flex-1 relative rounded-2xl max-w-full overflow-hidden h-[13px]"
                  alt=""
                  src="/sparator3.svg"
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
              <div className="self-stretch rounded-2xl bg-colors-white-100 flex flex-col items-start justify-start p-6 sm:p-5 sm:box-border">
                <div className="self-stretch rounded-2xl flex flex-col items-start justify-start p-4 gap-[16px] border-[2px] border-dashed border-whitesmoke-400 sm:gap-[0px] sm:py-4 sm:px-1 sm:box-border">
                  <div className="self-stretch rounded-2xl flex flex-col items-start justify-start p-4 gap-[16px] sm:hidden">
                    <div className="h-8 flex flex-row items-center justify-start gap-[8px]">
                      <h1
                        className="m-0 relative text-inherit leading-[120%] uppercase font-bold font-inherit md:text-base"
                        id="Dashboard"
                      >
                        Dashboard
                      </h1>
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0 sm:w-6 sm:h-6"
                        alt=""
                        src="/phinfobold.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-sm">
                      <div className="self-stretch rounded-lg flex flex-col items-center justify-center bg-[url('/public/welcomebanner1@3x.png')] bg-cover bg-no-repeat bg-[top] text-5xl text-colors-white-100">
                        <h1 className="m-0 relative text-inherit leading-[92.23px] uppercase font-bold font-inherit">
                          Welcome to Terraquest
                        </h1>
                      </div>
                      <div
                        className="self-stretch rounded-lg bg-colors-white-100 flex flex-col items-start justify-start pt-0 px-0 pb-2 cursor-pointer border-[1px] border-solid border-whitesmoke-200 sm:self-stretch sm:w-auto"
                        onClick={onProfile1Click}
                      >
                        <img
                          className="self-stretch relative rounded-lg max-w-full overflow-hidden h-[120px] shrink-0 object-cover lg:h-40 md:h-[120px] sm:self-stretch sm:w-auto"
                          alt=""
                          src="/group-36891@2x.png"
                        />
                        <div className="self-stretch flex flex-row items-center justify-start py-0 px-4 gap-[16px] sm:self-stretch sm:w-auto">
                          <div className="flex flex-row items-end justify-start p-2 gap-[8px]">
                            <img
                              className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/profileicon.svg"
                            />
                            <h2 className="m-0 relative text-inherit leading-[120%] font-bold font-inherit md:text-lg">
                              Profile
                            </h2>
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/nexticon.svg"
                            />
                          </div>
                          <h3 className="m-0 flex-1 relative text-inherit tracking-[0.02em] leading-[120%] font-normal font-dm-sans text-gray sm:flex-1">
                            View your profile
                          </h3>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[8px] sm:flex-col">
                        <div
                          className="flex-1 rounded-lg bg-colors-white-100 flex flex-col items-start justify-start cursor-pointer border-[1px] border-solid border-whitesmoke-200 sm:flex-[unset] sm:self-stretch"
                          onClick={onBookmarrkClick}
                        >
                          <div className="self-stretch rounded-lg h-[120px] overflow-hidden shrink-0 flex flex-col items-center justify-center bg-[url('/public/bannerbookmark1@3x.png')] bg-cover bg-no-repeat bg-[top]">
                            <img
                              className="relative w-[104px] h-[104px] object-cover"
                              alt=""
                              src="/achievementflag1-32@2x.png"
                            />
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start py-0 px-4">
                            <div className="w-[145px] flex flex-row items-center justify-start p-2 box-border gap-[8px]">
                              <img
                                className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/bookmarkicon.svg"
                              />
                              <h2 className="m-0 flex-1 relative text-inherit leading-[120%] font-bold font-inherit lg:flex-1 md:text-lg">
                                Bookmark
                              </h2>
                              <img
                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/nexticon.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="flex-1 rounded-lg bg-colors-white-100 flex flex-col items-start justify-start cursor-pointer border-[1px] border-solid border-whitesmoke-200 sm:flex-[unset] sm:self-stretch"
                          onClick={onMemoryFragmentClick}
                        >
                          <div className="self-stretch rounded-lg h-[120px] overflow-hidden shrink-0 flex flex-col items-center justify-center bg-[url('/public/bannermemoryfragment1@3x.png')] bg-cover bg-no-repeat bg-[top]">
                            <img
                              className="relative w-[104px] h-[104px] object-cover"
                              alt=""
                              src="/achievementflag1-33@2x.png"
                            />
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start py-0 px-2">
                            <div className="flex-1 flex flex-row items-center justify-start p-2 gap-[8px]">
                              <img
                                className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/memoryfragmenticon.svg"
                              />
                              <h2 className="m-0 flex-1 relative text-inherit leading-[120%] font-bold font-inherit lg:flex-1 md:text-lg">
                                Memory Fragment
                              </h2>
                              <img
                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/nexticon1.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="flex-1 rounded-lg bg-colors-white-100 flex flex-col items-start justify-start cursor-pointer border-[1px] border-solid border-whitesmoke-200 sm:flex-[unset] sm:self-stretch"
                          onClick={onAllItemClick}
                        >
                          <img
                            className="self-stretch rounded-lg max-w-full overflow-hidden h-[120px] shrink-0 object-cover"
                            alt=""
                            src="/bannerallitem1@2x.png"
                          />
                          <div className="self-stretch flex flex-row items-start justify-start py-0 px-1">
                            <div className="w-[235px] flex flex-row items-center justify-start p-2 box-border gap-[8px]">
                              <img
                                className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/inventoryicon.svg"
                              />
                              <h2 className="m-0 flex-1 relative text-inherit leading-[120%] font-bold font-inherit md:text-lg">
                                In-game inventory items
                              </h2>
                              <img
                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/nexticon.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden flex-col items-center justify-start gap-[8px] sm:flex">
                    <img
                      className="relative rounded-xl w-[340px] h-[104px] object-cover"
                      alt=""
                      src="/bannerdashboardmobile@2x.png"
                    />
                    <div
                      className="rounded-lg bg-colors-white-100 shadow-[0px_4px_10px_rgba(0,_0,_0,_0.05)] w-80 overflow-hidden flex flex-col items-center justify-center pt-0 px-0 pb-2 box-border gap-[8px] cursor-pointer"
                      onClick={onProfileMenuContainerClick}
                    >
                      <img
                        className="relative w-80 h-[58.7px] object-cover"
                        alt=""
                        src="/bookmarkimage@2x.png"
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
                      onClick={onBookmark1ContainerClick}
                    >
                      <div className="w-80 h-[58.7px] flex flex-row items-center justify-center gap-[8px] bg-[url('/public/frame-4286@3x.png')] bg-cover bg-no-repeat bg-[top]">
                        <img
                          className="relative w-[156px] h-[58.7px] object-cover"
                          alt=""
                          src="/achievementflag1-23@2x.png"
                        />
                        <img
                          className="relative w-[156px] h-[58.7px] object-cover"
                          alt=""
                          src="/achievementflag1-34@2x.png"
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
                      onClick={onBookmark1Container1Click}
                    >
                      <div className="self-stretch h-[58.7px] flex flex-row items-center justify-center gap-[8px] bg-[url('/public/frame-4285@3x.png')] bg-cover bg-no-repeat bg-[top]">
                        <img
                          className="self-stretch relative max-h-full w-[156px] object-cover"
                          alt=""
                          src="/achievementflag1-24@2x.png"
                        />
                        <img
                          className="self-stretch relative max-h-full w-[156px] object-cover"
                          alt=""
                          src="/achievementflag1-4@2x.png"
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
                      onClick={onBookmark1Container2Click}
                    >
                      <img
                        className="relative w-80 h-[58.7px] object-cover"
                        alt=""
                        src="/bookmarkimage1@2x.png"
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
              </div>
              <div className="relative leading-[133.2%] font-semibold inline-block w-[154px] h-[15.1px] shrink-0 sm:text-3xs sm:text-right sm:flex-1">
                Copyright © 2023 TerraQuest
              </div>
            </section>
          </div>
        </div>
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

export default DashboardBasic;
