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
        <Title data-aos="fade-up">To SORI</Title>
      </Divider>
      <Image data-aos="fade-up" src={Flower} />
      <Content data-aos="fade-up">
        안녕하세요 자매님.
        <br />
        <br />
        저는 김대건 형제라고 합니다.
        <br />
        <br />
        한 형제님의 교통을 통해서 자매님과의 결혼을 기도하기 시작했고,
        <br />
        <br />
        이제는 자매님과 함께 주님을 섬기며 살기로 결심한 형제네요.
        <br />
        <br />
        지금까지 약 9개월 동안의 생활동안 많은 실패와 성공이 있었지만
        <br />
        <br />
        기도를 통해서 제가 보호되고 자라게 되었다는 것은, 하나님 앞에서 정말 부끄러움이 없습니다.
        <br />
        <br />
        제게 주어진 희미한 느낌을 붙잡으면서 계속 기도하였을 때, 주님께서 정말 분명히 말씀하셨습니다.
        <br />
        <br />
        <span style={{"font-weight":"bold"}}>"내가 너를 위해서 안배한 사람이다." </span>
        <br />
        <br />
        그리고 자매님을 처음 만났을 때, 그 말씀은 확신이 되었습니다. 
        <br />
        (번외로, 아직까지도 자매님이 놀란 것은 제 눈에 선해요 ㅎㅎ)
        <br />
        <br />
        그런데 자매님을 만날 때마다 제 안에 조금의 불편함이 있었는데,
        <br />
        <br />
        제 감정이 계속해서 커져서 주님을 놓치지는 않았나 하는 불안감이었습니다.
        <br />
        <br />
        그러한 것들을 두고 계속해서 기도하였을 때,
        <br />
        <br />
        염려하지 말고 단순히 하나님께 나아가 자매님과 저의 결혼에 대한 축복을 기도할 수 있었습니다.
        <br />
        <br />
        자매님 제게 와줘서 감사해요
        <br />
        <br />
        저라는 사람을 통해서 자매님이 주님과 더 가까워지고, 더 주님을 사랑할 수 있기를..
        <br />
        <br />
      </Content>
    </Wrapper>
  );
};

export default Greeting;
