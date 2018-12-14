/**
 * @author Mark Miscavage <markmiscavage@protonmail.com>
 * @description Footer component
 * @public
 */
const Footer = (props={}) => (
    <div className='footer no-select fixed'>
        <div className='footer__buttons-block abs'>
            <div className={`footer__buttons-block-item ${props.isSaving ? 'hidden' : ''}`} id='footer__buttons-block-item--design'>
                <span className='footer__btn-divider'>Design</span>
                
                <label className='footer__btn footer__btn--w-icon no-select gradient--red ease rel' htmlFor='footer__btn-file-input' title='Upload phone background image'>
                    <i className='footer__btn-icon icon icon__upload'></i>
                    <input className='footer__btn-file-input abs abs--full' id='footer__btn-file-input' type='file' name='phonebg' accept='image/png,image/jpeg' onChange={props.onBackgroundFileChange} />
                </label>
                <a className='footer__btn footer__btn--w-icon no-select gradient--red ease' title='Invert colors' onClick={props.onInvert}>
                    <i className='footer__btn-icon icon icon__invert'></i>
                </a>
            </div>

            <div className='footer__buttons-block-item' id='footer__buttons-block-item--control'>
                <span className='footer__btn-divider'>Control</span>

                <a className={`footer__btn no-select gradient--red ease ${props.isSaving ? '' : 'hidden'}`} title='Cancel' onClick={props.onCancel}>CANCEL</a>
                <a className={`footer__btn no-select gradient--red ease ${props.isSaving ? 'hidden' : ''}`} title='Save' onClick={props.onSave}>SAVE</a>
                <a className={`footer__btn no-select gradient--red ease ${props.isSaving ? 'hidden' : ''}`} title='Reset' onClick={props.onReset}>RESET</a>
            </div>

            <div className='footer__buttons-block-item' id='footer__buttons-block-item--share'>
                <span className='footer__btn-divider'>Share</span>
                
                <a className='footer__btn footer__btn--w-icon no-select gradient--red ease' target='_blank' href='https://twitter.com/AlertPresident' title='@AlertPresident on Twitter' rel='noreferrer'>
                    <i className='footer__btn-icon icon icon__twitter'></i>
                </a>
            </div>
        </div>

        <div className='footer__attribution-block abs'>
            <span className='footer__attribution-text'>Created by </span>
            <a className='footer__attribution-link' target='_blank' title='@markmiscavage on Gab' href='https://gab.com/markmiscavage' rel='noreferrer'>@markmiscavage</a>
        </div>
    </div>
);

export default Footer;
