//Modules
import React from 'react';

//Helpers
const Constants = require('../../../helpers/constants');
import { Utilities } from '../../../helpers/utilities';

//Components
import AlertTextArea from '../AlertTextArea/AlertTextArea';

/**
 * @class ApplePhone
 * @author Mark Miscavage <markmiscavage@protonmail.com>
 * @description Apple Phone component
 * @public
 * @kind class
 */
class ApplePhone extends React.Component {
    /**
     * @constructor
     */
    constructor(props) {
        super(props);

        this.state = {
            isAppleSystem:false,
        };

        this.carrierTextbox = React.createRef();
        this.elapsedTimeTextbox = React.createRef();
        this.alertTextbox = React.createRef();
    };

    /**
     * @description Component did mount
     */
    componentDidMount() {
        this.setState({
            //Check if we're on an apple device
            isAppleSystem: (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)) || (!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) || (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream),
        });
    };

    /**
     * @description - Callback function for reseting the phone input fields
     * @function onReset
     */
    onReset = () => {
        this.elapsedTimeTextbox.current.value = Constants.DEFAULTS.ELAPSED_TIME;
        this.carrierTextbox.current.value = Constants.DEFAULTS.CARRIER;
        this.alertTextbox.current.onReset();
    };

    /**
     * @description - React render
     * @function render
     */
    render() {
        //Input defaults
        const inputDefaults = {
            spellCheck: 'false',
            autoComplete: 'off',
            autoCorrect: 'off',
            autoCapitalize: 'off',
            type: 'text',
        };

        return (
            <div className={`apple-phone rel rel--full no-select ${this.state.isAppleSystem ? 'apple-phone--system' : ''}`}>
                
                <div className='apple-phone__background image image--cover abs' style={{backgroundImage:`url(${this.props.backgroundImage})`}}></div>
                
                <div className='apple-phone__border image image--contain abs abs--full'></div>
                
                <div className='apple-phone__content abs'>
                    <div className='apple-phone-content rel rel--full'>

                        <div className='apple-phone-content__upper abs'>
                            <div className='apple-phone-content-upper rel rel--full'>
                                <label className='visuallyhidden' htmlFor='carrier-textbox'>Carrier Textbox</label>
                                <input ref={this.carrierTextbox} id='carrier-textbox' className={`apple-phone-content-upper__carrier apple-phone__text abs ${this.props.inverted ? 'apple-phone__text--inverted' : ''}`} {...inputDefaults} placeholder='Carrier' defaultValue={Constants.DEFAULTS.CARRIER} maxLength='10' />
                        
                                <div className={`apple-phone-content-upper__connectivity abs ${this.props.inverted ? 'apple-phone-content-upper__connectivity--inverted' : ''}`}>
                                    <i className='apple-phone-content-upper__connectivity-icon icon icon__connectivity'></i>
                                </div>
                            </div>
                        </div>
                
                        <div className='apple-phone-content__header abs'>
                            <div className='apple-phone-content-header'>
                                <span className={`apple-phone-content-header__time apple-phone__text no-select ${this.props.inverted ? ' apple-phone__text--inverted' : ''}`}>{ Utilities.getTime() }</span>
                                <span className={`apple-phone-content-header__date apple-phone__text no-select ${this.props.inverted ? ' apple-phone__text--inverted' : ''}`}>{ Utilities.getDate() }</span>
                            </div>
                        </div>

                        <div className='apple-phone-content__alert-block abs'>
                            
                            <div className='apple-alert-block rel'>

                                <div className='apple-alert-block__blur abs'></div>

                                <div className='apple-alert-block__container rel'>

                                    <div className='apple-alert-block__upper rel'>
                                        <div className='apple-alert-upper rel'>
                                            <div className='apple-alert-upper__icon-block abs'>
                                                <i className='apple-alert-upper__icon icon icon__alert'></i>
                                            </div>
                                            <span className='apple-alert-upper__title abs'>EMERGENCY ALERT</span>
                                            <label className='visuallyhidden' htmlFor='elapsed-time-textbox'>Elapsed Time Textbox</label>
                                            <input ref={this.elapsedTimeTextbox} id='elapsed-time-textbox' className='apple-alert-upper__elapsed-time abs' {...inputDefaults} defaultValue={Constants.DEFAULTS.ELAPSED_TIME} />
                                        </div>
                                    </div>

                                    <div className='apple-alert-block__content rel'>
                                        <div className='apple-alert-content'>
                                            <span className='apple-alert-content__title'>Presidential Alert</span>
                                            <label className='visuallyhidden' htmlFor='alert-text-area'>Presidential Alert Textbox</label>
                                            <AlertTextArea ref={this.alertTextbox} classes='apple-alert-content__textbox'/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>

            </div>
        )
    };
};

export default ApplePhone;