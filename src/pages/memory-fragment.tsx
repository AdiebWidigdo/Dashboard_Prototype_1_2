import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DrawerMenu from "../components/drawer-menu";
import PortalDrawer from "../components/portal-drawer";

const MemoryFragment: FunctionComponent = () => {
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

  const onPrimaryButtonContainerClick = useCallback(() => {
    // Please sync "Prototype-Dashboard-Convert-Memory-Fragment" to the project
  }, []);

  return (
    <>
      <div className="relative bg-whitesmoke-100 w-full h-screen overflow-hidden flex flex-col items-start justify-start text-left text-base text-dimgray font-baloo-bhaina-2 md:items-center md:justify-start">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-row items-start justify-start md:hidden sm:hidden">
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
                    className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] self-stretch rounded-lg flex flex-row items-center justify-start gap-[8px] opacity-[0.2]"
                    onClick={onDashboardClick}
                  >
                    <img
                      className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/bxsdashboard2.svg"
                    />
                    <div className="relative text-xs tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-darkslategray-100 text-left inline-block w-[104px] shrink-0 lg:text-base">
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
                  <button className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] rounded-lg flex flex-row items-center justify-start gap-[8px] opacity-[0.2]">
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
                    className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] rounded-lg flex flex-row items-center justify-start gap-[8px]"
                    onClick={onInventoryMemoryFragmentClick}
                  >
                    <img
                      className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/bxsdashboard15.svg"
                    />
                    <div className="relative text-xs tracking-[0.02em] leading-[100%] font-medium font-dm-sans text-dimgray text-left inline-block w-[104px] shrink-0 lg:text-base">
                      Memory Fragment
                    </div>
                  </button>
                  <button
                    className="cursor-pointer [border:none] py-1 px-4 bg-[transparent] rounded-lg flex flex-row items-center justify-start gap-[8px] opacity-[0.2]"
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
            <div className="self-stretch h-[695.5px] flex flex-col items-center justify-start py-0 px-4 box-border gap-[24px] sm:pl-2 sm:pr-4 sm:box-border">
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
              <div className="self-stretch rounded-2xl bg-colors-white-100 flex flex-col items-start justify-center p-6 md:w-auto md:[align-self:unset] sm:p-2 sm:box-border">
                <div className="self-stretch rounded-2xl flex flex-col items-start justify-start p-6 gap-[16px] border-[2px] border-dashed border-whitesmoke-400 md:w-auto md:[align-self:unset] md:items-center md:justify-start sm:py-4 sm:px-2 sm:box-border">
                  <div className="h-8 flex flex-row items-center justify-start gap-[8px]">
                    <h1
                      className="m-0 relative text-inherit leading-[120%] uppercase font-bold font-inherit md:text-base"
                      id="Dashboard"
                    >
                      Memory Fragment
                    </h1>
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0 sm:w-6 sm:h-6"
                      alt=""
                      src="/phinfobold.svg"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-center gap-[8px] font-dm-sans sm:self-stretch sm:w-auto sm:flex-1 sm:flex-col sm:gap-[16px] sm:items-center sm:justify-start">
                    <div className="rounded-2xl bg-colors-white-100 shadow-[0px_3.5px_5.5px_rgba(0,_0,_0,_0.02)] hidden flex-row items-center justify-start border-[1px] border-solid border-whitesmoke-300 sm:flex sm:w-auto sm:[align-self:unset]">
                      <div className="rounded-2xl w-[120px] h-[200px] flex flex-col items-center justify-center bg-[url('/public/previewmobile@3x.png')] bg-cover bg-no-repeat bg-[top] lg:hidden md:hidden sm:flex sm:w-40 sm:h-[216px]">
                        <img
                          className="relative w-[120px] h-[120px] object-cover"
                          alt=""
                          src="/achievementflag1-2@2x.png"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center p-2 md:gap-[4px] md:pt-2 md:pb-4 md:box-border sm:pl-1 sm:pr-1 sm:box-border">
                        <div className="w-[190px] h-[35px] flex flex-row items-center justify-start gap-[9.32px]">
                          <b className="relative tracking-[0.02em] leading-[100%]">
                            Bookmark#1
                          </b>
                          <img
                            className="relative w-7 h-7 overflow-hidden shrink-0 hidden"
                            alt=""
                            src="/mdipencil.svg"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start text-3xs">
                          <div className="flex flex-row items-center justify-start gap-[11.65px]">
                            <b className="relative tracking-[0.02em] leading-[100%] inline-block w-[61px] shrink-0">
                              ID
                            </b>
                            <div className="flex flex-row items-center justify-start py-[4.661417484283447px] px-0 gap-[4.66px] text-xs">
                              <div className="relative leading-[19.77px] uppercase font-medium">
                                0x23 .... 23kjn
                              </div>
                              <img
                                className="relative w-[18.6px] h-[18.6px] overflow-hidden shrink-0"
                                alt=""
                                src="/phcopybold.svg"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start gap-[11.65px]">
                            <b className="relative tracking-[0.02em] leading-[100%] inline-block w-[61px] shrink-0">
                              Expiry
                            </b>
                            <b className="relative text-xs leading-[19.77px]">
                              50 D 12 H 2 M
                            </b>
                          </div>
                          <div className="flex flex-row items-center justify-start gap-[11.65px]">
                            <b className="relative tracking-[0.02em] leading-[100%] inline-block w-[61px] shrink-0">
                              Date Create
                            </b>
                            <div className="relative text-xs leading-[19.77px] uppercase font-medium">
                              11 / 12 / 2024
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start gap-[11.65px]">
                            <b className="relative tracking-[0.02em] leading-[100%] inline-block w-[61px] shrink-0">
                              Owned by
                            </b>
                            <div className="relative text-xs leading-[19.77px] uppercase font-medium">
                              Andi haw
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[11.65px]">
                            <b className="relative tracking-[0.02em] leading-[100%] inline-block w-[61px] shrink-0">
                              Content
                            </b>
                            <div className="relative text-inherit leading-[19.77px] font-medium font-inherit">
                              <ul className="m-0 pl-4">
                                <li className="mb-0">Resources</li>
                                <li className="mb-0">NPC</li>
                                <li>Lorem ipsum</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start text-sm text-colors-white-100">
                      <div className="flex flex-col items-start justify-start gap-[8px] sm:self-stretch sm:w-auto sm:gap-[32px] sm:items-center sm:justify-center">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[8px] lg:flex-row md:flex-row sm:flex-row">
                          <div className="flex flex-row items-start justify-start gap-[8px] md:flex-row sm:flex-row">
                            <div className="flex flex-col items-start justify-start gap-[8px]">
                              <button
                                className="cursor-pointer p-4 bg-[transparent] rounded-lg flex flex-row items-start justify-start border-[1px] border-solid border-lavender hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue active:box-border active:border-[1px] active:border-solid active:border-royalblue"
                                autoFocus={true}
                              >
                                <img
                                  className="relative w-20 h-20 object-cover lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-12 sm:h-12"
                                  alt=""
                                  src="/mapicon-21@2x.png"
                                />
                              </button>
                              <button className="cursor-pointer p-4 bg-[transparent] rounded-lg flex flex-row items-start justify-start border-[1px] border-solid border-lavender hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue">
                                <img
                                  className="relative w-20 h-20 object-cover lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-12 sm:h-12"
                                  alt=""
                                  src="/mapicon-21@2x.png"
                                />
                              </button>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[8px]">
                              <button className="cursor-pointer p-4 bg-[transparent] rounded-lg flex flex-row items-start justify-start border-[1px] border-solid border-lavender hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue">
                                <img
                                  className="relative w-20 h-20 object-cover lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-12 sm:h-12"
                                  alt=""
                                  src="/mapicon-21@2x.png"
                                />
                              </button>
                              <button className="cursor-pointer p-4 bg-[transparent] rounded-lg flex flex-row items-start justify-start border-[1px] border-solid border-lavender hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue active:box-border active:border-[1px] active:border-solid active:border-royalblue">
                                <img
                                  className="relative w-20 h-20 object-cover lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-12 sm:h-12"
                                  alt=""
                                  src="/mapicon-21@2x.png"
                                />
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[8px] md:flex-row sm:flex-row">
                            <div className="flex flex-col items-start justify-start gap-[8px]">
                              <button
                                className="cursor-pointer p-4 bg-[transparent] rounded-lg flex flex-row items-start justify-start border-[1px] border-solid border-lavender hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue active:box-border active:border-[1px] active:border-solid active:border-royalblue"
                                autoFocus={true}
                              >
                                <img
                                  className="relative w-20 h-20 object-cover lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-12 sm:h-12"
                                  alt=""
                                  src="/mapicon-21@2x.png"
                                />
                              </button>
                              <button className="cursor-pointer p-4 bg-[transparent] rounded-lg flex flex-row items-start justify-start border-[1px] border-solid border-lavender hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue">
                                <img
                                  className="relative w-20 h-20 object-cover lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-12 sm:h-12"
                                  alt=""
                                  src="/mapicon-21@2x.png"
                                />
                              </button>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[8px]">
                              <button className="cursor-pointer p-4 bg-[transparent] rounded-lg flex flex-row items-start justify-start border-[1px] border-solid border-lavender hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue">
                                <img
                                  className="relative w-20 h-20 object-cover lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-12 sm:h-12"
                                  alt=""
                                  src="/mapicon-21@2x.png"
                                />
                              </button>
                              <button className="cursor-pointer p-4 bg-[transparent] rounded-lg flex flex-row items-start justify-start border-[1px] border-solid border-lavender hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue active:box-border active:border-[1px] active:border-solid active:border-royalblue">
                                <img
                                  className="relative w-20 h-20 object-cover lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-12 sm:h-12"
                                  alt=""
                                  src="/mapicon-21@2x.png"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[8px] lg:flex-row md:flex-row sm:hidden sm:flex-row">
                          <div className="flex flex-row items-start justify-start gap-[8px] md:flex-row sm:flex-row">
                            <div className="flex flex-col items-start justify-start gap-[8px]">
                              <button
                                className="cursor-pointer p-4 bg-[transparent] rounded-lg flex flex-row items-start justify-start border-[1px] border-solid border-lavender hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue active:box-border active:border-[1px] active:border-solid active:border-royalblue"
                                autoFocus={true}
                              >
                                <div className="relative w-20 h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-12 sm:h-12" />
                              </button>
                              <button className="cursor-pointer p-4 bg-[transparent] rounded-lg flex flex-row items-start justify-start border-[1px] border-solid border-lavender hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue">
                                <div className="relative w-20 h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-12 sm:h-12" />
                              </button>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[8px]">
                              <button className="cursor-pointer p-4 bg-[transparent] rounded-lg flex flex-row items-start justify-start border-[1px] border-solid border-lavender hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue">
                                <div className="relative w-20 h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-12 sm:h-12" />
                              </button>
                              <button className="cursor-pointer p-4 bg-[transparent] rounded-lg flex flex-row items-start justify-start border-[1px] border-solid border-lavender hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue active:box-border active:border-[1px] active:border-solid active:border-royalblue">
                                <div className="relative w-20 h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-12 sm:h-12" />
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[8px] md:flex-row sm:flex-row">
                            <div className="flex flex-col items-start justify-start gap-[8px]">
                              <button
                                className="cursor-pointer p-4 bg-[transparent] rounded-lg flex flex-row items-start justify-start border-[1px] border-solid border-lavender hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue active:box-border active:border-[1px] active:border-solid active:border-royalblue"
                                autoFocus={true}
                              >
                                <div className="relative w-20 h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-12 sm:h-12" />
                              </button>
                              <button className="cursor-pointer p-4 bg-[transparent] rounded-lg flex flex-row items-start justify-start border-[1px] border-solid border-lavender hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue">
                                <div className="relative w-20 h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-12 sm:h-12" />
                              </button>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[8px]">
                              <button className="cursor-pointer p-4 bg-[transparent] rounded-lg flex flex-row items-start justify-start border-[1px] border-solid border-lavender hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue">
                                <div className="relative w-20 h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-12 sm:h-12" />
                              </button>
                              <button className="cursor-pointer p-4 bg-[transparent] rounded-lg flex flex-row items-start justify-start border-[1px] border-solid border-lavender hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue active:box-border active:border-[1px] active:border-solid active:border-royalblue">
                                <div className="relative w-20 h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-12 sm:h-12" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[8px] lg:gap-[4px] lg:items-center lg:justify-center sm:flex-col sm:gap-[8px]">
                          <div
                            className="rounded-lg bg-royalblue h-10 flex flex-row items-center justify-center py-0 px-3 box-border gap-[8px] cursor-pointer hover:bg-steelblue active:bg-darkslategray-200 lg:w-auto lg:[align-self:unset] lg:gap-[4px] lg:pl-4 lg:pr-4 lg:box-border md:pl-4 md:pr-4 md:box-border sm:self-stretch sm:w-auto sm:h-8 sm:gap-[8px]"
                            onClick={onPrimaryButtonContainerClick}
                          >
                            <img
                              className="relative w-5 h-5 overflow-hidden shrink-0 lg:w-5 lg:h-5"
                              alt=""
                              src="/rirefreshline.svg"
                            />
                            <b className="relative tracking-[0.02em] leading-[100%] lg:font-medium lg:font-dm-sans lg:text-sm lg:text-left sm:text-xs">
                              Transmute
                            </b>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start gap-[8px] sm:gap-[4px] sm:items-start sm:justify-center sm:flex-[unset] sm:self-stretch">
                            <div className="rounded-lg bg-dimgray h-10 flex flex-row items-center justify-center py-0 px-3 box-border gap-[8px] lg:pl-4 lg:pr-4 lg:box-border md:gap-[0px] md:pl-2 md:pr-2 md:box-border sm:flex-1 sm:h-8 sm:gap-[8px]">
                              <img
                                className="relative w-5 h-5 overflow-hidden shrink-0 lg:w-5 lg:h-5"
                                alt=""
                                src="/simpleiconsopensea.svg"
                              />
                              <b className="relative tracking-[0.02em] leading-[100%] lg:font-medium lg:font-dm-sans lg:text-center md:text-center sm:text-xs">
                                Sell to Opensea
                              </b>
                            </div>
                            <div className="rounded-lg box-border h-10 flex flex-row items-center justify-center py-0 px-3 gap-[8px] mix-blend-normal text-dimgray border-[1px] border-solid border-dimgray lg:items-center lg:justify-center lg:pl-4 lg:pr-4 lg:box-border md:gap-[4px] md:pl-2 md:pr-2 md:box-border sm:flex-1 sm:h-8 sm:gap-[8px]">
                              <img
                                className="relative w-5 h-5 overflow-hidden shrink-0 lg:w-5 lg:h-5"
                                alt=""
                                src="/simpleiconsopensea1.svg"
                              />
                              <b className="relative tracking-[0.02em] leading-[100%] lg:text-center sm:text-xs">
                                Buy on opensea
                              </b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-colors-white-100 shadow-[0px_3.5px_5.5px_rgba(0,_0,_0,_0.02)] flex flex-col items-start justify-start gap-[8px] text-xl border-[1px] border-solid border-whitesmoke-300 md:flex sm:hidden">
                      <div className="rounded-lg w-[276px] h-60 flex flex-col items-center justify-center bg-[url('/public/preview1@3x.png')] bg-cover bg-no-repeat bg-[top]">
                        <img
                          className="relative w-40 h-40 object-cover"
                          alt=""
                          src="/achievementflag1-22@2x.png"
                        />
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start pt-2 px-4 pb-8 gap-[11px] md:gap-[4px] md:pt-2 md:pb-4 md:box-border">
                        <div className="self-stretch h-[35px] flex flex-row items-center justify-start gap-[9.32px]">
                          <b className="relative tracking-[0.02em] leading-[100%]">
                            Memory Fragment#1
                          </b>
                          <img
                            className="relative w-7 h-7 overflow-hidden shrink-0 hidden"
                            alt=""
                            src="/mdipencil.svg"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[9.32px] text-xs">
                          <div className="flex flex-row items-center justify-start gap-[11.65px]">
                            <b className="relative tracking-[0.02em] leading-[100%] inline-block w-[75px] shrink-0">
                              ID
                            </b>
                            <div className="flex flex-row items-center justify-start py-[4.661417484283447px] px-0 gap-[4.66px]">
                              <div className="relative leading-[19.77px] uppercase font-medium">
                                0x238j23 .... 23kjn
                              </div>
                              <img
                                className="relative w-[18.6px] h-[18.6px] overflow-hidden shrink-0"
                                alt=""
                                src="/phcopybold.svg"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start gap-[11.65px]">
                            <b className="relative tracking-[0.02em] leading-[100%] inline-block w-[75px] shrink-0">
                              Expiry
                            </b>
                            <b className="relative leading-[19.77px]">
                              50 Days 12 hours 2 Minutes
                            </b>
                          </div>
                          <div className="flex flex-row items-center justify-start gap-[11.65px]">
                            <b className="relative tracking-[0.02em] leading-[100%] inline-block w-[75px] shrink-0">
                              Date Create
                            </b>
                            <div className="relative leading-[19.77px] uppercase font-medium">
                              11 / 12 / 2024
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start gap-[11.65px]">
                            <b className="relative tracking-[0.02em] leading-[100%] inline-block w-[75px] shrink-0">
                              Owned by
                            </b>
                            <div className="relative leading-[19.77px] uppercase font-medium">
                              Andi haw
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[11.65px]">
                            <b className="relative tracking-[0.02em] leading-[100%] inline-block w-[75px] shrink-0">
                              Content
                            </b>
                            <div className="relative text-inherit leading-[19.77px] font-medium font-inherit">
                              <ul className="m-0 pl-4">
                                <li className="mb-0">Resources</li>
                                <li className="mb-0">NPC</li>
                                <li>Lorem ipsum</li>
                              </ul>
                            </div>
                          </div>
                        </div>
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

export default MemoryFragment;
