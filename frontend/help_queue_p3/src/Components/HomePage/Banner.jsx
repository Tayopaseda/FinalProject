
// const Banner = () => {
//     return(
//         <h1>NAV OR BANNER HERE</h1>
//     );
// }

// export default Banner;

import logo from '../../css/images/Banner.png'


const Banner = () => {

    return(
            <div>
                <img src={logo} alt ="Logo" id="mainBanner"/>;
            </div>
            )  


}

export default Banner;