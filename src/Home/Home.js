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
import GeneralTable from '../component/GenerateTable/GenerateTable';
import { GeneralTableHeaderTitle } from '../constant/GeneralTableHeader';
import { useDynamicDataForTable, useBookData } from '../component/UseAction/useDataForTable';

function Home() {
    const [selectedBtn, setSelectedBtn] = React.useState("Dashboard");
    const [currentTime, setCurrentTime] = React.useState(new Date());
    const [selectedBtnMainActions, setSelectedBtnMainActions] = React.useState("");
    const selectedTitle = GeneralTableHeaderTitle.find(header => header.keyId === selectedBtn)?.title || 'Record Table';
    const [dataActionsBtn, setDataActionsBtn] = React.useState(DashboardBtnActions);
    const [fetchedDataForTable, setFetchedDataForTable] = React.useState(null);
    const [countStock, setCountStock] = React.useState(0);
    const [countBorrow, setCountBorrow] = React.useState(0);

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
                break;
        }
        setDataActionsBtn(data);
    }, [selectedBtn]);

    const workerData = {
        name: "Yusef Turin",
        id: "998824",
    }
    const informationAbout = [
        {
            title: "Available Books",
            num: countStock
        },
        {
            title: "Borrowed Books",
            num: countBorrow
        },
        {
            title: "New Members",
            num: "50"
        }
    ];

    // (TODO)-> Make the URL dynamic
    const fetchData = useDynamicDataForTable();
    const fetchBookData = useBookData();

    React.useEffect(() => {
        fetchData().then(data => {
            setFetchedDataForTable(data);
                //  count the borrowed books 
            const countB = data?.filter(item => item.status === 'B').length;
            setCountBorrow(countB);
        });
    }, [fetchData]);

    React.useEffect(() => {
        fetchBookData().then(data => {
            // count the total stock of available books
            const totalStock = data?.reduce((sum, item) => sum + (item.stockNumber || 0), 0);
            setCountStock(totalStock);
        });
    }, [fetchBookData]);
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

                <GeneralTable data={fetchedDataForTable} title={selectedTitle} selectedBtnMainActions={selectedBtnMainActions} />
            </div>
        </div>
    )
}


export default Home
