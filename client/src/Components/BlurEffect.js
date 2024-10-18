import React from 'react';


const BlurEffect = () => {
    return (
        <div className="relative h-full overflow-hidden">
            {/* Top blur */}
            <div className="fixed top-0 left-0 right-0 h-32 z-20">
                <div className={`absolute inset-0 z-10 pointer-events-none backdrop1`} />
                <div className={`absolute inset-0 z-20 pointer-events-none backdrop2`} />
                <div className={`absolute inset-0 z-30 pointer-events-none backdrop3`} />
                <div className={`absolute inset-0 z-40 pointer-events-none backdrop4`} />
                <div className={`absolute inset-0 z-50 pointer-events-none backdrop5`} />
                <div className={`absolute inset-0 z-60 pointer-events-none backdrop6`} />
                <div className={`absolute inset-0 z-70 pointer-events-none backdrop7`} />
                <div className={`absolute inset-0 z-80 pointer-events-none backdrop8`} />
            </div>
            
            




            {/* Bottom blur */}
            <div className="fixed bottom-0 left-0 w-full h-24 z-20 transform rotate-180">
            <div className={`absolute inset-0 z-80 pointer-events-none backdrop8`} />
            <div className={`absolute inset-0 z-70 pointer-events-none backdrop7`} />
            <div className={`absolute inset-0 z-60 pointer-events-none backdrop6`} />
            <div className={`absolute inset-0 z-50 pointer-events-none backdrop5`} />
            <div className={`absolute inset-0 z-40 pointer-events-none backdrop4`} />
            <div className={`absolute inset-0 z-30 pointer-events-none backdrop3`} />
            <div className={`absolute inset-0 z-20 pointer-events-none backdrop2`} />
            <div className={`absolute inset-0 z-10 pointer-events-none backdrop1`} />
        </div>
            
                

            
            {/* <div className="fixed mix-blend-multiply bg-white filter backdrop-blur-sm bottom-0 left-0 right-0 h-16 z-20" />
         */}
        
        </div>
    );
};

export default BlurEffect;
