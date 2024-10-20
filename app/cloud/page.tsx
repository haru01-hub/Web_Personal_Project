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
            클라우드 프로젝트
            <span className="pl-10">2024.10.18(금)</span>
          </p>
        </div>
      </div>
    </div>
  )
}
