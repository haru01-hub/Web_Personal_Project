import React from 'react'
import Link from 'next/link'

export default function LinuxPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Linux Project</h1>
      <hr />
      <div className="border-2 p-4 mt-4 bg-gray-100 ">
        <h3 className="font-bold mb-1">PLAN</h3>
        <hr />
        <p className="mt-1">
          2학년 동안 리눅스, 서버 및 셸 스크립트 기초 공부를 끝내어, 3학년
          때부터는 자동화 시스템을 만드는 프로젝트를 진행할 예정입니다.
          프로젝트는 한국 인터넷 진흥원에 올라와 있는 취약점 상세 가이드를
          이용하여 취약점을 파악하고 그것을 막기 위하여, 보안 위험에 문제가 있는
          설정 파일 중 일부분을 셸 스크립트를 이용하여 자동으로 주석처리를
          하도록 하는 자동화 시스템을 만들어보는 프로젝트를 진행해볼 예정입니다.
        </p>
      </div>

      <h3 className="mt-10 text-xl font-bold text-gray-500 mb-3">2024년</h3>
      <div className="flex ">
        <Link
          href="/project1"
          className="pr-4 pl-4 bg-gray-500 text-white hover:text-cyan-300 "
        >
          Project_1
        </Link>
        <div className="flex justify-between">
          <p className="pr-4 pl-4 border-2 border-gray-300 w-100">
            FTP 취약점을 막을 수 있는 자동화 시스템
            <span className="pl-10">2024.10.18.Fri.</span>
          </p>
        </div>
      </div>

      <div className="flex mt-2 ">
        <Link
          href="/project1"
          className="pr-4 pl-4 bg-gray-500 text-white hover:text-cyan-300 "
        >
          Project_2
        </Link>
        <div className="flex justify-between ">
          <p className="pr-4 pl-4 border-2 border-gray-300 w-100">
            관리자 소유권한 취약점 진단 자동화 시스템
            <span className="pl-10">2024.10.18(금)</span>
          </p>
        </div>
      </div>
    </div>
  )
}
