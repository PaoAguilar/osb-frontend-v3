"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Starfield from "@/components/commons/Starfield";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Lock } from "lucide-react";

const page = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left Section - Branding/Promotional */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/img/menu.png')" }}
        />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full p-12">
          {/* Logo */}
          <div className="text-center items-center mb-8">
            <Image
              src="/img/logo_horizontal.svg"
              alt="Outer Sports Ballers"
              width={200}
              height={80}
              className="h-20 w-auto mb-6 cursor-pointer"
              onClick={() => router.push("/")}
            />
          </div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative overflow-hidden">
        {/* Background with nebula effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-orange-800">
          <Starfield />
        </div>

        {/* Login Form Container */}
        <Card className="w-full max-w-md bg-orange-900/80 backdrop-blur-sm border-orange-700/50 shadow-2xl">
          <CardContent className="p-8">
            {/* Title */}
            <h2 className="text-3xl font-bold text-cyan-300 text-center mb-8">
              Sign Up
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="font-helvetica text-orange-200"
                >
                  Username
                </Label>
                <Input
                  id="email"
                  placeholder="Your username"
                  className="font-helvetica bg-orange-800/50 border-orange-600 text-orange-100 placeholder:text-orange-300 focus:border-cyan-400 focus:ring-cyan-400"
                  {...register("username", {
                    required: "Username is required",
                  })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-helvetica text-orange-200">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="font-helvetica bg-orange-800/50 border-orange-600 text-orange-100 placeholder:text-orange-300 focus:border-cyan-400 focus:ring-cyan-400"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="font-helvetica text-orange-200">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-300 w-4 h-4" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Your password"
                    className="font-helvetica bg-orange-800/50 border-orange-600 text-orange-100 placeholder:text-orange-300 focus:border-cyan-400 focus:ring-cyan-400 pl-10 pr-10"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-300 hover:text-orange-100"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {submitError && (
                <p className="text-red-400 text-sm -mt-2">{submitError}</p>
              )}

              <p className="font-helvetica text-card-bg text-sm font-extralight">
                By signing up you agree to our{" "}
                <Link
                  className="font-helvetica underline hover:text-secondary"
                  href={"#"}
                >
                  Terms & Condition
                </Link>{" "}
                and{" "}
                <Link
                  className="font-helvetica underline hover:text-secondary"
                  href={"#"}
                >
                  Privacy Policy.
                </Link>
                <span className="text-secondary">*</span>
              </p>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-3 text-lg rounded-lg transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "SIGNING IN..." : "CONTINUE"}
              </Button>
            </form>

            {/* Separator */}
            <div className="my-6">
              <Separator className="bg-orange-600" />
              <div className="text-center -mt-3">
                <span className="font-helvetica bg-orange-900/80 px-4 text-orange-300 text-sm">
                  or continue with
                </span>
              </div>
            </div>

            {/* Social Login */}
            <div className="flex justify-center">
              <Button
                variant="outline"
                className="w-12 h-12 rounded-full bg-[#FF6B2F3D] hover:bg-red-700 border-red-600 hover:border-red-700"
              >
                <Image
                  src="/img/google.svg"
                  alt="google-icon"
                  width={100}
                  height={100}
                />
              </Button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center mt-6">
              <span className="text-orange-300 text-sm font-helvetica">
                Don&apos;t have an account?{" "}
              </span>
              <Link
                href="/login"
                type="button"
                className="text-green-400 font-helvetica hover:text-green-300 font-medium text-sm"
              >
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
