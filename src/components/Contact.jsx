import React from 'react';
import { useForm } from 'react-hook-form';
import mail from '../Api setup/appwriteFuncConf';

const Contact = () => {
  const { register, handleSubmit, reset, formState: {isSubmitting} } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await mail.sendMail(data);
      if (response.status === 'completed') {
        alert("Message sent successfully!")
      }
      reset();
    } catch (error) {
        console.error('Error:', error);
        alert('!Something went wrong while sending the message')
    }
  };

  return (
    <section id="contact" className="p-8 bg-black">
      <svg width="162" height="235" viewBox="0 0 362 535" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-auto my-0  '>
            <path d="M106.388 524.584C106.279 525.432 105.543 526.091 104.743 526.056L91.7073 525.476C90.9073 525.441 90.3467 524.724 90.4551 523.876C90.5635 523.027 91.2998 522.368 92.0997 522.404L103.687 522.919L105.257 510.631C105.366 509.783 106.102 509.124 106.902 509.159C107.702 509.195 108.262 509.911 108.154 510.76L106.388 524.584ZM103.776 525.56C66.0722 477.37 50.6382 442.307 49.1051 416.285C48.3355 403.224 51.0678 392.421 56.2531 383.424C61.4272 374.447 68.9786 367.379 77.6926 361.667C95.0652 350.279 117.378 344.09 135.549 338.935C144.697 336.34 152.751 334.02 158.748 331.445C161.744 330.157 164.135 328.844 165.859 327.462C167.579 326.084 168.514 324.738 168.845 323.391L171.672 323.895C171.096 326.242 169.55 328.193 167.489 329.844C165.433 331.492 162.743 332.94 159.632 334.277C153.413 336.948 145.148 339.321 136.061 341.899C117.764 347.09 95.951 353.168 79.0673 364.235C70.6533 369.75 63.544 376.456 58.7158 384.834C53.8988 393.192 51.2872 403.325 52.0229 415.814C53.5005 440.892 68.4742 475.386 106.102 523.479L103.776 525.56ZM168.845 323.391C169.551 320.514 168.347 317.513 165.012 314.293C161.706 311.101 156.602 307.998 150.355 304.97C137.869 298.916 121.288 293.37 106.56 288.002C99.2226 285.327 92.3471 282.696 86.7332 280.08C81.1699 277.488 76.6557 274.828 74.2081 272.026C72.9752 270.615 72.1262 269.011 72.1109 267.209C72.0951 265.344 72.9722 263.617 74.4874 262.078C75.9767 260.565 78.1639 259.14 81.0345 257.76C83.9218 256.372 87.5904 254.988 92.1171 253.596L92.6917 256.542C88.2514 257.907 84.7388 259.239 82.039 260.537C79.3225 261.843 77.5165 263.072 76.415 264.191C75.3394 265.284 75.0279 266.167 75.0341 266.897C75.0409 267.692 75.4245 268.669 76.4429 269.835C78.4981 272.187 82.5619 274.66 88.1182 277.249C93.6237 279.815 100.409 282.413 107.74 285.085C122.349 290.411 139.135 296.027 151.776 302.156C158.092 305.218 163.491 308.462 167.094 311.941C170.668 315.392 172.779 319.385 171.672 323.895L168.845 323.391ZM92.1171 253.596C128.075 242.544 202.45 221.479 251.492 193.144C263.736 186.069 274.332 178.579 282.332 170.73C290.339 162.875 295.646 154.761 297.513 146.433C301.208 129.949 291.583 111.397 258.857 91.256L260.502 88.5648C293.32 108.763 304.525 128.27 300.355 146.871C298.289 156.086 292.489 164.771 284.218 172.887C275.94 181.008 265.085 188.658 252.711 195.808C203.277 224.369 128.469 245.545 92.6917 256.542L92.1171 253.596Z" fill="url(#paint0_linear_784_72816)"/>
            <defs>
            <linearGradient id="paint0_linear_784_72816" x1="71.2749" y1="341.86" x2="330.374" y2="290.185" gradientUnits="userSpaceOnUse">
            <stop stop-color="#AB83FE"/>
            <stop offset="1" stop-color="#FBAE96"/>
            </linearGradient>
            </defs>
      </svg>
      <div className="container mx-auto mt-3">
        <h2 className="text-2xl font-bold mb-4 text-white font-mono">Contact</h2>
        <form
          className="flex flex-col gap-4 items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input className="border p-3 mb-4 w-full rounded-full bg-black text-white font-mono border-purple-400 focus:outline-purple-700 px-4" type="text" placeholder="Your Name" 
          {...register("name", { required: true })} />
          <input className="border p-3 mb-4 w-full rounded-full bg-black text-white font-mono border-purple-400 focus:outline-purple-700 px-4" type="email" placeholder="Your Email" 
          {...register("email", { required: true })}
          />
          <textarea className="border p-2 mb-4 w-full rounded-xl bg-black text-white font-mono border-purple-400 focus:outline-purple-700 px-4 min-h-32 " placeholder="Your Message"
          {...register("message", { required: true })}
          ></textarea>
          <button className={`bg-purple-500 text-white p-2 rounded-full md:w-36 w-full shadow-md shadow-slate-700 font-mono ${isSubmitting && 'bg-purple-600'} hover:bg-purple-600 transition-all delay-75`} type="submit"
          disabled={isSubmitting}
          >
            {
              isSubmitting ? 'Sending...' : 'Send Message'
            }
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
