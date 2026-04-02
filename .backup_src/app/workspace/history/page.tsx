"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, History } from 'lucide-react';
import { PageWrapper } from '@/components/layout/PageWrapper';

export default function HistoryPage() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 rounded-full bg-stitch-secondary/10 text-stitch-secondary mb-6"
        >
          <History size={48} />
        </motion.div>
        <h1 className="text-3xl font-display font-bold text-stitch-primary mb-4">
          Project History
        </h1>
        <p className="text-stitch-text-muted max-w-md mx-auto mb-8">
          Historical project tracking is coming soon. 
          Use the main Dashboard to manage your active document stitching projects.
        </p>
        <div className="flex items-center gap-2 text-stitch-secondary font-medium">
          <Clock size={20} />
          <span>Feature coming soon</span>
        </div>
      </div>
    </PageWrapper>
  );
}
