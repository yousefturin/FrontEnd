import React from 'react'
import "./Home.css"
import packageJson from '../../package.json';
import SvgComponent from '../utils/SvgComponent';

import { LeftMenuAction, WorkerInformation } from '../component/MainMenu/MainMenu';
import { btnActions } from '../constant/btnActions';
import Header from '../component/Header/header';
import {
    DashboardBtnActions,
    BookBtnActions,
    MemberBtnActions,
    AuthorBtnActions,
    PublisherBtnActions
} from '../constant/BtnStructure';
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
    const [dataActionsBtn, setDataActionsBtn] = React.useState(DashboardBtnActions);

    React.useEffect(() => {
        // Get the data for the selected button for the structure.
        var data
        switch (selectedBtn) {
            case "Dashboard":
                data = DashboardBtnActions;
                break;
            case "Books":
                data = BookBtnActions;
                break;
            case "Members":
                data = MemberBtnActions;
                break;
            case "Authors":
                data = AuthorBtnActions;
                break;
            case "Publishers":
                data = PublisherBtnActions;
                break;
            case "Switch":
                data = DashboardBtnActions;
                break;
            default:
                data = DashboardBtnActions;
        }
        setDataActionsBtn(data);
    }, [selectedBtn]);

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
                    mainBtnActions={dataActionsBtn}
                    selectedBtnMainActions={selectedBtnMainActions}
                    setSelectedBtnMainActions={setSelectedBtnMainActions} />
                {selectedBtn === "Dashboard" && (
                    <InformationInDashboard
                        informationAbout={informationAbout} />
                )}

                <GeneralTable data={borrowData} title={selectedTitle} selectedBtnMainActions={selectedBtnMainActions} />
            </div>
        </div>
    )
}


export default Home
