import React from "react";
import Container from "../../shared/ui/Container/Container";
import Header from "../../widgets/Header";
import Technologies from "../../widgets/Technologies";
import Projects from "../../widgets/Projects";
import Footer from "../../widgets/Footer";

const Home = () => {
    return ( 
        <>
            <Header/>
            <Container>
                <Technologies/>
                <Projects/>
            </Container>
            <Footer/>
        </>
     );
}
 
export default Home;