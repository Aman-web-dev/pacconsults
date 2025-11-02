import Blogs from "@/components/marketing/blogs";
import CTA from "@/components/marketing/cta";
import Faq from "@/components/marketing/faq";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import HowItWorksPAC from "@/components/marketing/how-it-works-pac";
import Testimonials from "@/components/marketing/testimonials";
import WhoWeHelp from "@/components/marketing/who-we-help";
import AboutPhillip from "@/components/marketing/about-phillip";
import Stats from "@/components/marketing/stats";
import Footer from "@/components/marketing/footer";
import ChatbotWidget from "@/components/marketing/chatbot-widget";
import ServicesOverview from "@/components/marketing/services-overview";

const HomePage = () => {
    return (
        <div className="w-full relative flex flex-col">
            <Hero />
            {/* <ContactFormHero /> */}
            <WhoWeHelp />
            <ServicesOverview />
            <Features />
            <Stats />
            <HowItWorksPAC />
            <AboutPhillip />
            <Testimonials />
            <Blogs />
            <Faq />
            <CTA />
            <Footer />
            <ChatbotWidget />
        </div>
    );
};

export default HomePage;
