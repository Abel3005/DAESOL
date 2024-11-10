import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from "../../config";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  margin: 0 auto;
  width: 70%;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const Content = styled.p`
  font-size: 0.72rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

const GroomBride = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Greeting = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
        <Title data-aos="fade-up">안녕하세요 자매님,,</Title>
      </Divider>
      <Image data-aos="fade-up" src={Flower} />
      <Content data-aos="fade-up">
        음,, 우선 간단히 제 소개를 먼저 할게요..ㅎㅎ
        <br />
        <br />
        저는 김대건 형제라고 합니다.
        <br />
        <br />
        한 형제님의 교통을 통해서 기도를 시작하게 됐고,
        <br />
        <br />
        지금까지 약 9개월 동안의 생활이 쉽지는 않았지만, 이 기도를 통해서 제가 보호되고 자라게 되었다는 것은,
        <br />
        <br />
        하나님 앞에서 정말 부끄러움이 없습니다.
        <br />
        <br />
        제게 주어진 희미한 느낌을 붙잡으면서 계속 기도하였을 때, 주님께서 정말 분명히 말씀하셨습니다.
        <br />
        <br />
        <span style={{"font-weight":"bold" , color : "red" }}>"내가 너를 위해서 안배한 사람이다." </span>
        <br />
        <br />
        그리고 자매님을 처음 만나고 지금까지 정말 주님께 감사하고 있습니다.
        <br />
        <br />
        자매님 제게 와줘서 감사해요
      </Content>
    </Wrapper>
  );
};

export default Greeting;
