// import classes from "./Home.module.css"
// const Home = () => {
//     return (
//         <div className={classes.Home}>
//             <section>
//                 <div className={classes.paragraph}>
//                     <h1>products company.</h1>
//                     <p>
//                        Also see How to Write an About Us Page for information about creating a story for your website, which you can use in your company presentation.
//                   </p>
//                     <button className={classes.buttonHome}>sign up</button>
//                 </div>
//             </section>
//             <footer>
//                 <div>
//                     <span>
//                         <p>Services</p>
//                         <p>About Us</p>
//                         <p>our company</p>
//                         <p>Contacts</p>
//                     </span>
//                 </div>

//                 <span className={classes.footerSpan}>
//                     ©2021 Jackets shop
//                 </span>
//             </footer>
//         </div>
//     )
// }
// export default Home;

import classes from "./Home.module.css"
const Home = () => {
    return (
         <div className={classes.Home}>
        <header>
            <h1>Welcome to KYRGYZTELEKOM</h1>
            <p>CEO:Kelgenbaev Absamat Abdymanapovich  </p>
            <p>head of director:Ulushbaev Baktybek Adsanakunovich </p>
    <p>chief accontant:Sydykov Tilek Bakalbekovich  </p>
    <p>Legal addrress:722200,  Каракол ш,  Гебзе к, 124, телефон 0 (3922) 5-32-77; факс 0 (3922) 5-00-13, е-mail: issyk-kul_telecom@kt.kg</p>
        </header>

    <footer>Asource:<a> http://kt.kg/about_us/contact/issyk_kul_branch1/</a>
ОАО КыргызТелеком</footer>
    </div> );
}
 
export default Home;