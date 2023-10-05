import React from 'react';

const ServiceInfoComponent = () => {
  const ServiceInfoElement = ({ title, desc }) => {
    return (
      <div className=" p-4" style={{  boxShadow: 'rgba(17, 17, 26, 0.05)  0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',}}>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mt-2">{desc}</p>
      </div>
    );
  };

  return (
    <div className='grid mt-5 md:mt-0 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      <ServiceInfoElement title="Web Development" desc="Are you looking to establish a strong online presence or revamp your existing website? With my expertise in web development, I can create visually stunning and highly functional websites tailored to your needs. Using cutting-edge technologies and responsive design principles, I ensure that your website not only looks great but also delivers a seamless user experience. Let's collaborate to bring your digital vision to life." />

      <ServiceInfoElement title="Branding" desc="Branding is more than just a logo; it's the essence of your business. I specialize in crafting unique and memorable brand identities that resonate with your target audience. From logos and color palettes to brand guidelines, I ensure that your brand stands out in a crowded marketplace. Let's work together to build a brand that leaves a lasting impression." />

      <ServiceInfoElement title="Web Design" desc="A well-designed website is your digital storefront, and it's often the first interaction a potential customer has with your business. I focus on creating beautiful and user-friendly web designs that capture your brand's essence and engage your visitors. Whether you need a simple landing page or a complex e-commerce platform, I'll design it to perfection." />

      <ServiceInfoElement title="Video" desc="Video content has become a powerful tool for storytelling and marketing. I offer video production services that can bring your ideas to life. From scriptwriting and filming to editing and post-production, I'll help you create compelling video content that resonates with your audience and delivers your message effectively." />

      <ServiceInfoElement title="Content Creation" desc="Content is king in the digital world, and I can help you create engaging and valuable content that drives traffic, boosts your online presence, and establishes your authority in your niche. Whether it's blog posts, articles, social media content, or any other form of content, I have the expertise to deliver content that connects with your audience and achieves your goals." />
    </div>
  );
};

export default ServiceInfoComponent;
