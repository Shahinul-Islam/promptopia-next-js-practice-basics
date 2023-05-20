import '@styles/globals.css';
import { Children } from 'react';

export const metadata = {
    title:"my-app",
    description:"discover and share ai prompts"
}

const RootLayout = ({children}) => {
    return (
        
        <html lang="en">
            
            <body>
                <div className='main'>
                    <div className='gradient'>
                        
                    </div>
                    
                </div>
                <main className='app'>{children}</main>
            
            </body>
        </html>
    );
};

export default RootLayout;