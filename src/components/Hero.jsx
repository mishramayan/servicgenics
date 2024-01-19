import styles from "../style";

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">ServicGenics LLP</span> 
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Your Team <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Moto</span>{" "}
          </h1>
        </div>

        <h5 className="font-poppins font-semibold ss:text-[38px] text-[22px] text-white ss:leading-[70.8px] leading-[45px] w-full">
          Mission Statement:
        </h5>
        <p className={`${styles.paragraph} mt-4`}>
          To be the catalyst in E-commerce & digital communities of customers, 
          contributors, and partners for creating better technology the open 
          source way. Empower businesses through innovative and tailored IT 
          services, fostering a digital landscape where efficiency, security, 
          and growth thrive. We are committed to delivering exceptional value, 
          building lasting partnerships, and continuously pushing the boundaries 
          of what technology can achieve for our clients.
        </p>

      </div>
      
    </section>
)

export default Hero
