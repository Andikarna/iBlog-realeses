"use client";

import Table from "@/components/User/tableComponents/Table"
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";

const Page = ({ params }) => {
  const [data, setData] = useState([])

  const { keyword } = params
  const key = decodeURI(keyword)

  const fetchData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_USER}?name_like=${key}`)
    const userSearch = await res.json();
    setData(userSearch)
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(data)

  return (
    <div className="flex w-full justify-center">
      <div className="w-5/6 lg:w-6/12 space-y-2 pb-10">
        <div className='flex w-fit items-center gap-2 underline py-3 text-md hover:text-lg transition-all' >
          <BiArrowBack />
          <Link
            href='/user'
          >
            Back
          </Link>
        </div>
        <h1 className="text-xl">Pencarian untuk {key} ...</h1>
        <Table api={data} />
      </div>
    </div>
  )
}

export default Page
