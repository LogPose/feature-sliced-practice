import React from "react";
import { Footer } from "../../shared/ui/organism/Footer/ui";
import { GaleryBlock } from "../../shared/ui/organism/GaleryBlock/ui";
import { Header } from "../../shared/ui/organism/Header/ui";
import { InfoBlock } from "../../shared/ui/organism/InfoBlock/ui";
import { IntroBlock } from "../../shared/ui/organism/IntroBlock/ui";
import { MenuBlock } from "../../shared/ui/organism/MenuBlock/ui";
import { MissionBlock } from "../../shared/ui/organism/MissionBlock/ui";
import { ReviewBlock } from "../../shared/ui/organism/ReviewBlock/ui";
import { SubscriptionBlock } from "../../shared/ui/organism/SubscriptionBlock/ui";
import { GeneralPageWrapper } from "./styled";


export const GeneralPage: React.FC = () => {
  return (
    <GeneralPageWrapper>
      <Header/>
      <IntroBlock />
      <MissionBlock />
      <MenuBlock />
      <InfoBlock />
      <GaleryBlock />
      <ReviewBlock />
      <SubscriptionBlock />
      <Footer />
    </GeneralPageWrapper>
  );
};
