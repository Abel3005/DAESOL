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
        지내온 시간이 많지 않아 서로를 아직 잘 모르지만,
        <br />
        시간이 달라서 서로가 다른 점들이 있지만,
        <br />
        앞으로의 우리의 시간은 더 많을 것이고 더 행복할 것임을 믿습니다.
        <br />
        때로는 울고, 웃으며 사랑하는 가정이 되어서 함께 나아가요
        <br />
        <br />
        <span style={{"font-weight":"bold" , color : "red" }}>사랑해 솔이야 </span>
        <br />
        
      </Content>
    </Wrapper>
  );
};

export default Quote;
