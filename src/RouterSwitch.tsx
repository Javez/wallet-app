import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ROUTES } from "./routes/routes";
import TransactionList from "./pages/TransactionList/TransactionList";
import NotFound from "./pages/NotFound/NotFound";
const TransactionDetail = lazy(
  () => import("./pages/TransactionDetail/TransactionDetail")
);

export default function RouterSwitch() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") {
      navigate(-1);
    }
  }, []);

  /*useEffect(() => {
    if (location.pathname !== ROUTES.TRANSACTION_LIST) {
      navigate(ROUTES.TRANSACTION_LIST, { replace: true });
    }
  }, []);*/

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <Suspense fallback={null}>
          <Routes location={location} key={location.pathname}>
            <Route
              path={ROUTES.TRANSACTION_LIST}
              element={<TransactionList />}
            />
            <Route
              path={ROUTES.TRANSACTION_DETAIL}
              element={<TransactionDetail />}
            />
            <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
}
