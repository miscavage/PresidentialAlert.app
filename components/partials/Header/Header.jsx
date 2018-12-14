/**
 * @author Mark Miscavage <markmiscavage@protonmail.com>
 * @description Header component
 * @public
 */
const Header = (props = {}) => (
    <div className='header'>
        <h1 className={`header__title ${props.isSaving ? 'hidden' : ''}`}>PresidentialAlert.app</h1>
        <h2 className='header__subtitle'>
            {
                props.isSaving ? 
                'Take a Screenshot' : 
                    <span><a target='_blank' href='https://twitter.com/search?f=tweets&q=PresidentialAlert' className='header__link' rel='noreferrer'>#PresidentialAlert</a> Generator</span>
            }
        </h2>
    </div>
);

export default Header;
