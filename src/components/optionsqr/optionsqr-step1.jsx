import React, { useState } from "react";
import QrScanner from "qr-scanner";
import Scanner from "./scanner";
import qrscreen from "../../assets/qrscreen.svg";

const OptionsQrStep1 = ({ onNext, setScannedData }) => {
  const [camera, setCamera] = useState(false);

  const readCode = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    QrScanner.scanImage(file, { returnDetailedScanResult: true })
      .then((result) => {
        const dataParsed = JSON.parse(result.data);
        setScannedData(dataParsed);
        onNext();
      })
      .catch((err) => console.log(err));
  };
  const handleCam = () => {
    setCamera(!camera);
  };

  return (
    <div className="flex flex-col h-screen items-center bg-[#10224D]">
      <p className="font-bold text-[28px] leading-[34px] my-5 text-white">
        Escanear código QR
      </p>
      {camera ? (
        <div className="w-[328px] h-auto p-4 rounded-[10px] shadow-cardShadow bg-white/40 flex justify-center items-center">
          <Scanner setScannedData={setScannedData} onNext={onNext} />
        </div>
      ) : (
        <img src={qrscreen} alt="" />
      )}

      <p className="font-semibold text-sm leading-[17px] mt-4 w-[328px] text-center text-white">
        Colocá un código QR dentro del rectángulo del visor para escanearlo.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 my-3">
        <div
          onClick={handleCam}
          className="bg-[#ffffff] rounded-[10px] h-[48px] w-[328px] font-semibold text-base leading-5 flex justify-center items-center cursor-pointer"
        >
          Scanner
        </div>
        <div className="relative bg-[#ffffff] rounded-[10px] h-[48px] w-[328px] font-semibold text-base leading-5 flex justify-center items-center ">
          <input
            className="file:h-[48px] file:w-[90px] file:rounded-[10px] file:border-2 file:bg-[#AACCFF] file:border-[#AACCFF] file:text-[#10224D] absolute top-0 left-0 file:cursor-pointer"
            type="file"
            onChange={(e) => readCode(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default OptionsQrStep1;
