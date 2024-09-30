import styled from 'styled-components';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export const PickerContainer = styled.div`
  background: #fff;
  width: fit-content;
  .rdrDateDisplayWrapper, .rdrDefinedRangesWrapper {
    display: none;
  }

  .rdrCalendarWrapper {
    font-size: 14px;
  }

  .rdrMonth {
    padding: 10px;
    width: 100%;
  }

  .rdrMonths {
    border-bottom: 1px solid #000;
  }

  .rdrInRange {
    background: gray !important;
  }

  .rdrMonthAndYearPickers {
    display: none;
  }

  .rdrNextPrevButton {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
  .rdrWeekDays {
    gap: 4px;
  }
  .rdrWeekDay {
    font-weight: 600;
    font-size: 12px;
  }

  .rdrDayNumber span {
    padding: 8px;
    font-size: 14px;
  }

  .rdrDay {
    height: 30px;
  }

  .rdrDayStartPreview, .rdrDayInPreview, .rdrDayEndPreview {
    background: rgba(5, 15, 38, 0.3);
  }
  .rdrDayToday .rdrDayNumber span:after {
    height: 0;
  }
  .rdrSelected {
    background: #000;
    color: #fff;
  }

  .rdrDayDisabled span {
    color: #CDCFD4;
  }
`;


export const ClearButton = styled.div`
padding: 15px 0px;
  color: #000;
  cursor: pointer;
  font-weight: 600;
`;
