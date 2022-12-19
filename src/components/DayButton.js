import styled from "styled-components";

export default function DayButton(props) {
  const { day, selected, id, weekSelected, setWeekSelected } = props;

  function updateDaySelected() {
    const newArray = [...weekSelected];
    newArray[id].selected = !selected;
    setWeekSelected(newArray);
    console.log(weekSelected)
  }
  return <Button type="button" color={selected} background={selected} onClick={updateDaySelected}>{day}</Button>;
}

const Button = styled.button`
  width: 30px;
  height: 30px;
  margin-right: 2px;
  color: ${props => props.color?"#FFFFFF":"#CFCFCF"};
  font-size: 20px;
  background: ${props => props.color?"#CFCFCF":"#FFFFFF"};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  border-color: #d4d4d4;
`;
