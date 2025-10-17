"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = [{"id":"hero-image","url":"https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Two women working together on software programming indoors, focusing on code."},{"id":"about-image","url":"https://images.pexels.com/photos/5990037/pexels-photo-5990037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A multicultural team engaged in a meeting around a conference table with laptops."},{"id":"feature-1-image","url":"https://images.pexels.com/photos/5561923/pexels-photo-5561923.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Stock market analysis setup with charts, phone, magnifier, and clipboards."},{"id":"feature-2-image","url":"https://images.pexels.com/photos/17489163/pexels-photo-17489163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a modern server unit in a blue-lit data center environment."},{"id":"team-image-1","url":"https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Young woman with curly hair working on her laptop in a cozy home setting, exuding confidence and focus."},{"id":"team-image-2","url":"https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Cheerful male architect in a red hardhat and plaid shirt giving thumbs up at his desk."},{"id":"customer-1","url":"https://images.pexels.com/photos/8866823/pexels-photo-8866823.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a smiling call center agent holding a headset microphone."}];

function resolveAsset(id: string) {
  const asset = assetMap.find(a => a.id === id);
  return asset ? { url: asset.url, alt: asset.alt } : { url: "/public/images/placeholder.webp", alt: "Decorative image" };
}

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="/brand/logowhite.svg"
          logoAlt="IT Company"
          brandName="TechInnovate"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Innovative IT Solutions"
            description="We provide cutting-edge tech solutions for modern enterprises."
            tag="Welcome"
            imageSrc={resolveAsset("hero-image").url}
            buttons={[
              { text: "Learn More", href: "about" },
              { text: "Contact Us", href: "contact" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="We create technology that empowers businesses to transform and thrive."
            buttons={[
              { text: "See Our Work", href: "features" },
              { text: "Meet the Team", href: "team" }
            ]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            features={[
              {
                title: "Advanced Analytics",
                description: "Gain insights from comprehensive data analysis.",
                imageSrc: resolveAsset("feature-1-image").url
              },
              {
                title: "Secure Cloud Solutions",
                description: "Reliable cloud services tailored to your needs.",
                imageSrc: resolveAsset("feature-2-image").url
              }
            ]}
            title="Our Services"
            description="Explore our key offerings designed to enhance your business."
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardThree
            members={[
              {
                id: "1",
                name: "Sophie P.",
                role: "Technology Officer",
                imageSrc: resolveAsset("team-image-1").url
              },
              {
                id: "2",
                name: "Liam T.",
                role: "Chief Developer",
                imageSrc: resolveAsset("team-image-2").url
              }
            ]}
            title="Our Team"
            description="Meet the experts driving innovation in our company."
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplitForm
            title="Contact Us"
            description="Get in touch with our team to discuss your IT needs."
            inputs={[
              { name: "name", type: "text", placeholder: "Your Name", required: true },
              { name: "email", type: "email", placeholder: "Email Address", required: true }
            ]}
            textarea={{ name: "message", placeholder: "Your Message", rows: 4, required: true }}
            imageSrc={resolveAsset("hero-image").url}
            buttonText="Send Message"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [
                { label: "Features", href: "features" },
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" }
              ]}
            ]}
            logoText="TechInnovate"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
