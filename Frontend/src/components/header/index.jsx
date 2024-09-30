"use client";
import React, { useState, useEffect } from "react";
import {
  Wrap,
  Heading,
  BoxContainer,
  Match,
  SeasonContainer,
  Season,
  Tab,
  SeasonIcon,
  PoperContainer,
  CloseButton,
  Tabs,
  TabWarpper,
  VerticalLine,
} from "./styles";
import Popover from "../popover";
import DateRange from "../dateRange";
import MonthPicker from "../monthPicker";
import { MatchIcon } from "../icons";
import { seasons, travellers, TabsContent, SubTabsContent } from "./constants";

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [openPopover, setOpenPopover] = useState(null);
  const [activeMenu, setActiveMenu] = useState("");
  const [activeTab, setActiveTab] = useState("Seasons");
  const [activeSeason, setActiveSeason] = useState("");
  const [activeTravellers, setActiveTravellers] = useState("");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleTogglePopover = (popoverId) => {
    setOpenPopover(openPopover === popoverId ? null : popoverId);
    setActiveMenu(popoverId);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
    setActiveMenu("");
  };

  return (
    <Wrap isloaded={isLoaded ? 1 : 0}>
      <Heading>Personalize your experience</Heading>
      <BoxContainer>
        <Popover
          isopen={!!openPopover}
          onClose={handleClosePopover}
          placement="bottom"
          offsetX={0}
          offsetY={14}
          width={"auto"}
          renderTargetContent={() => (
            <TabWarpper>
              {TabsContent.map((item, index) => (
                <>
                  <Tab
                    key={index}
                    active={activeMenu === item.name ? 1 : 0}
                    onClick={() => handleTogglePopover(item.name)}
                  >
                    {item.name}
                  </Tab>
                  {item.border && <VerticalLine />}
                </>
              ))}
            </TabWarpper>
          )}
          renderPopoverContent={() => (
            <PoperContainer>
              <CloseButton onClick={handleClosePopover}>&times;</CloseButton>
              {openPopover === "When" ? (
                <>
                  <Tabs>
                    {SubTabsContent.map((item, index) => (
                      <Tab
                        key={index}
                        tabs
                        active={activeTab === item.name}
                        onClick={() => setActiveTab(item.name)}
                      >
                        {item.name}
                      </Tab>
                    ))}
                  </Tabs>

                  {activeTab === "Seasons" && (
                    <SeasonContainer>
                      {seasons.map((season, index) => (
                        <Season
                          key={index}
                          active={
                            activeSeason === season.name || activeSeason === ""
                          }
                          onClick={() => setActiveSeason(season.name)}
                        >
                          <SeasonIcon color={season.color}>
                            {season.icon}
                          </SeasonIcon>
                          <div>{season.name}</div>
                        </Season>
                      ))}
                    </SeasonContainer>
                  )}
                  {activeTab === "Months" && <MonthPicker />}
                  {activeTab === "Dates" && <DateRange />}
                </>
              ) : (
                <>
                  <h2>Choose your travellers</h2>
                  <SeasonContainer>
                    {travellers.map((traveler, index) => (
                      <Season
                        key={index}
                        active={
                          activeTravellers === traveler.name ||
                          activeTravellers === ""
                        }
                        onClick={() => setActiveTravellers(traveler.name)}
                      >
                        <SeasonIcon color={traveler.color}>
                          {traveler.icon}
                        </SeasonIcon>
                        <div>{traveler.name}</div>
                      </Season>
                    ))}
                  </SeasonContainer>
                </>
              )}
            </PoperContainer>
          )}
        />
      </BoxContainer>
      <Match>
        <MatchIcon />
        <p>SORT YOUR MATCHES</p>
      </Match>
    </Wrap>
  );
};

export default Header;
