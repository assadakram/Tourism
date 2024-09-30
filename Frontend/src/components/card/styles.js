import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 281px;
  height: 373px;
  cursor: pointer;
  @media (max-width: 768px) {
    height: min-content;
  }
  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  img {
    border-radius: 16px;
  }
`;

export const MatchTag = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 8px 12px;
  align-items: center;
  background: rgba(211, 225, 114, 1);
  border-radius: 30px;
  display: flex;
  gap: 4px;
`;

export const MatchTitle = styled.div`
  font-size: 12px;
  font-weight: 500;
`;

export const Title = styled.h2`
  margin: 0;
  color: var(--Colors-Base-Black, rgba(0, 0, 0, 1));
`;

export const Location = styled.div`
  color: var(--Colors-Base-Gray, rgba(119, 120, 124, 1));
  font-size: 12px;
  font-weight: 500;
`;

export const FooterWapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Text = styled.p`
  margin: 0;
  color: var(--Colors-Base-Black, rgba(0, 0, 0, 1));
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
`;

// Skeleton Styles
export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SkeletonImage = styled.div`
  width: 281px;
  height: 229px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: 1.5s infinite linear;
  border-radius: 8px;
  @media (max-width: 768px) {
    height: 150px;
  }
  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const SkeletonTitle = styled.div`
  width: 60%;
  height: 20px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: 1.5s infinite linear;
  border-radius: 4px;
  margin-bottom: 8px;
`;

export const SkeletonLocation = styled.div`
  width: 40%;
  height: 18px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: 1.5s infinite linear;
  border-radius: 4px;
`;

export const SkeletonFooter = styled.div`
  width: 30%;
  height: 18px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: 1.5s infinite linear;
  border-radius: 4px;
`;
