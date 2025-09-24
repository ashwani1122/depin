"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Bell, Clock, Server, ArrowRight, Check, Moon, Sun } from 'lucide-react';
import { useRouter } from 'next/navigation';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 dark:text-white transition-colors duration-500 relative overflow-hidden">
      
      {/* Dark/Light Toggle Floating Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-white dark:bg-gray-800 shadow-xl hover:scale-110 transition-transform z-50"
      >
        {darkMode ? <Sun className="h-6 w-6 text-yellow-400" /> : <Moon className="h-6 w-6 text-gray-800" />}
      </button>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 md:py-32 relative">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Monitor Your Services <br />
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                With Confidence
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Stay ahead with real-time alerts, uptime insights, and performance analytics.  
              <span className="font-semibold"> Your uptime is our priority.</span>
            </p>
            <div className="mt-8 flex space-x-5">
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/dashboard')} 
                className="px-8 py-4 bg-indigo-600 dark:bg-indigo-500 text-white rounded-2xl shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition flex items-center font-semibold"
              >
                Start Monitoring
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition font-semibold"
              >
                View Demo
              </motion.button>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src="https://pulsetic.com/assets/svg/product-2.svg"
              alt="Dashboard"
              className="rounded-2xl shadow-2xl ring-1 ring-gray-200 dark:ring-gray-700 hover:scale-105 transition-transform"
            />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="bg-gray-50 dark:bg-gray-900/40 py-28">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-center mb-20"
          >
            🚀 Why Choose <span className="text-indigo-600">UptimeGuard?</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Bell className="h-10 w-10 text-indigo-500" />}
              title="Instant Alerts"
              description="Be the first to know when downtime happens via Email, SMS, Slack, or Webhooks."
            />
            <FeatureCard
              icon={<Clock className="h-10 w-10 text-indigo-500" />}
              title="24/7 Monitoring"
              description="Our global nodes continuously monitor your services every few seconds."
            />
            <FeatureCard
              icon={<Server className="h-10 w-10 text-indigo-500" />}
              title="Detailed Reports"
              description="Analyze trends, uptime %, and performance with beautiful reports."
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-28">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-center mb-20"
          >
            💎 Choose the plan that fits you best
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            <PricingCard
              title="Starter"
              price="29"
              features={["10 monitors","1-min checks","Email alerts","5 team members","24h retention","Global coverage"]}
            />
            <PricingCard
              title="Professional"
              price="79"
              featured
              features={["50 monitors","30s checks","All alert channels","Unlimited teams","30-day retention","API access"]}
            />
            <PricingCard
              title="Enterprise"
              price="199"
              features={["Unlimited monitors","15s checks","Priority support","Custom integrations","90-day retention","SLA guarantee"]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2">
                <Activity className="h-7 w-7 text-indigo-400" />
                <span className="text-2xl font-bold text-white">UptimeGuard</span>
              </div>
              <p className="mt-4">Keeping your services online, always.</p>
            </div>
            <FooterLinks title="Product" links={["Features","Pricing","API"]} />
            <FooterLinks title="Company" links={["About","Blog","Careers"]} />
            <FooterLinks title="Legal" links={["Privacy","Terms","Security"]} />
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2025 UptimeGuard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string; }) {
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      className="p-8 backdrop-blur-lg bg-white/70 dark:bg-gray-800/60 rounded-2xl shadow-xl"
    >
      <div className="mb-5">{icon}</div>
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
}

function PricingCard({ title, price, features, featured = false }: { title: string; price: string; features: string[]; featured?: boolean; }) {
  return (
    <motion.div 
      whileHover={{ y: -15, scale: 1.05, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`p-10 rounded-2xl relative shadow-lg ${
        featured
          ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white ring-4 ring-indigo-400'
          : 'bg-white/80 dark:bg-gray-800/70 backdrop-blur-lg text-gray-900 dark:text-white'
      }`}
    >
      {featured && (
        <span className="absolute top-4 right-4 text-xs font-bold bg-yellow-400 text-black px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-semibold mb-6">{title}</h3>
      <div className="mb-8">
        <span className="text-5xl font-bold">${price}</span>
        <span className="text-sm">/month</span>
      </div>
      <ul className="space-y-4 mb-10">
        {features.map((f, i) => (
          <li key={i} className="flex items-center space-x-3">
            <Check className="h-5 w-5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-4 rounded-xl font-semibold transition ${
          featured
            ? 'bg-white text-indigo-600 hover:bg-gray-100'
            : 'bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600'
        }`}
      >
        Get Started
      </button>
    </motion.div>
  );
}

function FooterLinks({ title, links }: { title: string; links: string[]; }) {
  return (
    <div>
      <h3 className="font-semibold text-white mb-5">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, i) => (
          <li key={i}>
            <a href="#" className="hover:text-white transition">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
