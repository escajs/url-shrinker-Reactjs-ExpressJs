import "./UnderPage.css"
import github from './github.svg'
const UnderPage = () => {

    return (
        <div className="row under-parent">
            <div className="col s6 left-align" style={{paddingLeft:'2.5em'}}>
                <h6>Created With &hearts; By <a href="https://github.com/escajs">Othmane Bejja</a></h6>
            </div>
            <div className="col s6 right-align" style={{paddingRight:'2.5em'}}>
                <h6><a href="https://github.com/escajs/url-shrinker-Reactjs-ExpressJs"><img class="github_icon" src={github} alt="github_bejja_othmane" />&nbsp;ShrinkIT on Github</a></h6>
            </div>
        </div>
    );
}
 
export default UnderPage;