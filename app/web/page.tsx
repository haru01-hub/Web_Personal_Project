import React from 'react'

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
      <h3 className="mt-10 text-xl font-bold text-gray-500">2024년</h3>
      <div className="flex">
        <a
          href="https://hcjdemo-2024-ten.vercel.app"
          className="pr-4 pl-4 bg-gray-500 text-white hover:text-cyan-300"
        >
          Project_1
        </a>
        <div className="flex justify-between">
          <p className="pr-4 pl-4 border-2 border-gray-300 w-100">
            프론트엔드 html css js를 이용한 웹페이지 만들기
            <span className="pl-10">2024.10.18(금)</span>
          </p>
        </div>
      </div>
    </div>
  )
}
