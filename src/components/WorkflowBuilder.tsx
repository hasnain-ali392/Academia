"use client";

import * as React from "react";
import { Reorder, motion, AnimatePresence } from "framer-motion";
import { GripVertical, Layers, ArrowDown, Send, FileCheck, Loader2 } from "lucide-react";
import { useAppStore, type Asset } from "@/lib/store";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";

export function WorkflowBuilder() {
  const { currentProject, setCurrentProject, updateWorkflow } = useAppStore();
  const [isProcessing, setIsProcessing] = React.useState(false);

  if (!currentProject || currentProject.assets.length === 0) return null;

  const handleProcess = async () => {
    setIsProcessing(true);
    const loadingToast = toast.loading("Claude is stitching your documents...");

    try {
      const response = await fetch("/api/stitch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectId: currentProject.id,
          workflow: currentProject.workflow,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setCurrentProject({ ...currentProject, result: data.result });
        toast.success("Documents stitched successfully!", { id: loadingToast });
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      toast.error("Failed to process workflow", { id: loadingToast });
    } finally {
      setIsProcessing(false);
    }
  };

  // Map IDs to actual Asset objects for Reorder component
  const orderedAssets = currentProject.workflow
    .map(id => currentProject.assets.find(a => a.id === id))
    .filter((asset): asset is Asset => !!asset);

  return (
    <div className="space-y-8 mt-12 bg-stitch-surface/50 rounded-stitch-xl p-8 border border-stitch-border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-stitch bg-stitch-secondary text-white">
            <Layers size={20} />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold text-stitch-primary">
              Stitching Workflow
            </h3>
            <p className="text-sm text-stitch-text-muted">
              Reorder assets to define the stitching sequence.
            </p>
          </div>
        </div>

        <Button 
          variant="secondary" 
          onClick={handleProcess} 
          disabled={isProcessing}
          className="group relative px-8"
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Execute Workflow
              <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </Button>
      </div>

      <div className="relative">
        <Reorder.Group
          axis="y"
          values={currentProject.workflow}
          onReorder={updateWorkflow}
          className="space-y-3 relative z-10"
        >
          {orderedAssets.map((asset, index) => (
            <Reorder.Item
              key={asset.id}
              value={asset.id}
              className={cn(
                "group relative flex items-center gap-4 p-4 bg-white border rounded-stitch-lg cursor-grab active:cursor-grabbing transition-all duration-300 hover:shadow-lg",
                isProcessing && "pointer-events-none opacity-50"
              )}
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-stitch-surface text-stitch-text-muted group-hover:bg-stitch-secondary group-hover:text-white transition-colors">
                <span className="text-xs font-bold">{index + 1}</span>
              </div>
              
              <div className="w-10 h-10 rounded-stitch bg-stitch-surface flex items-center justify-center text-stitch-secondary group-hover:rotate-12 transition-transform">
                <FileCheck size={20} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-stitch-primary group-hover:text-stitch-secondary transition-colors truncate">
                  {asset.name}
                </p>
                <p className="text-xs text-stitch-text-muted">
                  {asset.type} • Process as skill-based fragment
                </p>
              </div>

              <div className="p-2 text-stitch-text-muted">
                <GripVertical size={20} />
              </div>

              {/* Decorative connector line */}
              {index < orderedAssets.length - 1 && (
                <div className="absolute -bottom-6 left-8 w-[2px] h-3 bg-gradient-to-b from-stitch-border to-transparent" />
              )}
            </Reorder.Item>
          ))}
        </Reorder.Group>

        {/* Backdrop Visual */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10 rounded-stitch-xl" />
      </div>
    </div>
  );
}
