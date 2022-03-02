import Card from "components/card/Card";
import ContactForm from "components/contactform/ContactForm";
import Hero from "components/hero.js/Hero";
import Layout from "components/layout/Layout";
import SectionBreak from "components/sectionBreak/SectionBreak";

function Home() {
  return (
    <Layout>
      <Hero
        heading="Yo! These are the frogs. JUMP OUT! NOW!!!"
        subHeading="This page has been taken over by frogs. Jump away now using the Escape button. The United Ponds of Frogs (UPF) has decided that you are a threat to Frog Society."
        buttonText="OR JOIN OUR EPIC EMPIRE"
        bgImage="/Logo.gif"
      />
      <SectionBreak />
      <h2>Projects</h2>
      <font size="15">
        <font color="red">
          <h1>This page has been taken over by frogs. Jump away now.</h1>
        </font>
      </font>
      <div className="flex justify-space-evenly flex-wrap">
        <Card
          image="/UPF.png"
          alt="Flag image"
          title="Cool Empire of the Frogs"
          text="The frogs are an extremely advanced society, frog-years (human equivalent of light years) ahead of human civalization. SO JUMP AWAY NOW, OR PERISH."
          buttonText="ABOUT THE UPF"
          buttonLink=""
        />
        <Card
          image="/DINNER.jpg"
          alt="Frog saying are you my dinner"
          title="ARE YOU MY DINNER"
          text="I am hungry and I am from the UPF. Are you my dinner? I heard that humans aren't allowed here..."
          buttonText="ABOUT THE UPF"
          buttonLink=""
        />
        <Card
          image="/UPF.png"
          alt="Project image"
          title="Cool Empire of the Frogs"
          text="The frogs are an extremely advanced society, frog-years (human equivalent of light years) ahead of human civalization. SO JUMP AWAY NOW, OR PERISH BY THE UPF."
          buttonText="ABOUT THE UPF"
          buttonLink=""
        />
      </div>
      <SectionBreak />
      <h2>Contact the UPF</h2>
      <ContactForm />
    </Layout>
  );
}

export default Home;
