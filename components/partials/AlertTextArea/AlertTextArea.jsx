//Modules
import React from 'react';

//Helpers
const Constants = require('../../../helpers/constants');

/**
 * @class AlertTextArea
 * @author Mark Miscavage <markmiscavage@protonmail.com>
 * @description Alert text area for phone component
 * @public
 * @kind class
 */
class AlertTextArea extends React.Component {
    /**
     * @constructor
     */
    constructor(props) {
        super(props);

        this.textbox = React.createRef();
    };

    /**
     * @description - Private function for adjusting the textbox height according to text content
     * @function _autoExpand
     * @private
     */
    _autoExpand = () => {
        this.textbox.current.style.height = 'inherit';

        //Get the computed styles for the element
        var computed = window.getComputedStyle(this.textbox.current);

        //Calculate the height
        var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
            + parseInt(computed.getPropertyValue('padding-top'), 10)
            + this.textbox.current.scrollHeight
            + parseInt(computed.getPropertyValue('padding-bottom'), 10)
            + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

        //Set height
        this.textbox.current.style.height = height + 'px';
    };

    /**
     * @description - Helper function for reseting the textbox
     * @function onReset
     */
    onReset = () => {
        this.textbox.current.value = Constants.DEFAULTS.ALERT;
        this._autoExpand();
    }; 

    /**
     * @description - React render
     * @function render
     */
    render() {
        return (
            <textarea ref={this.textbox}
                id='alert-text-area'
                autoFocus={true}
                className={`alert-text-area textbox input-placeholder--white rel ${this.props.classes}`}
                spellCheck='false'
                autoComplete='off' autoCorrect='off'
                autoCapitalize='off'
                type='text'
                defaultValue={Constants.DEFAULTS.ALERT}
                onInput={this._autoExpand}>
            </textarea>
        )
    }
};

export default AlertTextArea;
