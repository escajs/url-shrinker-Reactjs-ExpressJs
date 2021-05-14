import Left from "./Left/Left"
import Right from "./Right/Right"
const Home = () => {
    return (
        <div className="row container home-box">
            <div className="col s12 m6">
            <Left/>
            </div>
            <div className="col s12 m6">
            <Right/>
            </div>
        </div>
    );
}
 
export default Home;