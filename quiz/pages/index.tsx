import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


const Dashboard: NextPage = () => {
  return (
    <div className="p-[38px]">
      <header className="flex justify-between">
        <h1>Quiz Time</h1>
        <div className="pl-[115[px] p-[18px]">
          <Image src="search.svg" width={30} height={30} unoptimized />
          <input type="text" defaultValue="Search" />
        </div>
        <div className="pl-[180px]">
          <button>Start Quiz</button>
          <div className="pl-[134px] truncate">Lorem, ipsum</div>
        </div>
      </header>
    </div>
  )
}

export default Dashboard
