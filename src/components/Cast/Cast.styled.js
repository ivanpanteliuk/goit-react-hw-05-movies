import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 17px;
`;

export const CastItem = styled.li`
  flex-basis: calc((100% - 68px) / 5);
  background-color: rgb(31, 30, 43);
  box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.2), 0 6px 12px rgba(0, 0, 0, 0.1);
`;

export const CastTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 300px;
  padding: 20px;
  background-color: rgb(31, 30, 43);
  color: #fff;
  flex-grow: 1;
  font-size: 20px;
`;

export const CastSubtitle = styled.h3`
  color: #ffbd2a;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const CastText = styled.p`
  font-size: 18px;
`;

export const CastSpanText = styled.span`
  font-weight: bold;
  font-style: none;
  font-size: 22px;
`;
