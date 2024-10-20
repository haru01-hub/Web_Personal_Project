import React from 'react'
import Link from 'next/link'

export default function LinuxPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Web Project</h1>
      <hr />
      <div className="border-2 p-4 mt-4 bg-gray-100 ">
        <h3 className="font-bold mb-1">PLAN</h3>
        <hr />
        <p className="mt-1">
          이번에 배울 DB, Next.js 기능을 이용하여 시스템 보안 분야와 관련있는
          클라우드 웹 페이지의 프론트엔드와 백엔드를 공부하고 구현해볼
          예정입니다. 또한 그 클라우드 웹 페이지의 취약점 등을 공부할
          예정입니다.
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
              프론트엔드 html css js를 이용한 웹페이지 만들기
              <span className="pl-10">2024.10.18.(금).</span>
            </p>
          </div>
        </Link>
        <hr />
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
