import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {getLangDir} from 'rtl-detect';


export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params:  Promise<{ locale: string }>;
}) {
const { locale } = await params;
const direction = getLangDir(locale);

// Ensure that the incoming `locale` is valid
if (!routing.locales.includes(locale as typeof routing.locales[number])) {
  notFound();
}

// Providing all messages to the client
// side is the easiest way to get started
const messages = await getMessages();

return (
  
      <NextIntlClientProvider messages={messages}>
      <main dir={direction} className="min-h-screen flex flex-col  ">

        {children}



      </main>

      </NextIntlClientProvider>

 
);
}