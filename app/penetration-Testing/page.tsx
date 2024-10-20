import React from 'react'
import Link from 'next/link'

export default function PenetrationTestingPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Penetration-Testing Project</h1>
      <hr />
      <div className="border-2 p-4 mt-4 bg-gray-100 ">
        <h3 className="font-bold mb-1">PLAN</h3>
        <hr />
        <p className="mt-1">
          모의해킹도 아직 해보지는 않았지만 자동화 시스템 등, 리눅스, 셸
          스크립트 등의 기초 공부를 마친 후에 진행할 예정입니다.
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
            리눅스 시스템 모의해킹_1
            <span className="pl-10">2024.10.18(금)</span>
          </p>
        </div>
      </div>
    </div>
  )
}
