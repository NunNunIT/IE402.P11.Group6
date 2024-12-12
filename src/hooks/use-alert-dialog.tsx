"use client";

import { useAlertDialogContext } from "@/provider/alert-dialog";
import { useCallback } from "react";

export function useAlertDialogWrapperFunction(callback: () => Promise<void>, options?: { title?: string, description?: string }) {
  const { onOpenChange, setTitle, setDescription, setAction } = useAlertDialogContext();
  
  const openAlertDialog = useCallback(() => {
    if (options?.title) setTitle(options.title);
    if (options?.description) setDescription(options.description);
    setAction(callback);
    onOpenChange(true);
  }, [onOpenChange, setTitle, setDescription, setAction, options, callback]);

  return openAlertDialog;
}
