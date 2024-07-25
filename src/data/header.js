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


export const HeaderMenu =[
  {
    title:"My youtube",
    icon:<MdOutlineOndemandVideo />,
    src:"/"

  },
  {
    title:"추천 영상",
    icon:<MdOutlineVideoSettings />,
    src:"/today"

  },
  {
    title:"추천 개발자",
    icon:<MdDeveloperMode />,
    src:"/developer"

  },
  {
    title:"웹 디자인",
    icon:<SiAffinitydesigner />,
    src:"/webd"

  },
  {
    title:"GSAP",
    icon:<MdOutlineAnimation />,
    src:"/gsap"

  },
  {
    title:"포트폴리오 사이트",
    icon:<BsPersonWorkspace />,
    src:"/port"

  },
  {
    title:"유튜브 사이트",
    icon:<LiaYoutubeSquare />,
    src:"/youtube"

  }




];

export const searchKeyword=[
  {
    title:"My youtube",
    src:"/search/myyoutube"
  },
  {
    title:"HTML",
    src:"/search/html"
  },
  {
    title:"CSS",
    src:"/search/css"
  },
  {
    title:"JavaScript",
    src:"/search/javascript"
  },
  {
    title:"React.js",
    src:"/search/react.js"
  },
  {
    title:"JAVA",
    src:"/search/java"
  },
  {
    title:"ORACLE",
    src:"/search/oracle"
  },
  {
    title:"SPRING",
    src:"/search/spring"
  },
  {
    title:"MUSIC",
    src:"/search/music"
  },
  {
    title:"Vue.js",
    src:"/search/vue.js"
  }

];

export const snsLink =[
  {
    title:"github",
    url:"https://github.com/jswooop/web-youtube",
    icon:<AiFillGithub />
  },
  {
    title:"youtube",
    url:"https://www.youtube.com/",
    icon:<AiFillYoutube />
  },
  {
    title:"google",
    url:"https://www.google.co.kr/",
    icon:<AiFillGoogleCircle />
  },
  {
    title:"instagram",
    url:"https://www.instagram.com/",
    icon:<AiFillInstagram />
  }
]