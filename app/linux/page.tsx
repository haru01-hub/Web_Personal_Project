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
      <div className="flex border-b-2 border-slate-400">
        <h3 className="mt-10 text-xl font-bold text-gray-500 md:pr-5 md:pl-5 md:pt-2 md:pb-2 bg-slate-300 border-t-2 border-l-2 border-slate-400">
          2024년
        </h3>
        <h3 className="mt-10 text-xl font-bold text-gray-500 md:pr-7 md:pl-7 md:pt-2 md:pb-2 border-t-2 border-l-2 border-slate-400">
          2025년
        </h3>
        <h3 className="mt-10 text-xl font-bold text-gray-500 md:pr-7 md:pl-7 md:pt-2 md:pb-2 border-t-2 border-l-2 border-slate-400">
          2026년
        </h3>
        <h3 className="mt-10 text-xl font-bold text-gray-500 md:pr-7 md:pl-7 md:pt-2 md:pb-2 border-t-2 border-l-2 border-slate-400">
          2027년
        </h3>
        <h3 className="mt-10 text-xl font-bold text-gray-500 md:pr-7 md:pl-7 md:pt-2 md:pb-2 border-t-2 border-l-2 border-slate-400">
          2028년
        </h3>
        <h3 className="mt-10 text-xl font-bold text-gray-500 md:pr-7 md:pl-7 md:pt-2 md:pb-2 border-t-2 border-l-2 border-r-2 border-slate-400">
          2029년
        </h3>
      </div>
      <div className="bg-slate-100">
        <Link href="/linux_project" className="flex md:pt-2">
          <p className="pr-4 pl-4">Project_1</p>
          <div className="flex justify-between">
            <p className="pr-4 pl-4 w-100">
              FTP 취약점을 막을 수 있는 자동화 시스템
              <span className="pl-10">2024.10.18.(금)</span>
            </p>
          </div>
        </Link>
        <hr />
        <Link href="/project2" className="flex md:mt-2 ">
          <p className="pr-4 pl-4">Project_2</p>
          <div className="flex justify-between ">
            <p className="pr-4 pl-4 w-100">
              관리자 소유권한 취약점 진단 자동화 시스템
              <span className="pl-10">2024.10.18(금)</span>
            </p>
          </div>
        </Link>
      </div>
      <div className="flex justify-end mt-5">
        <Link
          href="write"
          className="bg-slate-300 md:pr-7 md:pl-7 md:pt-2 md:pb-2 rounded-3xl
        "
        >
          글쓰기
        </Link>
      </div>
    </div>
  )
}
