import React from 'react'
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

function Contact() {
    const {loading,portfolioData}=useSelector(state=>state.root);
    const {contact}=portfolioData;

    return (
        <div id='contact'>
            <SectionTitle title="Say Hello" />

            <div className='flex sm:flex-col items-center justify-between'>
                <div className='flex flex-col'>
                    <p className='text-tertiary'>{'{'}</p>
                    {Object.keys(contact).map((item) => (
                        item !=='_id' &&
                        (<p className='ml-5' key={item}>
                            <span className='text-tertiary'>{item}: </span>
                            <span className='text-tertiary'>{contact[item]}</span>
                        </p>)
                    ))}
                    <p className='text-tertiary'>{'}'}</p>
                </div>
                
                <div className='h-[350px]'>
                    <dotlottie-player 
                    src="https://lottie.host/cad30f27-c88c-4082-86ac-5dcbf0b9d162/HsmOifJuVo.json" background="transparent" 
                    speed="1" 
                    autoplay></dotlottie-player>
                </div>
                


            </div>

        </div>
    )
}

export default Contact