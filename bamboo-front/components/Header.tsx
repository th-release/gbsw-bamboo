import { useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [report, setReport] = useState("");
  return (
    <div>
      <div className="header">
        <div className="title" onClick={() => router.push('/')}>
          <h1>
            경
            <span>소고</span>
            대
            <span>나무</span>
            숲
          </h1>
        </div>
        <div className="nav_items">
          {router.asPath === "/" ? 
            <a onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}>제보 관리</a>
            :
            <></>
          }
        </div>
      </div>
      <div className={"report_overlay " + (isOpen === true ? "overlay_open" : "overlay_close")}>
        <div className="overlay">
          <span className="close_icon" onClick={() => setIsOpen(false)}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"></path>
            </svg>
          </span>
          <form >
            <div style={{ marginBottom: '1rem' }}>
              제출한 제보의 상태 또는 반려 사유를 확인하거나 제보를 삭제할 수 있습니다.
            </div>
            <input type="text" placeholder="게시글의 해시 값" maxLength={128} className="report_input" onChange={(e) => setReport(e.target.value)} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Header;
