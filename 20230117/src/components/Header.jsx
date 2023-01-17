import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Myli = styled.li`
  list-style: none;
`;

const Header = () => {
  return (
    <>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Myli>
            <Link href="/">go home</Link>
          </Myli>
          <Myli>
            <Link to="/router1">go to router1</Link>
          </Myli>
          <Myli>
            <Link to="/router2">go to router2</Link>
          </Myli>
        </ul>
      </nav>
    </>
  );
};

export default Header;

//Link 태그는 깜박임 없이 새 컴포넌트를 렌더해준다. a태그는 브라우저에서 자동으로 깜박이게 되어있음.
