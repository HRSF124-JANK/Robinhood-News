import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Header, TextBody, Icon } from './index.js'

const Box = styled.div`
  border-radius: 4px;
  position: relative;
  transition: bacgkround 150ms;
  display: flex;
  min-height: 134px;
`

const Text = styled.div`
  padding-right: 0;
  flex-direction: column;
  flex-grow: 1;
  display: flex;
`
const ViewsBox = styled.div`
  margin-top: auto;
  line-height: 19px;
  color: #8c8c8e;
  fill: #8c8c8e;
`

const ImageBox = styled.div`
  border-radius: 4px;
  flex-shrink: 0;
  height: 134px;
  width: 196px;
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const NewsArticle = (props) => {
  let { source, body, title, thumbnail, views, date } = !!props.title ? props : ""

  return(
    <Box>
      <Text>
        <Header source={source} date={date} />
        <TextBody title={title} body={body} />
        <ViewsBox>
          <Icon />{views}
        </ViewsBox>
      </Text>

      <ImageBox>
        <Image src={thumbnail} />
      </ImageBox>

    </Box>
  )
}

export default NewsArticle
