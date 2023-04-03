
import context from '@context';

import { NoContent } from '@library/design';
import { ArticleDto } from '@library/kernel';

import React from 'react';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Article from './Article';


const _Item = styled.div`
  display: block;
  
  & + & {
    margin: 32px 0 0;
  }
`;


function Content() {
  const navigate = useNavigate();
  const { controller } = React.useContext(context);

  function handleReadMore(uuid: string) {
    navigate(process.env['PUBLIC_URL'] + '/articles/' + uuid);
  }

  if ( ! controller!.articles.length) {
    return <NoContent />;
  }

  return (
    <>
      {controller.articles.map((article: ArticleDto) => (
        <_Item key={article.uuid}>
          <Article
            {...article}
            onReadMore={() => handleReadMore(article.uuid)}
          />
        </_Item>
      ))}
    </>
  );
}

export default observer(Content);
