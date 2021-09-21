import React from "react";
import { Typography } from "../../atoms/Typography/ui";
import { InputWithButton } from "../../molecules/InputWithButton/ui";
import { SubscriptionBlockWrapper } from "./styled";

export const SubscriptionBlock: React.FC = () => {
  return (
    <SubscriptionBlockWrapper>
      <Typography width="1100px" type="blockHeader">
        Подписывайтесь на нашу рассылку и узнавайте ПЕРВЫМИ об эксклюзивных
        акциях и предложениях!
      </Typography>
      <InputWithButton placeholder="Ваш E-mail"/>
    </SubscriptionBlockWrapper>
  );
};
