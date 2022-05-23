/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useRouter } from "next/router";

import Report from "../styles/report.module.css";
import ReCAPTCHA from 'react-google-recaptcha';

import Link from "next/link";

const report = () => {
  const router = useRouter();
  const [value, setValue] = useState({ title: "", content: "", tag:"", ReCAPTCHA: "" })
  
  const onChange = (e: any) => {
    setValue({
      title: e.title ? e.title : value.title,
      content: e.content ? e.content : value.content,
      tag: e.tag ? e.tag : value.tag,
      ReCAPTCHA: e.ReCAPTCHA ? e.ReCAPTCHA : value.ReCAPTCHA
    })
  }
  
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch('/api/report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    }).then((res) => res.json())
  }

  return (
    <form className={Report.report_Form} onSubmit={onSubmit}>
      <div className="flex_w_100">
        <input type="text" maxLength={20} required style={{ width: "25%", minWidth: "250px" }} placeholder="제목 (최대 20자)" />
      </div>
      <textarea placeholder="타인을 향한 욕설 및 비방은 징계 대상입니다. (최대 3000자)"/>
      <div className={Report.captcha_content}>
        이 사이트는 reCAPTCHA에 의해 보호되며 Google
        <a href="https://policies.google.com/privacy">{" 개인정보처리방침"}</a>
        {" 및 "}
        <a href="https://policies.google.com/terms">서비스 약관</a>이
        적용됩니다.
      </div>
      <ReCAPTCHA
        sitekey="6LcovQ4gAAAAAJpezviqqKnqxzLBI3mTck7HB_Sm"
        onChange={(value: any) => onChange({ ReCAPTCHA: value })}
      />
      <button className="sumbit" type="submit" >제보하기</button>
      <select onChange={(e) => onChange({ tag: e.target.value })}>
        <option className="text_center" selected value="" disabled hidden>태그 선택</option>
        <option className="text_center" value="궁금증">궁금증</option>
        <option className="text_center" value="진로진학">진로진학</option>
        <option className="text_center" value="학교생활">학교생활</option>
        <option className="text_center" value="인간관계">인간관계</option>
        <option className="text_center" value="유머">유머</option>
        <option className="text_center" value="개인">개인</option>
        <option className="text_center" value="기타">기타</option>
      </select>
      <a style={{ marginLeft: '1rem' }} className="policy_Link"><Link href="/policy" passHref>게시 규정 &#62;</Link></a>
    </form>
  )
}

export default report;