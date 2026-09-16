import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Extract dynamic title
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Premium Web Design & Digital Marketing';

    const baseUrl = request.nextUrl.origin;
    const bgUrl = `${baseUrl}/og-bg.jpg`;
    const logoUrl = `${baseUrl}/MetaToppers-bg.png`;

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${bgUrl})`,
            backgroundSize: '1200px 630px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            fontFamily: 'sans-serif',
          }}
        >
          {/* Logo & Brand Container */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.95)',
              padding: '24px 48px',
              borderRadius: '24px',
              marginBottom: '40px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            }}
          >
            <img 
              src={logoUrl} 
              alt="Meta Toppers Logo" 
              style={{ width: '80px', height: '80px', marginRight: '24px' }} 
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '52px', fontWeight: 'bold', color: '#020617', letterSpacing: '2px' }}>
                META TOPPERS
              </span>
            </div>
          </div>

          {/* Dynamic Page Title Container */}
          <div
            style={{
              display: 'flex',
              padding: '24px 64px',
              background: 'rgba(11, 111, 168, 0.95)', // brand blue
              borderRadius: '20px',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            }}
          >
            <span
              style={{
                fontSize: '56px',
                fontWeight: 'bold',
                color: '#ffffff',
                textAlign: 'center',
                letterSpacing: '-1px',
              }}
            >
              {title}
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`OG Image Generation Error: ${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
