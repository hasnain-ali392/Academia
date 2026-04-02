"use client";

import { PageWrapper } from "@/components/layout/PageWrapper";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <PageWrapper className="min-h-screen bg-stitch-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Header Info */}
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-stitch-primary mb-6">
              Get in touch
            </h1>
            <p className="font-body text-lg text-stitch-text-muted mb-12">
              Have questions about how Academia calculates your metrics, or need help connecting your university portal? We're here to help.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-stitch-secondary/10 p-3 rounded-lg text-stitch-secondary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-stitch-primary">Email Us</h3>
                  <p className="text-stitch-text-muted mt-1">support@academia.example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-stitch-secondary/10 p-3 rounded-lg text-stitch-secondary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-stitch-primary">Office</h3>
                  <p className="text-stitch-text-muted mt-1">University Innovation Hub<br />Building 4, Floor 2</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-stitch-surface-alt p-8 md:p-10 rounded-stitch-lg border border-stitch-border shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-stitch-primary">First Name</label>
                  <Input required placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-stitch-primary">Last Name</label>
                  <Input required placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-stitch-primary">Email</label>
                <Input required type="email" placeholder="jane@university.edu" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-stitch-primary">Message</label>
                <Textarea required placeholder="How can we help you today?" className="h-32" />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
              
              {status === "success" && (
                <div className="p-4 bg-stitch-success/10 border border-stitch-success text-stitch-success rounded-stitch text-sm text-center">
                  Message sent! We'll reply within 24 hours.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
