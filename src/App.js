// Practice React Hooks with different usecases
import React from "react";
import UseStateBasic from "./components/hooks/useState/UseStateBasic";
import UseStateArray from "./components/hooks/useState/UseStateArray";
import UseStateObject from "./components/hooks/useState/UseStateObj";
import UseStatePreviousVal from "./components/hooks/useState/UseStatePrev";
import UseEffectBasic from "./components/hooks/useEffect/UseEffectBasic";
import UseEffectConditional from "./components/hooks/useEffect/UseEffectConditional";
import UseEffectOnlyOnce from "./components/hooks/useEffect/UseEffectOnlyOnce";
import UseEffectCleanup from "./components/hooks/useEffect/UseEffectCleanup";
import IncorrectDependency from "./components/hooks/useEffect/IncorrectDependency";
import DataFetchingPart1 from "./components/hooks/useEffect/DataFetchingPart1";
import DataFetchingPart2 from "./components/hooks/useEffect/DataFetchingPart2";
import ComponentA from "./components/hooks/useContext/ComponentA";
import Basic from "./components/axios/BasicLoginAndGet";
import UseReducerBasic from "./components/hooks/useReducer/UseReducerBasic";
import UseReducerObject from "./components/hooks/useReducer/UseReducerObject";
import UseReducerMultiple from "./components/hooks/useReducer/UseReducerMultiple";
import ParentComponentURH from "./components/hooks/useReducer/withUseContext/ParentComponentURH";
import DataFetching from "./components/hooks/useReducer/DataFetching";
import UseCallbackBasic from "./components/hooks/useCallback/UseCallbackBasic";
import UseMemoBasic from "./components/hooks/useMemo/UseMemoBasic";
import UseRefPart1 from "./components/hooks/useRef/UseRefPart1";
import UseRefPart2 from "./components/hooks/useRef/UseRefPart2";
import Looping from "./components/basics/Looping";
import ProductTable from "./components/smallProjects/productTable/ProductTable";
import Board from "./components/smallProjects/tictactoe/Tictactoe";

export default function MyApp() {
  return (
    <>
    {/* ---------------------------------------------Sample projects-------------------------------------- */}
      {/* <ProductTable/> */}
      <Board/>

      {/* -----------------------------------------React UseState Hook---------------------------------------- */}
      {/* <UseStateBasic/> */}
      {/* <UseStatePreviousVal/> */}
      {/* <UseStateObject/> */}
      {/* <UseStateArray/> */}
      {/* -----------------------------------------React UseEffect Hook----------------------------------------- */}
      {/* <UseEffectBasic/> */}
      {/* <UseEffectConditional/> */}
      {/* <UseEffectOnlyOnce/> */}
      {/* <UseEffectCleanup/> */}
      {/* <IncorrectDependency/> */}
      {/* -----------------------------------------React UseEffect Hook + axios library------------------------------------- */}
      {/* <DataFetchingPart1/>   // One more way with loader commented within component*/}
      {/* <DataFetchingPart2/> */}
      {/* ------------------------------------------React UseContext Hook: React Context and useContext---------------------- */}
      {/* <ComponentA/> */}
      {/* -------------------------------------------------Axio basic practice for metiundo---------------------------------- */}
      {/* <Basic/> */}
      {/* -----------------------------------React UseReducer Hook with multiple scenarios commented inline------------------ */}
      {/* <UseReducerBasic/> */}
      {/* <UseReducerObject/> */}
      {/* <UseReducerMultiple/> */}
      {/* <ParentComponentURH /> */}
      {/* <DataFetching/> */}
      {/* -------------------------------------------------React UseCallback Hook + React.memo------------------------------- */}
      {/* <UseCallbackBasic/> */}
      {/* ------------------------------------------------React UseMemo Hook------------------------------------- */}
      {/* <UseMemoBasic/> */}
      {/* -------------------------------------------------React UseRef Hook------------------------------------- */}
      {/* <UseRefPart1/> */}
      {/* <UseRefPart2/> */}
      {/* -------------------------------------------------------Basics-------------------------------------------------------- */}
      {/* <Looping/> */}
      {/* <Basic/> */}
    </>
  );
}
