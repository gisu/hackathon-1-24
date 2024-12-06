"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gauge, Rocket, Globe, Zap, ArrowRight } from "lucide-react";

export default function Home() {
  const [url, setUrl] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b0764,transparent)]" />
        <div className="relative container mx-auto px-4 pt-20 pb-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            MEASURE YOUR WEBSITE&apos;S
            <span className="block text-purple-300">FULL POTENTIAL</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Free comprehensive analysis of your website&apos;s performance, SEO, and user experience.
            Unlock insights to boost your conversion rates.
          </p>
          
          <div className="max-w-xl mx-auto flex gap-4">
            <Input 
              placeholder="Enter your website URL" 
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <Button className="bg-purple-500 hover:bg-purple-600 text-white">
              Analyze Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="bg-black/20 py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400 mb-6">TRUSTED BY 72K+ ORGANIZATIONS</p>
          <div className="flex justify-center items-center gap-8 flex-wrap opacity-50">
            {/* Add your partner logos here */}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <Gauge className="h-12 w-12 text-purple-400 mb-4" />
              <CardTitle className="text-white">Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              Get detailed insights about loading speed, Core Web Vitals, and overall performance score.
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <Globe className="h-12 w-12 text-purple-400 mb-4" />
              <CardTitle className="text-white">SEO Analysis</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              Comprehensive SEO audit with actionable recommendations to improve your rankings.
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <Zap className="h-12 w-12 text-purple-400 mb-4" />
              <CardTitle className="text-white">Conversion Optimization</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              Identify opportunities to improve user experience and boost conversion rates.
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <Rocket className="h-12 w-12 text-purple-400 mb-4" />
              <CardTitle className="text-white">Action Plan</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              Get a prioritized list of improvements to maximize your website&apos;s performance.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}