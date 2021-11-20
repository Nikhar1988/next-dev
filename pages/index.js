import styles from '../styles/Home.module.scss'
import Heading from "../components/Heading";

const Home = () => {
  return (
    <div className={styles.wrapper}>
        <Heading text='Hello world'/>
    </div> 
    
  )   
};

export default Home;