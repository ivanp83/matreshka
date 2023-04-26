"use client";
import { Api } from "@/api";
import { OrderResponeType } from "@/types";
import { handleErrors } from "@/utils/helpers";

import React, { useEffect, useState } from "react";
type Params = {
  params: { id: number };
};
export default function Page({ params }: Params) {
  const [responseData, setResponseData] = useState<OrderResponeType | null>(
    null
  );
  useEffect(() => {
    (async () => {
      try {
        const data = await Api().order.find(params.id);

        setResponseData(data[0]);
      } catch (error) {
        console.log(error);
        handleErrors(error);
      }
    })();
  }, []);

  return (
    <section className="order container">
      <style jsx>{`
        .order {
          min-height: 95vh;
          grid-column: 1/4;
        }
        .wrap {
          text-align: center;
          grid-column: 2/3;
          display: grid;
          height: fit-content;
        }
      `}</style>
      <div className="wrap">
        {responseData && (
          <>
            <h1>Заказ № {responseData?.id}</h1>
            <span>
              Статус: &nbsp;
              {responseData?.order_status === "succeeded"
                ? "оплачен"
                : responseData?.order_status === "pending"
                ? "в обработке"
                : responseData?.order_status === "error"
                ? "в обработке"
                : "Произошла ошибка. Обратитесь в нашу поддержку."}
            </span>
          </>
        )}
      </div>
    </section>
  );
}
