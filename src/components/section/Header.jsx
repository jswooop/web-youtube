import React from 'react'

//메뉴 아이콘
import { MdOutlineOndemandVideo } from "react-icons/md";
import { MdOutlineVideoSettings } from "react-icons/md";
import { MdDeveloperMode } from "react-icons/md";
import { SiAffinitydesigner } from "react-icons/si";
import { MdOutlineAnimation } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { LiaYoutubeSquare } from "react-icons/lia";


//sns
import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";



const Header = () => {
  return (
    <header id='header' role='banner'>
      <h1 className='header__logo'>
        <a href="/">
        <em aria-hidden='true'></em>
        <span>My<br/>youtube<br/></span>
        </a>
      </h1>
      <nav className='header__menu'>
        <ul className='menu'>
          <li className='active'>
            <a href='/' ><MdOutlineOndemandVideo />My youtube</a>
          </li>
          <li>
            <a href='/today'><MdOutlineVideoSettings />추천 영상</a>
          </li>
          <li>
            <a href='/developer'><MdDeveloperMode />추천 개발자</a>
          </li>
          <li>
            <a href='/webd'><SiAffinitydesigner />웹 디자인</a>
          </li>
          <li>
            <a href='/gsap'><MdOutlineAnimation />GSAP</a>
          </li>
          <li>
            <a href='/port'><BsPersonWorkspace />포트폴리오 사이트</a>
          </li>
          <li>
            <a href='/youtube'><LiaYoutubeSquare />유튜브 사이트</a>
          </li>
        </ul>
        <ul className='keyword'>
          <li>
            <a href='/search/myyoutube'>My youtube</a>
          </li>
          <li>
            <a href='/search/html'>HTML</a>
          </li>
          <li>
            <a href='/search/html'>CSS</a>
          </li>
          <li>
            <a href='/search/html'>JavaScript</a>
          </li>
          <li>
            <a href='/search/react.js'>React.js</a>
          </li>
          <li>
            <a href='/search/java'>JAVA</a>
          </li>
          <li>
            <a href='/search/oracle'>ORACLE</a>
          </li>
          <li>
            <a href='/search/spring'>SPRING</a>
          </li>
          <li>
            <a href='music'>MUSIC</a>
          </li>
          <li>
            <a href='vue.js'>Vue.js</a>
          </li>
        </ul>
      </nav>
      <div className='header__sns'>
      <ul>
          <li>
            <a href='https://github.com/jswooop/web-youtube' rel='noopener noreferrer'><AiFillGithub /></a>
          </li>
          <li>
            <a href='https://www.youtube.com/' rel='noopener noreferrer'><AiFillYoutube /></a>
          </li>
          <li>
            <a href='https://www.google.co.kr/' rel='noopener noreferrer'><AiFillGoogleCircle /></a>
          </li>
          <li>
            <a href='https://www.instagram.com/' rel='noopener noreferrer'><AiFillInstagram /></a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header