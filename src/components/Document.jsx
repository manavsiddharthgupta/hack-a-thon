import CoverComponent from "./CoverComponent";
import PublicComponents from "./PublicComponents";
import React, { useState } from "react";
import Modal from "../ui/Modals/Modal";
import ExcelToJsonConverter from "./ExcelToJsonConverter";

const Document = () => {
  const [allExcelData, setExcelData] = useState({});
  const [data, setData] = useState([
    {
      title: "",
      desc: "",
      id: "1",
    },
  ]);
  const [creditLineMode, setCreditMode] = useState({
    mode: "increase",
    version: 1,
  });
  const [selected, setSelected] = useState("yes");
  const [modelGroup, setModalGroup] = useState("");
  const [developerName, setDeveloperName] = useState("");
  const [reviewData, setReviewData] = useState({
    date: "",
    name: "",
  });
  const [createdDate, setCreatedDate] = useState("");
  const [modalView, setModalView] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setModalView((val) => !val);
  };

  const mainData = {
    modelSpecificData: data,
    creditLineData: creditLineMode,
    selected: selected,
    developerName: developerName,
    reviewStatus: reviewData,
    createDate: createdDate,
    modalgroupData: modelGroup,
  };
  console.log(allExcelData);
  return (
    <form onSubmit={onSubmitHandler}>
      <CoverComponent
        creditLineMode={creditLineMode}
        setCreditMode={setCreditMode}
        selected={selected}
        setSelected={setSelected}
        modelGroup={modelGroup}
        setModalGroup={setModalGroup}
        developerName={developerName}
        setDeveloperName={setDeveloperName}
        reviewData={reviewData}
        setReviewData={setReviewData}
        createdDate={createdDate}
        setCreatedDate={setCreatedDate}
      />
      <PublicComponents data={data} onsetData={setData} />
      <ExcelToJsonConverter onSetExcelData={setExcelData} />
      {modalView && (
        <Modal
          exceldata={allExcelData}
          mainData={mainData}
          onSubmit={onSubmitHandler}
        />
      )}
      <button type="submit">Review</button>
    </form>
  );
};
export default Document;
