import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)}; /* Updated to control opacity */
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-105px)')}; /* Updated to control transform */
  position: fixed;
  top: 62px;
  left: 0;
  height: 100%;
  border-radius: 100px;
  background: #9F9DF8;
  width: 280px;
  height: 676px;
  flex-shrink: 0;
  transition: opacity 0.3s ease, transform 0.3s ease; /* Add transitions for smooth appearance */
`;

const SidebarContent = styled.div`
  padding: 20px;
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen); 
  };
  const MenuItem = styled.div`
  padding: 12px;
  border-radius: 50px;
  background-color: white;
  margin-bottom: 29px;
`;
  return (
    <>
      <div style={{ position: 'fixed', top: '20px', left: '20px', cursor: 'pointer' }} onClick={handleSidebarToggle}>
        <div style={{ width: '30px', height: '4px', background: 'black', marginBottom: '6px' }}></div>
        <div style={{ width: '30px', height: '4px', background: 'black', marginBottom: '6px' }}></div>
        <div style={{ width: '30px', height: '4px', background: 'black' }}></div>
      </div>

      <SidebarWrapper isOpen={isOpen}>
        <SidebarContent>
          <ul>
            <MenuItem>
              <Link href="/calculator">
                <div>Главная</div>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/specialties">
                <div>Калькулятор ЕГЭ</div>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/app">
                <div>Моя траектория</div>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/uni">
                <div>Университеты</div>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/spesh">
                <div>Специальности</div>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/oplata">
                <div>Оплата обучения</div>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/news">
                <div>Новости и календарь</div>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/">
                <div>Выйти</div>
              </Link>
            </MenuItem>
          </ul>
        </SidebarContent>
      </SidebarWrapper>
    </>  );
};

export default Sidebar;




