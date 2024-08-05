import React from 'react';
import styled from "styled-components";

//하나의 컴포넌트를 생성 (재사용)

//js파일과 css파일의 관리가 편함
const HeaderItemList=styled.div`
    border: 1px solid black;
    height:300px;
`;

const Header = () => {
    return (
        <div>
            <HeaderItemList>
                <ul>
                    <li>
                        메뉴1
                    </li>
                    <li>
                        메뉴2
                    </li>
                </ul>
            </HeaderItemList>
            
        </div>
    );
};

export default Header;