/* eslint-disable @next/next/no-async-client-component */
"use client";

import React,{ useEffect, useState } from "react";

import Table from "../../components/User/tableComponents/Table"
import HeaderTable from "../../components/User/tableComponents/HeaderTable";
import Pagination from "@/components/Pagination";

// icons
import { TbUsers } from 'react-icons/tb';

const Page = () => {
  const [data, setData] = useState([])

  const fetchData = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_USER}`)
    const user = await res.json();
    setData(user)
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className="flex w-full justify-center">
      <div className="w-5/6 lg:w-6/12 space-y-2">
        <h1 className="flex items-center gap-2 text-xl md:text-2xl font-medium py-5">
          <TbUsers />
          ALL USER</h1>
        <div className="line"></div>
        <HeaderTable />
        <Table api={data} />

      </div>
    </div>
  )
}

export default Page
