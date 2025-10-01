import { StaticInfo } from "./netperfromance";
import { useEffect, useState } from "react";
import { useStaticTextQuery } from "./services/api";

const ConstantData = () => {
  const { data, error, isLoading } = useStaticTextQuery();

  if (isLoading) return <div>LOading...</div>;

  if (error) return <div>failed</div>;

  return (
    <>
      {data?.map((i, index) => (
        <div key={index} className="border border-1 mt-4 ">
          <p className="  title p-2 ">{i.key}</p>
          <p className="p p-2 para">{i.text}</p>
        </div>
      ))}
    </>
  );
};

export default ConstantData;
