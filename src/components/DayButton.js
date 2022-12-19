import styled from "styled-components";

export default function DayButton(props) {
  const { day, selected, id, weekSelected, setWeekSelected } = props;

  function updateDaySelected(){
    const newArray = weekSelected;
    console.log(newArray)
  }
  return (
    <Button
      // onClick={() => updateDaySelected}
    >
      {day}
    </Button>
  );
}

const Button = styled.button`
  width: 30px;
  height: 30px;
  margin-right: 2px;
  color: #dbdbdb;
  font-size: 20px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  border-color: #d4d4d4;
`;
