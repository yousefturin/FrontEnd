import React from 'react'
import "./Home.css"
import packageJson from '../../package.json';
import { LeftMenuAction, WorkerInformation } from '../component/MainMenu/MainMenu';
import { btnActions } from '../constant/btnActions';
import Header from '../component/Header/header';
import SvgComponent from '../utils/SvgComponent';
import { mainBtnActions } from '../constant/mainbtnActions';
import MainActionBtns from '../component/MainActionBtn/MainActionBtns';
import InformationInDashboard from '../component/InformationInDashboard/InformationInDashboard';
import { informationAbout } from '../constant/informationAbout';
import GeneralTable from '../component/GenerateTable/GenerateTable';
import { borrowData } from '../constant/borrowData';
import { GeneralTableHeaderTitle } from '../constant/GeneralTableHeader';

function Home() {
    const [selectedBtn, setSelectedBtn] = React.useState("Dashboard");
    const [currentTime, setCurrentTime] = React.useState(new Date());
    const [selectedBtnMainActions, setSelectedBtnMainActions] = React.useState("");
    const selectedTitle = GeneralTableHeaderTitle.find(header => header.keyId === selectedBtn)?.title || 'Record Table';
    const workerData = {
        name: "Yusef Turin",
        id: "W-001",
    }

    return (
        <div className="dashboard">
            <div className="left-menu">
                <div className="logo-wrapper">
                    <SvgComponent
                        svgKey={"libraryLogo"}
                        width={80}
                        height={80}
                        title='app logo icon'
                    />
                </div>
                <LeftMenuAction
                    btnActions={btnActions}
                    selectedBtn={selectedBtn}
                    setSelectedBtn={setSelectedBtn} />
                <WorkerInformation
                    workerData={workerData}
                    currentTime={currentTime}
                    setCurrentTime={setCurrentTime} />

                <p style={{ color: "#A0A0A0", fontSize: 12 }}>v{packageJson.version}</p>
            </div>

            <div className="right-screen">
                <Header title={selectedBtn} searchData={""} />
                <MainActionBtns
                workerData={workerData}
                    mainBtnActions={mainBtnActions}
                    selectedBtnMainActions={selectedBtnMainActions}
                    setSelectedBtnMainActions={setSelectedBtnMainActions} />
                <InformationInDashboard
                    informationAbout={informationAbout} />
                <GeneralTable data={borrowData} title={selectedTitle} />
            </div>
        </div>
    )
}



export default Home
