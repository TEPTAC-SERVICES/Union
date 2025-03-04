"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useState } from "react";
import { Loader2 } from "lucide-react";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { getLangDir } from "rtl-detect";

const Page = () => {
  const t = useTranslations("LoginPage");
  const locale = useLocale();
  const direction = getLangDir(locale);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const FormSchema = z.object({
    email: z.string().email({
      message: t("email_message"),
    }),
    password: z
      .string()
      .min(6, {
        message: t("password_message_1"),
      })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
        message: t("password_message_2"),
      }),
  });

  const BackendURL =
    process.env.NEXT_PUBLIC_BACK_END_URL || "http://localhost:5000";

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Uncomment this when you have AuthContext set up
  // const { user, loading, error } = useAuthContext();

  // Handle redirect to login if no user and not loading
  // useEffect(() => {
  //   if (user && !loading) {
  //     router.push("/profile");
  //   }
  // }, [user, loading, router]);

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsLoading(true);
    try {
      const { email, password } = data;
      await axios.post(
        `${BackendURL}/api/auth/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      toast({
        title: t("toast_success"),
        description: t("toast_success_description"),
      });
      console.log("switching to profile");
      window.location.href = "/profile";
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // Get the error message from the response
        const errorMessage =
          error.response?.data?.message ||
          error.response?.data?.error ||
          error.message ||
          t("toast_error");

        // Get the error title based on the status code
        const errorTitle = (() => {
          switch (error.response?.status) {
            case 400:
              return "خطأ في التحقق";
            case 401:
              return "غير مصرح";
            case 403:
              return "ممنوع";
            case 409:
              return "تعارض";
            case 500:
              return "خطأ في الخادم";
            default:
              return "فشل تسجيل الدخول";
          }
        })();

        toast({
          title: errorTitle,
          description: errorMessage,
          variant: "destructive",
        });
      } else {
        // Handle non-Axios errors
        toast({
          title: "خطأ",
          description:
            error instanceof Error ? error.message : "حدث خطأ غير متوقع",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    window.location.href = `${BackendURL}/api/auth/${provider}`;
  };

  return (
    <div className="flex items-stretch justify-center min-h-screen bg-white dark:bg-gray-800">
      <div className="hidden w-1/2 bg-linear-to-r from-[#0E4815]/15 via-[#AF9113]/15 to-[#0E4815]/15 lg:relative lg:flex lg:flex-col lg:items-center lg:justify-center">
        <Image
          src="/logo.svg"
          width={540}
          height={540}
          alt="logo"
          className="absolute opacity-15"
        />
        <h1 className="animated-gradient-text font-amiri text-[100px] py-5 z-10">
          {t("greeting")}
        </h1>
      </div>
      <div className="flex w-full flex-col items-center justify-center lg:w-1/2">
        <div className="space-y-8 w-full max-w-md px-4">
          <div className="space-y-4">
            <h1 className="text-3xl  font-bold font-amiri text-center pb-20">
              {t("title")}
            </h1>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm mb-2">
                        {t("email")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          dir={direction}
                          placeholder="john@example.com"
                          {...field}
                          className="w-full focus:ring-[#0E4815] focus:ring-2"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm mb-2">
                        {t("password")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          dir={direction}
                          type="password"
                          placeholder="••••••••"
                          {...field}
                          className="w-full focus:ring-[#0E4815] focus:ring-2"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-[#0E4815] hover:bg-green-700 text-[20px] font-amiri"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      جاري تسجيل الدخول...
                    </>
                  ) : (
                    t("button")
                  )}
                </Button>
              </form>
            </Form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  أو قم بتسجيل الدخول بواسطة
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => handleSocialLogin("facebook")}
                disabled={isLoading}
              >
                <Image
                  src="/facebook.svg"
                  width={20}
                  height={20}
                  alt="facebook"
                />
                فيسبوك
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => handleSocialLogin("google")}
                disabled={isLoading}
              >
                <Image src="/google.svg" width={20} height={20} alt="google" />
                جوجل
              </Button>
            </div>

            <p className="text-sm text-center text-gray-500">
              لم يتم إنشاء حساب؟{" "}
              <Link href="/signup" className="text-[#0E4815] hover:underline">
                إنشاء حساب
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
