import React from 'react'
//import { Link } from 'react-router-dom'
import Link from 'next/link'

export default function LinuxPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Python Project</h1>
      <hr />
      <div className="border-2 p-4 mt-4 bg-gray-100 ">
        <h3 className="font-bold mb-1">PLAN</h3>
        <hr />
        <p className="mt-1">
          파이썬 또한 시스템 보안이라는 분야에서 필요한 언어라고 하여, 계속해서
          공부해나갈 예정입니다. 대학교 1학년 2학기 파이썬이라는 과목에서
          진행했던 팀프로젝트는 파이썬의 기능인 파일 입출력이라는 것을 이용하여
          게시판을 만들었습니다. 디렉터리는 게시판 목록, 파일은 게시판의
          게시글로 하여 구조를 비슷하게 구현하였습니다. 그리고 현재 저는 시스템
          보안 분야이기에 파이썬을 이용하여 리눅스 시스템의 취약점을 찾아주는
          간단한 취약점 스캐너를 만드는 프로젝트를 진행하기 위해서 공부해나갈
          예정입니다.
        </p>
      </div>
      <h3 className="mt-10 text-xl font-bold text-gray-500">2024년</h3>
      <div className="flex">
        <Link
          href="/project1"
          className="pr-4 pl-4 bg-gray-500 text-white hover:text-cyan-300"
        >
          Project_1
        </Link>
        <div className="flex justify-between">
          <p className="pr-4 pl-4 border-2 border-gray-300 w-100">
            파일 입출력 기능을 이용한 게시판 만들기
            <span className="pl-10">~ 2023.12.07(목)</span>
          </p>
        </div>
      </div>
    </div>
  )
}