"use client";

import * as React from "react";
import { useDropzone } from "react-dropzone";
import { Upload, File, X, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppStore, Asset, AssetType } from "@/lib/store";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";

export function FileUploader() {
  const { currentProject, setCurrentProject } = useAppStore();
  const [isUploading, setIsUploading] = React.useState(false);

  const onDrop = React.useCallback(async (acceptedFiles: File[]) => {
    setIsUploading(true);
    
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    const newAssets: Asset[] = acceptedFiles.map(file => {
      const type = file.name.split('.').pop()?.toUpperCase() as AssetType;
      return {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: type || 'IMAGE',
        size: file.size,
        url: URL.createObjectURL(file), // Local preview URL
        processed: false
      };
    });

    if (currentProject) {
      const updatedProject = {
        ...currentProject,
        assets: [...currentProject.assets, ...newAssets],
        workflow: [...currentProject.workflow, ...newAssets.map(a => a.id)]
      };
      setCurrentProject(updatedProject);
    } else {
      setCurrentProject({
        id: Math.random().toString(36).substr(2, 9),
        title: "New Stitch Project",
        assets: newAssets,
        workflow: newAssets.map(a => a.id),
        createdAt: Date.now()
      });
    }

    setIsUploading(false);
    toast.success(`${acceptedFiles.length} files uploaded successfully!`);
  }, [currentProject, setCurrentProject]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
      'image/*': ['.png', '.jpg', '.jpeg', '.webp']
    }
  });

  const removeAsset = (id: string) => {
    if (!currentProject) return;
    const updatedAssets = currentProject.assets.filter(a => a.id !== id);
    const updatedWorkflow = currentProject.workflow.filter(assetId => assetId !== id);
    setCurrentProject({ ...currentProject, assets: updatedAssets, workflow: updatedWorkflow });
    toast.error("File removed");
  };

  return (
    <div className="space-y-6">
      <div
        {...getRootProps()}
        className={cn(
          "relative border-2 border-dashed rounded-stitch-lg p-10 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group",
          isDragActive 
            ? "border-stitch-accent bg-stitch-accent/5" 
            : "border-stitch-border hover:border-stitch-secondary hover:bg-stitch-surface",
          isUploading && "pointer-events-none opacity-60"
        )}
      >
        <input {...getInputProps()} />
        
        <div className="w-16 h-16 rounded-full bg-stitch-surface flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-stitch">
          {isUploading ? (
            <Loader2 className="w-8 h-8 text-stitch-secondary animate-spin" />
          ) : (
            <Upload className="w-8 h-8 text-stitch-secondary" />
          )}
        </div>

        <h3 className="text-lg font-display font-semibold text-stitch-primary mb-1">
          {isDragActive ? "Drop files here" : "Upload Academic Assets"}
        </h3>
        <p className="text-sm text-stitch-text-muted text-center max-w-xs">
          Drag and drop PDF, DOCX, XLSX, or images to start your stitching workflow.
        </p>

        {isDragActive && (
          <motion.div
            layoutId="drag-overlay"
            className="absolute inset-0 bg-stitch-accent/10 rounded-stitch-lg pointer-events-none"
          />
        )}
      </div>

      {/* Uploaded Files List */}
      <AnimatePresence>
        {currentProject && currentProject.assets.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {currentProject.assets.map((asset) => (
              <motion.div
                key={asset.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex items-center gap-3 p-4 bg-white border border-stitch-border rounded-stitch shadow-sm group hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-stitch bg-stitch-surface flex items-center justify-center text-stitch-secondary">
                  <File size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-stitch-primary truncate">
                    {asset.name}
                  </p>
                  <p className="text-xs text-stitch-text-muted">
                    {(asset.size / 1024).toFixed(1)} KB • {asset.type}
                  </p>
                </div>
                <button
                  onClick={() => removeAsset(asset.id)}
                  className="p-2 text-stitch-text-muted hover:text-stitch-error transition-colors opacity-0 group-hover:opacity-100"
                >
                  <X size={18} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
