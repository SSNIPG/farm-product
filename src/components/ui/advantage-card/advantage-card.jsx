import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { Advantage, Image, Owner, Header, Text } from "./styles";

function AdvantageCard({ title, owner, about, isNegative, image }) {
  return (
    <Advantage isNegative={isNegative}>
      <Header>
        <Image width={56} height={56} src={image} alt={title} />
        <div>
          <Owner isNegative={isNegative}>{owner}</Owner>
          <Title as="h3" size={TitleSize.EXTRA_SMALL}>
            {title}
          </Title>
        </div>
      </Header>
      <Text dangerouslySetInnerHTML={{ __html: about }} />
    </Advantage>
  );
}

export default AdvantageCard;
