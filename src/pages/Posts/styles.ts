import styled from 'styled-components';

interface ButtonProps {
  active: boolean;
}

export const Container = styled.div`
  height: 100%;
  background: #F5F5F5;
  padding: 10px 0;
`;

export const Content = styled.div`
  width: 80%;
  margin: 20px auto;
  display: flex;
`;

export const FilterContent = styled.div`
  border: 2px solid #DDD;
  background: #FFF;
  height: 300px;
  width: 400px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px 5px;

  span {
    margin-bottom: 5px;
  }
`;

export const Button = styled.button<ButtonProps>`
  background: #FFF;
  border: 1px solid #DDD;
  margin-bottom: 5px;
  padding: 5px;
  width: 250px;

  ${(props) =>
    props.active && {
    background: '#30a7d7',
  }}
`;

export const PostList = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const PostItem = styled.div`
  border: 1px solid #E6ECF0;
  display: flex;
  align-items: center;
  padding: 20px 10px;
  margin-bottom: 10px;
  background: #F5F8FA;
  cursor: pointer;
  transition: all 0.2s;

  &:hover{
    border-color: #78C7F8;
    transform: translateX(10px);
  }

  div p:first-child {
    color: #7A8996;
    margin-bottom: 5px;
  }

  div span{
    font-size: 20px;
    font-weight: bold;
    color: black;
  }

 img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 15px;
  }
`;
