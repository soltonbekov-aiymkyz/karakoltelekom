
// import classes from "./About.module.css";
// const About = () => {
//     return (
//       <div className={classes.About}>
//         <h2>About our compny</h2>
//         <div className={classes.divp}>
//           <div className={classes.section}>
//             <h3>Products</h3>
//             <p className={classes.par}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
//             dignissim risus. Sed elit ex, dignissim ac est nec, porta rutrum lorem.
//             Aenean maximus vestibulum ullamcorper. Aliquam lobortis, odio a suscipit
//             commodo, dolor tortor mattis urna, eu pretium enim ipsum eget turpis.
//             Aliquam aliquam, orci sed bibendum tristique, velit nisl facilisis orci,
//             at luctus est eros in sapien. Aenean et nulla at mi accumsan vehicula.
//             Nunc tristique dolor quis odio luctus, consequat lacinia ante tempus.
//             Praesent imperdiet laoreet libero eget tincidunt. Morbi elementum
//             efficitur nisi nec malesuada. Integer commodo turpis nec faucibus
//             venenatis. Class aptent taciti sociosqu ad litora torquent per conubia
//             nostra, per inceptos himenaeos. Nulla aliquet enim ut pretium
//             sollicitudin. Class aptent taciti sociosqu ad litora torquent per
//             conubia nostra, per inceptos himenaeos.
//           </p></div>
//           <div className={classes.section}>
//             <h3>household products</h3>
//             <p className={classes.par}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
//             dignissim risus. Sed elit ex, dignissim ac est nec, porta rutrum lorem.
//             Aenean maximus vestibulum ullamcorper. Aliquam lobortis, odio a suscipit
//             commodo, dolor tortor mattis urna, eu pretium enim ipsum eget turpis.
//             Aliquam aliquam, orci sed bibendum tristique, velit nisl facilisis orci,
//             at luctus est eros in sapien. Aenean et nulla at mi accumsan vehicula.
//             Nunc tristique dolor quis odio luctus, consequat lacinia ante tempus.
//             Praesent imperdiet laoreet libero eget tincidunt. Morbi elementum
//             efficitur nisi nec malesuada. Integer commodo turpis nec faucibus
//             venenatis. Class aptent taciti sociosqu ad litora torquent per conubia
//             nostra, per inceptos himenaeos. Nulla aliquet enim ut pretium
//             sollicitudin. Class aptent taciti sociosqu ad litora torquent per
//             conubia nostra, per inceptos himenaeos.
//           </p></div>
        
        
       
//           <div className={classes.section}>
//             <h3>products for pets</h3>
//             <p className={classes.par}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
//             dignissim risus. Sed elit ex, dignissim ac est nec, porta rutrum lorem.
//             Aenean maximus vestibulum ullamcorper. Aliquam lobortis, odio a suscipit
//             commodo, dolor tortor mattis urna, eu pretium enim ipsum eget turpis.
//             Aliquam aliquam, orci sed bibendum tristique, velit nisl facilisis orci,
//             at luctus est eros in sapien. Aenean et nulla at mi accumsan vehicula.
//             Nunc tristique dolor quis odio luctus, consequat lacinia ante tempus.
//             Praesent imperdiet laoreet libero eget tincidunt. Morbi elementum
//             efficitur nisi nec malesuada. Integer commodo turpis nec faucibus
//             venenatis. Class aptent taciti sociosqu ad litora torquent per conubia
//             nostra, per inceptos himenaeos. Nulla aliquet enim ut pretium
//             sollicitudin. Class aptent taciti sociosqu ad litora torquent per
//             conubia nostra, per inceptos himenaeos.
//           </p></div>
//         </div>
//       </div>
//     );
//   };
  
//   export default About;




  import classes from "./About.module.css";
import background from "../../images/itcompany.jpg"


const About = () => {
  return (
    <div className={classes.About}>
      <section className={classes.bigContainer}>
        <div className={classes.section1}>
          <h5>IT LEADERS</h5>
          <h1>The most creative and biggest studio in Kyrgyzstan</h1>

          <p>
          Entrust the creation and promotion of your business to a team of studio professionals and you will receive a ready-made tool that will work effectively for you and make a profit. We will create everything according to your order, monitor its performance, and ensure the growth of the number of potential customers for your business.
          </p>
        </div>


        <div className={classes.cardContainer}>
          <span>
            <h1>+ 30</h1>
            <p>+ 30 In our team more than 40 Certified specialists</p>
          </span>

          <span>
            <h1>+ 300</h1>
            <p>+300 We have implemented over 150 websites and 45 mobile applications</p>
          </span>

          <span>
            <h1>+ 10</h1>
            <p>+10 Years on the market</p>
          </span>
          </div>



        <span className={classes.imgSpan}>
            <img src={background} alt="download"></img>
          </span>
        
      </section>
    </div>
  );
};

export default About;