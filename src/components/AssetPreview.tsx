"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { File, FileText, ImageIcon, Table, Presentation, X, Maximize2, Download } from "lucide-react";
import { Asset } from "@/lib/store";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface AssetPreviewProps {
  asset: Asset;
  onClose: () => void;
}

export function AssetPreview({ asset, onClose }: AssetPreviewProps) {
  const IconMap = {
    PDF: FileText,
    DOCX: File,
    XLSX: Table,
    PPTX: Presentation,
    IMAGE: ImageIcon,
  };

  const Icon = IconMap[asset.type] || File;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-stitch-primary/90 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-5xl bg-white rounded-stitch-xl overflow-hidden shadow-2xl flex flex-col h-full max-h-[85vh]"
      >
        {/* Preview Header */}
        <div className="p-4 border-b border-stitch-border flex items-center justify-between bg-stitch-surface/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-stitch-primary text-white">
              <Icon size={20} />
            </div>
            <div>
              <h3 className="font-display font-bold text-stitch-primary line-clamp-1">
                {asset.name}
              </h3>
              <p className="text-xs text-stitch-text-muted">
                {asset.type} • {(asset.size / 1024).toFixed(1)} KB
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
             <Button variant="outline" size="sm">
              <Download size={16} className="mr-2" />
              Download
            </Button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-stitch-error/10 hover:text-stitch-error rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Preview Content Area */}
        <div className="flex-1 bg-grid-slate-100 flex items-center justify-center p-8 overflow-auto">
          {asset.type === 'IMAGE' ? (
            <img 
              src={asset.url} 
              alt={asset.name} 
              className="max-w-full max-h-full object-contain rounded-stitch shadow-stitch-lg ring-1 ring-black/5"
            />
          ) : (
            <div className="max-w-md w-full text-center space-y-6">
              <div className="w-24 h-24 rounded-stitch-xl bg-stitch-surface flex items-center justify-center mx-auto shadow-stitch text-stitch-secondary border border-stitch-border">
                <Icon size={48} />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-display font-bold text-stitch-primary">
                  {asset.type} Document Loaded
                </h4>
                <p className="text-stitch-text-muted">
                  Claude Skills has parsed this asset's structure and contents. It's ready for stitching into your sequence.
                </p>
              </div>
              <div className="pt-4 flex flex-col items-center gap-2">
                <div className="flex -space-x-2">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-stitch-accent/20 flex items-center justify-center">
                        <Maximize2 size={12} className="text-stitch-accent" />
                     </div>
                   ))}
                </div>
                <span className="text-[10px] font-bold text-stitch-accent tracking-widest uppercase">
                  Skill fragments active
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Preview Footer */}
        <div className="p-4 bg-stitch-surface/30 border-t border-stitch-border text-center">
           <p className="text-[10px] text-stitch-text-muted font-medium uppercase tracking-[0.2em]">
            Processed via Academia Orchestrator • V1.0.4 - Secure Sandboxed Environment
           </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
