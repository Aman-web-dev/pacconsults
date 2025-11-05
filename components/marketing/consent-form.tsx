"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Mail, Phone, User, Sparkles } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
});

export function ConsentForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("consent-given");
    if (!consent) {
      setIsOpen(true);
    }
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      toast.success("Thank you for subscribing!");
      localStorage.setItem("consent-given", "true");
      setIsOpen(false);
    } catch (error) {
      toast.error("Failed to subscribe. Please try again later.");
    }
  }

  const handleClose = () => {
    localStorage.setItem("consent-given", "false");
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden border-0 bg-gradient-to-br from-gray-50 to-white">
        {/* Decorative header with gradient */}
        <div className="relative bg-black pt-10 pb-8 px-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#27c7b9] opacity-10 rounded-full blur-3xl"></div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-[#27c7b9]" />
              <span className="text-[#27c7b9] text-sm font-semibold tracking-wide uppercase">
                Exclusive Access
              </span>
            </div>
            <DialogTitle className="text-3xl font-bold text-white mb-2">
              Stay in the Loop
            </DialogTitle>
            <DialogDescription className="text-gray-300 text-base">
              Join our community and be the first to know about exclusive updates, 
              new products, and special offers tailored just for you.
            </DialogDescription>
          </div>
        </div>

        {/* Form section */}
        <div className="px-8 pt-6 pb-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">Full Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input 
                          placeholder="Enter your full name" 
                          {...field} 
                          className="pl-11 h-12 border-gray-200 focus:border-[#27c7b9] focus:ring-[#27c7b9] transition-all"
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">Email Address</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input 
                          placeholder="your@email.com" 
                          type="email"
                          {...field} 
                          className="pl-11 h-12 border-gray-200 focus:border-[#27c7b9] focus:ring-[#27c7b9] transition-all"
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">Phone Number</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input 
                          placeholder="123-456-7890" 
                          {...field} 
                          className="pl-11 h-12 border-gray-200 focus:border-[#27c7b9] focus:ring-[#27c7b9] transition-all"
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <div className="pt-2 space-y-3">
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-black hover:bg-gray-800 text-white font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  Subscribe Now
                </Button>
                
                <Button 
                  type="button"
                  variant="ghost"
                  onClick={handleClose}
                  className="w-full h-10 text-gray-600 hover:text-black hover:bg-gray-100"
                >
                  Maybe Later
                </Button>
              </div>

              <p className="text-xs text-center text-gray-500 pt-2">
                By subscribing, you agree to receive updates and promotional content. 
                You can unsubscribe at any time.
              </p>
            </form>
          </Form>
        </div>

        {/* Decorative accent line */}
        <div className="h-1 bg-gradient-to-r from-black via-[#27c7b9] to-black"></div>
      </DialogContent>
    </Dialog>
  );
}
