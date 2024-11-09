import React from "react";
import styled from "styled-components";
import QuotePaper from "../assets/Quote.png";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

const Content = styled.span`
  display: block;
  margin: 0 auto;
  font-size: 1.3rem;
  font-family: "mom_to_daughter";
  text-align: center;
  color: var(--title-color);
  line-height: 2.25rem;
  opacity: 0.75;
  background-image: url(${QuotePaper});
  background-repeat: no-repeat;
  background-position: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Quote = () => {
  return (
    <Wrapper>
      <Image src={Flower} data-aos="fade-up" />
      <Content data-aos="fade-up">
        아버지께서 그분의 영광의 풍성을 따라 그분의 영을 통하여
        <br />
        능력으로 우리를 속사람에 이르도록 강하게 해 주시고
        <br />
        믿음을 통하여 그리스도께서 우리의 마음에 거처를 정하시게 하시며
        <br />
        사랑 안에서 뿌리를 내리고 터를 잡아서
        <br />
        모든 성도들과 함께 그 너비와 길이와 높이와 깊이를 깨달을 수 있는 충분한 역량과
        <br />
        지식을 초월하는 그리스도의 사랑을 알 수 있는 역량이 있게 하시어
        <br />
        하나님의 모든 충만에 이르도록 충만하게 되기를 바랍니다.
      </Content>
    </Wrapper>
  );
};

export default Quote;
