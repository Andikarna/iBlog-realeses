/* eslint-disable jsx-a11y/alt-text */
// nextui
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Select, SelectItem, Tooltip } from "@nextui-org/react";

import DeleteData from "@/components/User/DeleteData";
import UpdateUser from "@/components/User/UpdateUser";
import ViewUser from "@/components/User/ViewUser";
import Image from "next/image";


const Tables = ({ api }) => {
  return (
    <div>
      <Table aria-label="Example static collection table" className="text-start">
        <TableHeader>
          <TableColumn >Picture</TableColumn>
          <TableColumn >Name</TableColumn>
          <TableColumn >Email</TableColumn>
          <TableColumn >Gender</TableColumn>
          <TableColumn className="text-center">Action</TableColumn>
        </TableHeader>
        <TableBody>
          {api.map((value, index) => (
            <TableRow key={value.id} className="text-sm">
              <TableCell className=" text-xs">
                <Image
                  src={`https://i.pravatar.cc/150?img=${value.id}}`}
                  width={30}
                  height={30}
                  alt={value.name}
                  className="h-auto w-auto rounded-full"
                />
              </TableCell>
              <TableCell className=" text-xs">{value.name}</TableCell>
              <TableCell className=" text-xs">{value.email}</TableCell>
              <TableCell className=" text-xs">{value.gender}</TableCell>
              <TableCell className=" h-full">
                <div className="relative flex items-center justify-center gap-2">
                  <Tooltip content="Details User">
                    <span className="text-default-400 cursor-pointer active:opacity-50">
                      <ViewUser id={value.id} name={value.name} gender={value.gender} email={value.email} />
                    </span>
                  </Tooltip>
                  <Tooltip content="Edit User">
                    <span className=" text-default-400 cursor-pointer active:opacity-50">
                      <UpdateUser data={value} />
                    </span>
                  </Tooltip>
                  <Tooltip content="Delete User">
                    <span className=" text-danger cursor-pointer active:opacity-50">
                      <DeleteData id={value.id} />
                    </span>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div >
  )
}

export default Tables
