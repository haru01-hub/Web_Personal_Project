import React from 'react'
import Link from 'next/link'

export default function CloudPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Cloud Project</h1>
      <hr />
      <div className="border-2 p-4 mt-4 bg-gray-100 ">
        <h3 className="font-bold mb-1">PLAN</h3>
        <hr />
        <p className="mt-1">
          클라우드는 아직 배우지는 않았지만 시스템 보안 분야 쪽을 공부하기
          위해서는 반드시 알아야 하는 요소라고 하여 클라우드 분야를 공부해볼
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
              클라우드 프로젝트
              <span className="pl-10">2024.10.18.(금).</span>
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
