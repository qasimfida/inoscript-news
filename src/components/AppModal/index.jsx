import React from "react";
import { Divider } from "antd";
import PLACEHOLDER_IMAGE from "../../assets/news-image.jpg";
import { StyledContent, StyledModal } from "./styles";

const AppModal = ({
  isVisible,
  title,
  content,
  url,
  description,
  imageUrl,
  onOk,
  onCancel,
}) => {
  return (
    <StyledModal
      open={isVisible}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
    >
      <StyledContent>
        <a className="title-link" href={url} target="_blank" rel="noreferrer">
          <h2>{title}</h2>
        </a>
        <Divider />
        <img
          src={imageUrl || PLACEHOLDER_IMAGE}
          alt={title}
          style={{ width: "100%" }}
        />
        <Divider />
        <p>{description}</p>
        <p>
          {content}
          &nbsp;{" "}
          <a href={url} target="_blank" rel="noreferrer">
            Read more...
          </a>
        </p>
      </StyledContent>
    </StyledModal>
  );
};

export default AppModal;
