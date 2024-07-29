import React from 'react'
import SvgComponent from '../../utils/SvgComponent';

const LeftMenuAction = ({ btnActions, selectedBtn, setSelectedBtn }) => {

    const handleClick = (btnTitle) => {
        setSelectedBtn(btnTitle);
    };

    return (
        <div className="content-actions">
            <div className="content-action-top">
                {btnActions.slice(0, 3).map((btn, index) => (
                    <div
                        className={`btn-action ${selectedBtn === btn.title ? 'selected-btn' : ''}`}
                        key={index}
                        onClick={() => handleClick(btn.title)}
                    >
                        <div className="btn-action-icon">
                            <SvgComponent
                                svgKey={btn.logoId}
                                width={28}
                                height={28}
                                title='app logo icon'
                            />
                        </div>
                        <p>{btn.title}</p>
                    </div>
                ))}
            </div>

            <div className="content-action-middle">
                {btnActions.slice(3, 5).map((btn, index) => (
                    <div
                        className={`btn-action ${selectedBtn === btn.title ? 'selected-btn' : ''}`}
                        key={index}
                        onClick={() => handleClick(btn.title)}
                    >
                        <div className="btn-action-icon">
                            <SvgComponent
                                svgKey={btn.logoId}
                                width={28}
                                height={28}
                                title='app logo icon'
                            />
                        </div>
                        <p>{btn.title}</p>
                    </div>
                ))}
            </div>
            <div className="content-action-bottom" >
                {btnActions.slice(5, 6).map((btn, index) => (
                    <div
                        className={`btn-action ${selectedBtn === btn.title ? 'selected-btn' : ''}`}
                        key={index}
                        onClick={() => handleClick(btn.title)}
                    >
                        <div className="btn-action-icon">
                            <SvgComponent
                                svgKey={btn.logoId}
                                width={28}
                                height={28}
                                title='app logo icon'
                            />
                        </div>
                        <p>{btn.title}</p>
                    </div>
                ))}
            </div>

            <div className="content-help-action">
                <p>Content</p>
                <p>Help center</p>
            </div>
        </div>
    )

}

const WorkerInformation = ({ workerData, currentTime, setCurrentTime }) => {


    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [setCurrentTime]);

    return (
        <div className="worker-section-information">
            <div className="worker-info">
                <SvgComponent
                    svgKey={"workerSvg"}
                    width={36}
                    height={36}
                    title='worker logo icon'
                />
                <p>{workerData.name}</p>
            </div>
            <div className="date-time-information">
                <p>{currentTime.toLocaleString()}</p>
            </div>
        </div>
    );

}

export { LeftMenuAction, WorkerInformation };