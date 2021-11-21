import ContactInfo from "../../components/ContactInfo";
import Head from 'next/head';


export const getServerSideProps = async ({query}) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${query.id}`)
  const data = await response.json();
  
  if(!data) {
    return {
      notfound: true
    }
  }

  return {
    props:{contact: data}
  }
}


const Contact = ({contact}) => (
  <>
     <Head>
      <title>Contact</title>
    </Head>
     <ContactInfo contact={contact}/>
  </>
  
);

export default Contact;