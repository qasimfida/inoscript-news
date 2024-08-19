import React, { useState } from "react";
import { Card, Tooltip } from "antd";
import PLACEHOLDER_IMAGE from "../../assets/news-image.jpg";
import { EllipsisText, StyledCard, StyledImage } from "./styles";

const { Meta } = Card;

const NewsCard = ({
  imageUrl,
  title,
  description,
  onClick,
  url,
  sourceName,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => setIsLoading(false);
  return (
    <StyledCard
      hoverable
      cover={
        <StyledImage
          style={{ visibility: isLoading ? "hidden" : "visible" }}
          alt="new-image"
          src={imageUrl || PLACEHOLDER_IMAGE}
          onLoad={handleImageLoad}
        />
      }
      onClick={onClick}
    >
      <p className="source">{sourceName}</p>
      <Meta
        title={<Tooltip title={title}>{title}</Tooltip>}
        description={<EllipsisText>{description}</EllipsisText>}
      />
    </StyledCard>
  );
};

export default NewsCard;