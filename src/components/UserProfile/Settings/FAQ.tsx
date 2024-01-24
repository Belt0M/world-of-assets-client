import React from 'react';

const FAQ: React.FC = () => {
  return (
    <div className="faq-container max-h-[500px] overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4 mt-4 text-center">Frequently Asked Questions (FAQ)</h1>

      <section className="faq-section mb-6">
        <h2 className="text-2xl font-bold mb-2 ml-5 ">General Questions</h2>

        <div className='mb-4 '>
          <strong className='ml-2'>Q: What types of assets do you offer on World of Assets?</strong>
          <p className='ml-1'>
            A: World of Assets provides a diverse range of digital assets, including graphics, illustrations, icons, fonts, templates, 3D models, audio files, and more. Explore our catalog to discover the full range of offerings.
          </p>
        </div>

        <div className='mb-4'>
          <strong className='ml-2'>Q: How do I purchase assets from your website?</strong>
          <p className='ml-1'>
          A: To purchase an asset, simply browse our catalog, choose the desired item, and click on the "Purchase" or "Add to Cart" button. Follow the checkout process to complete your purchase securely.          </p>
        </div>

        <div className='mb-4'>
          <strong className='ml-2'>Q: Can I use purchased assets for commercial projects?</strong>
          <p className='ml-1'>
                A: In most cases, yes. Our licensing agreements typically allow for commercial use, but it's crucial to check the specific license associated with each asset. Some assets may have restrictions, and we recommend reviewing the licensing terms before use.
          </p>
        </div>

        <div className='mb-4 '>
          <strong className='ml-2'>Q: Do you offer refunds for purchased assets?</strong>
          <p className='ml-1'>
          A: Due to the digital nature of our products, we generally do not offer refunds. However, if you encounter any issues with your purchase or have concerns, please contact our support team, and we will do our best to assist you          </p>
        </div>
      </section>

      <section className="faq-section mb-6">
        <h2 className="text-2xl font-bold mb-2 ml-5 ">Licensing and Usage</h2>

        <div className='mb-4 '>
          <strong className='ml-2'>Q: How many times can I use a purchased asset?</strong>
          <p className='ml-1'>
          A: The usage limits are often specified in the license associated with each asset. While many assets have no limitations on the number of projects, some may have restrictions. Carefully review the license to understand the allowed usage.
          </p>  
        </div>       

        <div className='mb-4 '>
          <strong className='ml-2'>Q: Can I modify the assets I purchase?</strong>
          <p className='ml-1'>
          A: In many cases, yes. However, the ability to modify assets may vary depending on the type of asset and its associated license. Please check the specific licensing terms for each asset to determine if modification is allowed.
          </p>  
        </div>
      </section>
      
      <section className="faq-section mb-6">
        <h2 className="text-xl font-bold mb-2 ml-5 ">Account and Technical Support</h2>

        <div className='mb-4 '>
          <strong className='ml-2'>Q: How do I create an account on World of Assets?</strong>
          <p className='ml-1'>
          A: To create an account, click on the "Sign Up" or "Create Account" link on the top-right corner of our website. Follow the prompts to provide the necessary information and create your account.
                    </p>  
        </div>

        <div className='mb-4 '>
          <strong className='ml-2'>Q: I forgot my password. How can I reset it on World of Assets?</strong>
          <p className='ml-1'>
          A: If you forget your password, click on the "Forgot Password" link on the login page. Follow the instructions to reset your password. If you encounter any issues, contact our support team for assistance.
                              </p>  
        </div>

        <div className='mb-4 '>
          <strong className='ml-2'>Q: What do I do if I encounter technical issues with a purchased asset from World of Assets?</strong>
          <p className='ml-1'>
          A: If you experience any technical difficulties or issues with an asset, please contact our support team with detailed information about the problem. We will work to resolve the issue promptly.
                                        
        </p>  
        </div>
      </section>

      <section className="faq-section mb-6">
        <h2 className="text-xl font-bold mb-2 ml-5 ">Account and Technical Support</h2>

        <div className='mb-4 '>
          <strong className='ml-2'>Q: What payment methods do you accept on World of Assets?</strong>
          <p className='ml-1'>
          A: We accept a variety of payment methods, including credit/debit cards and other secure payment options. During the checkout process, you can choose the payment method that suits you best.                                        
        </p>  
        </div>

        <div className='mb-4 '>
          <strong className='ml-2'>Q: Is my payment information secure when making a purchase on World of Assets?</strong>
          <p className='ml-1'>
          A: Yes, we take the security of your payment information seriously. Our website uses industry-standard encryption to secure your transactions. Your payment details are processed securely, and we do not store sensitive information on our servers.                                        
        </p>  
        </div>

        <div className='mb-4 '>
          <strong className='ml-2'>Q: Do you store my credit card information on World of Assets?</strong>
          <p className='ml-1'>
          A: No, we do not store your credit card information. Our payment processing is handled by trusted third-party payment gateways that adhere to strict security standards.                                        
        </p>  
        </div>

    </section>

    <section className="faq-section mb-6">
        <h2 className="text-xl font-bold mb-2 ml-5 ">Legal and Privacy</h2>

        <div className='mb-4 '>
          <strong className='ml-2'>Q: What is your privacy policy on World of Assets?</strong>
          <p className='ml-1'>
          A: We prioritize the privacy and security of our users. You can review our detailed privacy policy here. It outlines how we collect, use, and protect your personal information.        
        </p>  
        </div>

        <div className='mb-4 '>
          <strong className='ml-2'>Q: How do you handle copyright issues with the assets on World of Assets?</strong>
          <p className='ml-1'>
          A: We take copyright seriously and ensure that all assets available on our website comply with copyright laws. If you believe an asset infringes on your copyright, please contact us immediately with relevant details, and we will address the issue promptly.        
        </p>  
        </div>

        <div className='mb-4 '>
          <strong className='ml-2'>Q: Can I resell the assets I purchase from World of Assets?</strong>
          <p className='ml-1'>
          A: Generally, no. Reselling our assets as standalone items is not permitted under our licensing agreements. If you have specific questions about the resale of assets, please review the license associated with each asset or contact our support team.        
        </p>  
        </div>

    </section>

    <section className='mb-4'>
        <h2 className="text-xl font-bold ml-5">Contact Us</h2>
        <p className='ml-1'>
          If your question is not addressed in the FAQ above, please feel free to <a href="#">contact our support team</a> for further assistance. We are here to help and ensure your experience with World of Assets is smooth and enjoyable.
        </p>
      </section>
    </div>
  );
};

export default FAQ;
