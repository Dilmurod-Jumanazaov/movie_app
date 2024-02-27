import styled from "styled-components";

export const StyledPageTitle = styled.h2`
  margin: 0;
  padding: 36px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`
export const StyledScrollWrapper = styled.div`
  max-height: 500px;
  height: 100%;
  padding: 15px;
  border: 2px solid #ffffff73;
  border-radius: 10px;
  overflow-y: scroll;
  scrollbar-color: red;
  ::-webkit-scrollbar {
    width: 10px;
    overflow-x: none;
}
::-webkit-scrollbar-track {
  background-color: green;
}
::-webkit-scrollbar-thumb {
  background-color: red;
}
`