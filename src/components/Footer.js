import React from 'react';
import styled from "styled-components";

//하나의 컴포넌트를 생성 (재사용)

//js파일과 css파일의 관리가 편함
const FooterItemList=styled.div`
    border: 1px solid black;
    height:300px;
`;

const Footer = () => {
    return (
        <div>
            <FooterItemList>
                <ul>
                    <li>
                        오시는길 : 서울시 강남구 압구정동
                    </li>
                    <li>
                        전화번호 : 02-222-1111
                    </li>
                </ul>
            </FooterItemList>
            
        </div>
    );
};

export default Footer;