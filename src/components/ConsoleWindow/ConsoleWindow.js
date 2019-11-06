import React from 'react';
import Draggable from 'react-draggable';
import ReactHighcharts from 'react-highcharts';
import css from './ConsoleWindow.module.css';

const ConsoleWindow = props => {
    const HighChartsConfig = {
        title: {
            text: 'MoData Progress'
        },
        subtitle: {
            text: 'Possible ways'
        },
        xAxis: {
            title: {
                text: 'MoData years'
            },
            categories: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025']
        },
        yAxis: {
            title: {
                text: 'MoData capitalization, billions $'
            }
        },
        series: [{
            name: 'MoData with existing team',
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 148.5, 216.4, 245.6, 294.4, 320.2]
        }, {
            name: 'MoData with Andriy',
            data: [29.9, 71.5, 106.4, 129.2,  { y: 144, color: '#BF0B23', marker: { fillColor: '#BF0B23', radius: 20 }}, 312, 444.0, 556.0, 635.6, 608.5, 1216.4]
        }]
    };

    let handleClose = (event) => {
        alert('The window has to be closed ... but to avoid you from loosing it only Close-button is hiding. So, you still have the possibility to drag the window');
        event.currentTarget.style='display: none';
    };

    return (
        <Draggable bounds={{top: -100}}>
            <div className={css.container}>
                <div className={css.header} title={'This element is draggable'}>
                    <button
                        className={css.red}
                        onClick={handleClose}> </button>
                    <button className={css.yellow} title={'Non-clickable'}> </button>
                    <button className={css.green} title={'Non-clickable'}> </button>
                </div>
                <div className={css.body}>
                    <ReactHighcharts config={HighChartsConfig}> </ReactHighcharts>
                </div>
            </div>
        </Draggable>
    );
};

export default ConsoleWindow;