//Modules
import React from 'react';

//Helpers
const Constants = require('../helpers/constants');

//Components
import Header from '../components/partials/Header/Header';
import Footer from '../components/partials/Footer/Footer';
import ApplePhone from '../components/partials/ApplePhone/ApplePhone';

/**
 * @class Index
 * @author Mark Miscavage <markmiscavage@protonmail.com>
 * @description Main index page for the app
 * @public
 * @version 1.0.0
 * @license MIT
 * @kind class
 */
class Index extends React.Component {
    /**
     * @constructor
     */
    constructor(props) {
        super(props);

        this.state = this.initialState;

        this.phone = React.createRef();
    };

    /**
     * @description Component did mount
     */
    componentDidMount() {
        //Check for sevice worker
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("service_worker.js").catch(err => console.error("Service worker registration failed", err));
        }
        else {
            console.log("Service worker not supported");
        }
    };

    /**
     * @description Get the initial state
     */
    get initialState() {
        return {
            inverted: false,
            isSaving: false,
            backgroundImage: Constants.DEFAULTS.BACKGROUND_IMAGE,
        };
    };

    /**
     * @description - Callback function for inverting phone text
     * @function onInvert
     */
    onInvert = () => {
        this.setState({ inverted: !this.state.inverted });
    };

    /**
     * @description - Callback function for changing the phone background on input change
     * @function onBackgroundFileChange
     * @param {Object} event
     */
    onBackgroundFileChange = (event) => {
        //If no event, don't continue
        if (!event) return false;
        
        //Get file, check for max file size
        let file = event.target.files[0];
        let filesize = ((file.size / 1024) / 1024).toFixed(4);
        if (filesize > Constants.MAX_FILE_SIZE_MB) {
            alert(`Error: File size too large. Please upload an image under ${MAX_FILE_SIZE_MB}MB`);
            return false;
        }

        //Get file, use FileReader to get image
        if (FileReader && event.target.files) {
            let fr = new FileReader();
            fr.onload = function (e) {
                //Get result
                const backgroundImage = e.target.result;
                //Set background image
                this.setState({ backgroundImage });
            }.bind(this);
            fr.readAsDataURL(file);
        }
    };

    /**
     * @description - Callback function for canceling the "Save" functionality
     * @function onCancel
     */
    onCancel = () => {
        this.setState({ isSaving: false });
    };

    /**
     * @description - Callback function for displaying the "Save" screen
     * @function onSave
     */
    onSave = () => {
        this.setState({ isSaving: true });
    };

    /**
     * @description - Callback function for reseting the phone
     * @function onReset
     */
    onReset = () => {
        //Reset the phone
        this.phone.current.onReset();

        //Reset the current state
        this.setState(this.initialState);
    };

    /**
     * @description - React render
     * @function render
     */
    render() {
        return (
            <div className='layout rel rel--viewport'>

                <div className={`background-image image image--cover fixed ${this.state.isSaving ? 'hidden' : ''}`}></div>

                <div className='main fixed fixed--full gradient--white'>

                    <Header isSaving={this.state.isSaving} />

                    <div className='page'>
                        <div className='page__phone abs'>
                            <ApplePhone ref={this.phone} {...this.state} />
                        </div>
                    </div>

                    <Footer onInvert={this.onInvert}
                            onBackgroundFileChange={this.onBackgroundFileChange}
                            onCancel={this.onCancel}
                            onSave={this.onSave}
                            onReset={this.onReset}
                            isSaving={this.state.isSaving}
                    />
                
                </div>
            </div>
        )
    };
};

export default Index;
