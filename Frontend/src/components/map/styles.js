import styled from "styled-components";

export const ZoomControls = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
`;

export const ZoomButtons = styled.button`
  font-size: 18px;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255);
  border: 1px;
  border-radius: 50%;
  cursor: pointer;
`;

export const Picture = styled.img`
  width: 366px;
  height: 213px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  align-items: center;
  gap: 8px;
  padding: 16px;
`;

export const Title = styled.h3`
  color: white;
  font-weight: 700;
`;

export const Svg = styled.div`
  background: white;
  border-radius: 30px;
  padding: 10px;
  cursor: pointer;
`;
