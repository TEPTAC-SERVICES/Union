import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    
    images: {
      dangerouslyAllowSVG: true,
  
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'gazzabgccdtugoofrnfg.supabase.co',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'api.dicebear.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
          
        },
        {
          protocol: 'https',
          hostname: 'platform-lookaside.fbsbx.com',
          port: '',
          pathname: '/**',
          
        },
        {
          protocol: 'https',
          hostname: 'dl.dropboxusercontent.com',
          port: '',
          pathname: '/**',
          
        },
  
        
      ],
    },
  }; 
export default withNextIntl(nextConfig);